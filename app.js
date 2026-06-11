/*
  共用渲染邏輯。
  data/trip-data.js 負責組合資料；各 HTML 頁面只放該頁需要的區塊。
*/

const appSource = window.TRIP_DATA;

if (!appSource) {
  throw new Error("找不到 TRIP_DATA，請確認 data/trip-data.js 是否正確載入。");
}

const appData = {
  ...appSource.meta,
  ...appSource,
  trip: appSource.meta,
  overview: appSource.meta?.overview
};

let activeDayIndex = 0;

function cleanTemplateLinks(content) {
  content.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      link.remove();
      return;
    }

    const linkText = link.textContent.trim();
    const linkType = link.dataset.link || link.dataset.linkType || getLinkTypeFromText(linkText);
    link.classList.add("text-link", "link-chip", `link-chip--${linkType}`);
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function hasRenderableTemplateContent(content) {
  return Boolean(content.querySelector("img, a"));
}

function getLinkTypeFromText(text) {
  if (text.includes("地圖") || text.includes("Map")) return "map";
  if (text.includes("官網")) return "official";
  if (text.includes("票券")) return "ticket";
  if (text.includes("路線")) return "route";
  return "reference";
}

const linkTypeLabels = {
  map: "📍 Google 地圖",
  official: "🌐 官方網站",
  ticket: "🎫 購票資訊",
  route: "🗺 路線規劃",
  reference: "📖 備查資料",
  restaurant: "🍽 餐廳",
  other: "🔗 相關連結"
};

function getScheduleLinkType(link) {
  return link.type || getLinkTypeFromText(link.label || "") || "other";
}

function getScheduleLinkLabel(link) {
  const type = getScheduleLinkType(link);
  return link.label || linkTypeLabels[type] || linkTypeLabels.other;
}

function getOptionalText(value) {
  return value === undefined || value === null ? "" : String(value).trim();
}

function escapeHtml(value) {
  return getOptionalText(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getLightboxCardItems(card) {
  try {
    const items = JSON.parse(card.dataset.lightboxItems || "[]");

    if (Array.isArray(items)) {
      const parsedItems = items
        .map((item) => ({
          src: getOptionalText(item.src),
          title: getOptionalText(item.title),
          description: getOptionalText(item.description)
        }))
        .filter((item) => item.src);

      if (parsedItems.length) {
        return parsedItems;
      }
    }
  } catch {
    // Fall through to legacy data attributes.
  }

  const images = (card.dataset.images || "")
    .split(",")
    .map((imagePath) => imagePath.trim())
    .filter(Boolean);

  if (images.length) {
    return images.map((src) => ({
      src,
      title: getOptionalText(card.dataset.title),
      description: getOptionalText(card.dataset.description)
    }));
  }

  const singleImage = getOptionalText(card.dataset.image);
  return singleImage
    ? [
        {
          src: singleImage,
          title: getOptionalText(card.dataset.title),
          description: getOptionalText(card.dataset.description)
        }
      ]
    : [];
}

function getTransportStyleAttribute(item) {
  const background = getOptionalText(item.transportStyle?.background);
  const color = getOptionalText(item.transportStyle?.color);
  const styles = [];

  if (background) {
    styles.push(`background: ${background}`);
  }

  if (color) {
    styles.push(`color: ${color}`);
  }

  return styles.length ? ` style="${styles.join("; ")}"` : "";
}

const currencySymbols = {
  JPY: "¥",
  TWD: "NT$",
  THB: "฿",
  KRW: "₩",
  USD: "US$",
  EUR: "€"
};

function getItemCurrency(item, day) {
  return (getOptionalText(item.currency) || getOptionalText(day.currency) || "JPY").toUpperCase();
}

function formatCurrency(amount, currency) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(amount);
  const symbol = currencySymbols[currency];

  return symbol ? `${currency} ${symbol}${formattedAmount}` : `${currency} ${formattedAmount}`;
}

function formatEstimatedCost(item, day) {
  const estimatedCostText = getOptionalText(item.estimatedCostText);

  if (estimatedCostText) {
    return estimatedCostText;
  }

  if (Number.isFinite(item.estimatedCost)) {
    return formatCurrency(item.estimatedCost, getItemCurrency(item, day));
  }

  return getOptionalText(item.estimatedCost);
}

function getItemNoteText(item) {
  return Array.isArray(item.note)
    ? item.note.filter(Boolean).join("、")
    : getOptionalText(item.note || item.notes || item.remark);
}

function wrapTemplateImages(content, variant) {
  const isDayVisual = variant === "day";

  content.querySelectorAll("img").forEach((image) => {
    if (image.closest(".day-visual-card, .spot-preview")) {
      return;
    }

    const figure = document.createElement("figure");
    const button = document.createElement("button");
    const caption = image.dataset.caption || image.alt || "";
    const title = image.dataset.title || image.alt || (isDayVisual ? "每日圖卡" : "景點預覽");
    const description = image.dataset.description || caption;

    figure.className = isDayVisual ? "day-visual-card" : "spot-preview";
    figure.dataset.lightboxCard = "";
    figure.dataset.title = title;
    figure.dataset.description = description;
    figure.dataset.image = image.getAttribute("src") || "";

    button.className = isDayVisual ? "day-visual-card__button" : "spot-preview__button";
    button.type = "button";
    button.dataset.lightboxTrigger = "";

    image.loading = image.loading || "lazy";
    image.dataset.hideOnError = "";
    image.dataset.hideTarget = isDayVisual ? ".day-visual-card" : ".spot-preview";

    image.replaceWith(figure);
    button.append(image);
    figure.append(button);

    if (isDayVisual && caption) {
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = caption;
      figure.append(figcaption);
    }
  });
}

function groupLooseTemplateLinks(content) {
  const links = [...content.querySelectorAll("a")].filter(
    (link) => !link.closest(".schedule-links")
  );

  if (!links.length) {
    return;
  }

  const linksGroup = document.createElement("div");
  linksGroup.className = "schedule-links";
  links[0].before(linksGroup);
  links.forEach((link) => linksGroup.append(link));
}

function cloneTemplate(selector) {
  const template = document.querySelector(selector);

  if (!template) {
    return null;
  }

  const content = document.createElement("div");
  content.append(template.content.cloneNode(true));
  cleanTemplateLinks(content);
  groupLooseTemplateLinks(content);

  return content;
}

function renderDayVisual(dayNumber) {
  const content = cloneTemplate(`template[data-day-visual][data-day="${dayNumber}"]`);

  if (!content || !hasRenderableTemplateContent(content)) {
    return "";
  }

  wrapTemplateImages(content, "day");

  return `
    <div class="day-card__visual">
      ${content.innerHTML}
    </div>
  `;
}

function createImageCard(image, title, description, variant, options = {}) {
  const imageItem = image && typeof image === "object" ? image : null;
  const imageSrc = getOptionalText(imageItem?.src ?? image);

  if (!imageSrc) {
    return "";
  }

  const isDayVisual = variant === "day";
  const cardClass = isDayVisual ? "day-visual-card" : "spot-preview";
  const buttonClass = isDayVisual ? "day-visual-card__button" : "spot-preview__button";
  const hideTitle = options.hideTitle === true || imageItem?.hideTitle === true;
  const hideDescription = options.hideDescription === true || imageItem?.hideDescription === true;
  const providedTitle = imageItem && title === undefined ? imageItem.title : title;
  const providedDescription = imageItem && description === undefined ? imageItem.description : description;
  const imageTitle = hideTitle
    ? ""
    : getOptionalText(providedTitle) || (isDayVisual ? "每日圖卡" : "景點預覽");
  const imageDescription = hideDescription ? "" : getOptionalText(providedDescription) || imageTitle;
  const lightboxIndex = Number.isInteger(options.lightboxIndex) ? options.lightboxIndex : 0;
  const lightboxItems = Array.isArray(options.lightboxItems) && options.lightboxItems.length
    ? options.lightboxItems
        .map((item, index) => {
          const itemHideTitle = item?.hideTitle === true || (hideTitle && index === lightboxIndex);
          const itemHideDescription = item?.hideDescription === true || (hideDescription && index === lightboxIndex);

          return {
            src: getOptionalText(item?.src),
            title: itemHideTitle ? "" : getOptionalText(item?.title),
            description: itemHideDescription ? "" : getOptionalText(item?.description)
          };
        })
        .filter((item) => item.src)
    : [{ src: imageSrc, title: imageTitle, description: imageDescription }];
  const hasVisibleDescription = !hideDescription && Boolean(getOptionalText(providedDescription));
  const imageAlt = imageTitle || "旅程圖片";

  return `
    <figure
      class="${cardClass}"
      data-lightbox-card
      data-title="${escapeHtml(imageTitle)}"
      data-description="${escapeHtml(imageDescription)}"
      data-image="${escapeHtml(imageSrc)}"
      data-lightbox-items="${escapeHtml(JSON.stringify(lightboxItems))}"
      data-lightbox-index="${lightboxIndex}"
    >
      <button class="${buttonClass}" type="button" data-lightbox-trigger>
        <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" loading="lazy" data-hide-on-error data-hide-target=".${cardClass}" />
      </button>
      ${isDayVisual && hasVisibleDescription ? `<figcaption>${escapeHtml(imageDescription)}</figcaption>` : ""}
    </figure>
  `;
}

function getScheduleImageItems(item) {
  const fallbackTitle = getOptionalText(item.place) || "景點預覽";
  const fallbackDescription = getOptionalText(item.activity) || getItemNoteText(item);

  if (Array.isArray(item.imageDetails)) {
    const imageDetails = item.imageDetails
      .map((image) => {
        const src = getOptionalText(image?.src);

        return {
          src,
          title: image?.hideTitle === true ? "" : getOptionalText(image?.title) || fallbackTitle,
          description: image?.hideDescription === true ? "" : getOptionalText(image?.description) || fallbackDescription,
          hideTitle: image?.hideTitle === true,
          hideDescription: image?.hideDescription === true
        };
      })
      .filter((image) => image.src);

    if (imageDetails.length) {
      return imageDetails;
    }
  }

  if (Array.isArray(item.images)) {
    return item.images
      .map((image, index) => {
        const src = getOptionalText(image);
        return {
          src,
          title: item.images.length > 1 ? `${fallbackTitle} ${index + 1}` : fallbackTitle,
          description: fallbackDescription
        };
      })
      .filter((image) => image.src);
  }

  const singleImage = getOptionalText(item.image);
  return singleImage
    ? [
        {
          src: singleImage,
          title: fallbackTitle,
          description: fallbackDescription
        }
      ]
    : [];
}

function renderScheduleImages(item) {
  const images = getScheduleImageItems(item);

  if (!images.length) {
    return "";
  }

  if (images.length === 1) {
    return createImageCard(
      images[0].src,
      images[0].title,
      images[0].description,
      "spot",
      {
        lightboxItems: images,
        lightboxIndex: 0,
        hideTitle: images[0].hideTitle,
        hideDescription: images[0].hideDescription
      }
    );
  }

  return `
    <div class="spot-preview-strip" aria-label="${escapeHtml(getOptionalText(item.place) || "景點")}圖片預覽">
      ${images
        .map((image, index) =>
          createImageCard(
            image.src,
            image.title,
            image.description,
            "spot",
            {
              lightboxItems: images,
              lightboxIndex: index,
              hideTitle: image.hideTitle,
              hideDescription: image.hideDescription
            }
          )
        )
        .join("")}
    </div>
  `;
}

function renderDayCardVisual(day) {
  if (!day.dayCard?.image) {
    return renderDayVisual(day.day);
  }

  return `
    <div class="day-card__visual">
      ${createImageCard(
        day.dayCard.image,
        day.dayCard.title || `Day ${day.day} 圖卡`,
        day.dayCard.description || day.title,
        "day"
      )}
    </div>
  `;
}

function renderScheduleLinks(links) {
  const visibleLinks = Array.isArray(links)
    ? links.filter((link) => getOptionalText(link?.url))
    : [];

  if (!visibleLinks.length) {
    return "";
  }

  return `
    <div class="schedule-links">
      ${visibleLinks
        .map(
          (link) => `
            <a
              class="text-link link-chip link-chip--${getScheduleLinkType(link)}"
              href="${escapeHtml(link.url)}"
              target="_blank"
              rel="noreferrer"
            >
              ${getScheduleLinkLabel(link)}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRestaurantInfo(item) {
  const restaurant = item.restaurant;
  const name = restaurant?.name?.trim();

  if (!name) {
    return "";
  }

  const links = Array.isArray(restaurant.links)
    ? restaurant.links.filter((link) => link.url)
    : [];
  const note = restaurant.note?.trim();

  return `
    <div class="restaurant-info">
      <p class="restaurant-info__label">
        <span class="restaurant-info__icon" aria-hidden="true">🍽</span>
        <span>餐廳</span>
      </p>
      <p class="restaurant-info__name">${name}</p>
      ${note ? `<p class="restaurant-info__note">${note}</p>` : ""}
      ${renderScheduleLinks(links)}
    </div>
  `;
}

function renderScheduleDataExtra(item) {
  const links = Array.isArray(item.links)
    ? item.links.filter((link) => link.url)
    : [];
  const imageCards = renderScheduleImages(item);
  const restaurantInfo = renderRestaurantInfo(item);

  if (!imageCards && !links.length && !restaurantInfo) {
    return "";
  }

  return `
    ${imageCards}
    ${restaurantInfo}
    ${renderScheduleLinks(links)}
  `;
}

function renderItineraryExtra(dayNumber, stopNumber, item) {
  const extraContent = cloneTemplate(
    `template[data-itinerary-extra][data-day="${dayNumber}"][data-stop="${stopNumber}"]`
  );
  const legacyLinks = cloneTemplate(
    `template[data-itinerary-links][data-day="${dayNumber}"][data-stop="${stopNumber}"]`
  );
  const content = document.createElement("div");
  const dataExtra = renderScheduleDataExtra(item);

  if (dataExtra) {
    content.innerHTML = dataExtra;
  }

  if (extraContent && hasRenderableTemplateContent(extraContent)) {
    wrapTemplateImages(extraContent, "spot");
    content.append(...extraContent.childNodes);
  }

  if (legacyLinks?.querySelector("a")) {
    const links = document.createElement("div");
    links.className = "schedule-links";
    links.append(...legacyLinks.childNodes);
    content.append(links);
  }

  if (!content.innerHTML.trim()) {
    return "";
  }

  return `
    <div class="timeline-item__extra">
      ${content.innerHTML}
    </div>
  `;
}

function renderDailySummary(day) {
  const label = getOptionalText(day.dailySummary?.label);
  const value = getOptionalText(day.dailySummary?.value);

  if (!label && !value) {
    return "";
  }

  return `
    <div class="day-card__subtotal">
      ${label ? `<span>${label}</span>` : ""}
      ${value ? `<strong>${value}</strong>` : ""}
    </div>
  `;
}

function renderDays(data) {
  const daysContainer = document.getElementById("days-container");

  if (!daysContainer) {
    return;
  }

  daysContainer.innerHTML = data.days
    .map((day) => {
      const themeText = getOptionalText(day.theme);

      return `
        <article class="day-card panel" data-day-card="${day.day}">
          <div class="day-card__header">
            <div>
              <p class="day-card__label">第 ${day.day} 天</p>
              <h3>${day.title}</h3>
              <p class="day-card__date">${day.date}</p>
            </div>
            ${themeText ? `<p class="day-card__theme">${themeText}</p>` : ""}
          </div>

          <p class="day-card__intro">${day.intro}</p>
          ${renderDayCardVisual(day)}

          <div class="day-card__timeline">
            ${day.schedule
              .map((item, itemIndex) => {
                const costText = formatEstimatedCost(item, day);
                const timeText = getOptionalText(item.time);
                const placeText = getOptionalText(item.place);
                const transportText = getOptionalText(item.transport);
                const transportStyleAttribute = getTransportStyleAttribute(item);
                const activityText = getOptionalText(item.activity);
                const routeInfo = item.routeInfo || "";
                const noteText = Array.isArray(item.note)
                  ? item.note.filter(Boolean).join("、")
                  : item.note || item.notes || item.remark || "";

                return `
                  <section class="timeline-item${timeText ? "" : " timeline-item--no-time"}">
                    ${
                      timeText
                        ? `<div class="timeline-item__time">${timeText}</div>`
                        : ""
                    }

                    <div class="timeline-item__body">
                      <div class="timeline-item__title-row">
                        <h4>${placeText}</h4>
                        ${
                          transportText
                            ? `<span class="transport-chip"${transportStyleAttribute}>${transportText}</span>`
                            : ""
                        }
                      </div>

                      ${activityText ? `<p class="timeline-item__activity">${activityText}</p>` : ""}
                      ${
                        item.address
                          ? `<p class="timeline-item__address">地址：${item.address}</p>`
                          : ""
                      }

                      <dl class="timeline-item__details">
                        ${
                          costText
                            ? `
                              <div>
                                <dt>預估費用</dt>
                                <dd>${costText}</dd>
                              </div>
                            `
                            : ""
                        }
                        ${
                          routeInfo
                            ? `
                              <div>
                                <dt>路程資訊</dt>
                                <dd>${routeInfo}</dd>
                              </div>
                            `
                            : ""
                        }
                        ${
                          noteText
                            ? `
                              <div>
                                <dt>備註</dt>
                                <dd>${noteText}</dd>
                              </div>
                            `
                            : ""
                        }
                      </dl>

                      ${renderItineraryExtra(day.day, itemIndex + 1, item)}
                    </div>
                  </section>
                `;
              })
              .join("")}
          </div>

          ${renderDailySummary(day)}
        </article>
      `;
    })
    .join("");
}

/*
  每日頁籤會依照 days 自動生成。
  若之後增減天數，只要調整 data/trip-data.js 的 days 陣列即可。
*/
function renderDayTabs(data) {
  const tabsContainer = document.getElementById("day-tabs");

  if (!tabsContainer) {
    return;
  }

  tabsContainer.innerHTML = data.days
    .map(
      (day, index) => `
        <button
          class="day-tab"
          type="button"
          role="tab"
          aria-selected="${index === activeDayIndex ? "true" : "false"}"
          data-day-tab="${index}"
        >
          第 ${day.day} 天
        </button>
      `
    )
    .join("");
}

function updateActiveDay(index) {
  activeDayIndex = index;

  document.querySelectorAll("[data-day-tab]").forEach((tab, tabIndex) => {
    const isActive = tabIndex === activeDayIndex;
    tab.classList.toggle("day-tab--active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("[data-day-card]").forEach((card, cardIndex) => {
    const isActive = cardIndex === activeDayIndex;
    card.hidden = !isActive;
    card.setAttribute("aria-hidden", String(!isActive));
  });

  const activeTab = document.querySelector(`[data-day-tab="${activeDayIndex}"]`);
  if (activeTab) {
    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

function bindDayTabs() {
  const tabsContainer = document.getElementById("day-tabs");

  if (!tabsContainer) {
    return;
  }

  tabsContainer.addEventListener("click", (event) => {
    const target = event.target.closest("[data-day-tab]");
    if (!target) {
      return;
    }

    updateActiveDay(Number(target.dataset.dayTab));
  });
}

const checklistStorageKey = "travel-template-checklist";

function getChecklistData() {
  return Array.isArray(window.TRIP_CHECKLIST) ? window.TRIP_CHECKLIST : [];
}

function loadChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(checklistStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  localStorage.setItem(checklistStorageKey, JSON.stringify(state));
}

function updateChecklistProgress(checklist, state) {
  checklist.forEach((group) => {
    const groupCompleted = group.items.filter((item) => state[`${group.id}:${item.id}`]).length;
    const progress = document.querySelector(`[data-checklist-progress="${group.id}"]`);
    if (progress) {
      progress.textContent = `${groupCompleted} / ${group.items.length} 已完成`;
    }
  });
}

function initChecklist() {
  const container = document.getElementById("checklist-container");

  if (!container) {
    return;
  }

  const checklist = getChecklistData();
  const state = loadChecklistState();

  container.innerHTML = checklist
    .map(
      (group) => `
        <article class="panel checklist-card" data-checklist-group="${group.id}">
          <div class="checklist-card__header">
            <div>
              <h2>${group.title}</h2>
              <p data-checklist-progress="${group.id}">0 / ${group.items.length} 已完成</p>
            </div>
            <button class="checklist-clear" type="button" data-checklist-clear="${group.id}">
              全部清除
            </button>
          </div>
          <div class="checklist-items">
            ${group.items
              .map((item) => {
                const key = `${group.id}:${item.id}`;
                const checked = Boolean(state[key]);
                return `
                  <label class="checklist-item ${checked ? "is-checked" : ""}">
                    <input
                      type="checkbox"
                      data-checklist-item="${key}"
                      ${checked ? "checked" : ""}
                    />
                    <span class="checklist-item__box" aria-hidden="true"></span>
                    <span class="checklist-item__text">${item.text}</span>
                  </label>
                `;
              })
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

  updateChecklistProgress(checklist, state);

  container.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-checklist-item]");
    if (!checkbox) {
      return;
    }

    state[checkbox.dataset.checklistItem] = checkbox.checked;
    checkbox.closest(".checklist-item")?.classList.toggle("is-checked", checkbox.checked);
    saveChecklistState(state);
    updateChecklistProgress(checklist, state);
  });

  container.addEventListener("click", (event) => {
    const clearButton = event.target.closest("[data-checklist-clear]");
    if (!clearButton) {
      return;
    }

    const groupId = clearButton.dataset.checklistClear;
    checklist
      .find((group) => group.id === groupId)
      ?.items.forEach((item) => {
        const key = `${groupId}:${item.id}`;
        state[key] = false;
        const checkbox = container.querySelector(`[data-checklist-item="${key}"]`);
        if (checkbox) {
          checkbox.checked = false;
          checkbox.closest(".checklist-item")?.classList.remove("is-checked");
        }
      });

    saveChecklistState(state);
    updateChecklistProgress(checklist, state);
  });
}

function initReferenceLightbox() {
  const lightbox = document.getElementById("reference-lightbox");

  if (!lightbox) {
    return;
  }

  const image = document.getElementById("lightbox-image");
  const title = document.getElementById("lightbox-title");
  const description = document.getElementById("lightbox-description");
  const fallback = document.getElementById("lightbox-fallback");
  const media = lightbox.querySelector(".lightbox__media");
  const caption = lightbox.querySelector(".lightbox__caption");
  const gallery = document.getElementById("lightbox-gallery") || document.createElement("div");
  const controls = document.createElement("div");
  const previousButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const counter = document.createElement("span");
  const closeButtons = lightbox.querySelectorAll("[data-lightbox-close]");
  let lastFocusedElement = null;
  let lightboxItems = [];
  let currentImageIndex = 0;
  let touchStartX = 0;

  gallery.id = "lightbox-gallery";
  gallery.className = "lightbox__gallery";
  gallery.hidden = true;

  if (!gallery.parentElement && media) {
    media.insertBefore(gallery, fallback);
  }

  controls.className = "lightbox__controls";
  previousButton.className = "lightbox__control lightbox__control--previous";
  previousButton.type = "button";
  previousButton.textContent = "‹";
  previousButton.setAttribute("aria-label", "上一張圖片");
  nextButton.className = "lightbox__control lightbox__control--next";
  nextButton.type = "button";
  nextButton.textContent = "›";
  nextButton.setAttribute("aria-label", "下一張圖片");
  counter.className = "lightbox__counter";
  controls.append(previousButton, counter, nextButton);

  if (caption) {
    caption.before(controls);
  } else {
    media?.after(controls);
  }

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("is-lightbox-open");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const updateLightboxImage = () => {
    const item = lightboxItems[currentImageIndex];
    const hasMultipleImages = lightboxItems.length > 1;

    fallback.hidden = true;
    gallery.hidden = true;
    gallery.innerHTML = "";
    media?.classList.remove("lightbox__media--gallery");
    controls.hidden = !hasMultipleImages;
    counter.hidden = !hasMultipleImages;
    previousButton.hidden = !hasMultipleImages;
    nextButton.hidden = !hasMultipleImages;

    if (!item?.src) {
      image.hidden = true;
      image.removeAttribute("src");
      title.textContent = "旅程備查圖卡";
      description.textContent = "";
      fallback.hidden = false;
      return;
    }

    title.textContent = item.title || "旅程備查圖卡";
    description.textContent = item.description || "";
    image.hidden = false;
    image.alt = `${title.textContent}大圖`;
    image.src = item.src;
    counter.textContent = `第 ${currentImageIndex + 1} / ${lightboxItems.length} 張`;
  };

  const showLightboxImage = (index) => {
    if (!lightboxItems.length) {
      return;
    }

    currentImageIndex = (index + lightboxItems.length) % lightboxItems.length;
    updateLightboxImage();
  };

  const showPreviousImage = () => {
    showLightboxImage(currentImageIndex - 1);
  };

  const showNextImage = () => {
    showLightboxImage(currentImageIndex + 1);
  };

  const openLightbox = (card) => {
    lightboxItems = getLightboxCardItems(card);
    currentImageIndex = Number.parseInt(card.dataset.lightboxIndex, 10);

    if (!Number.isInteger(currentImageIndex)) {
      currentImageIndex = 0;
    }

    if (currentImageIndex < 0 || currentImageIndex >= lightboxItems.length) {
      currentImageIndex = 0;
    }

    lastFocusedElement = document.activeElement;
    fallback.hidden = true;
    image.removeAttribute("src");
    updateLightboxImage();
    lightbox.hidden = false;
    document.body.classList.add("is-lightbox-open");
    closeButtons[0]?.focus();
  };

  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
  });

  previousButton.addEventListener("click", showPreviousImage);
  nextButton.addEventListener("click", showNextImage);

  media?.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX || 0;
  }, { passive: true });

  media?.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0]?.clientX || 0;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 44 || lightboxItems.length <= 1) {
      return;
    }

    if (swipeDistance > 0) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  }, { passive: true });

  document.querySelectorAll("[data-lightbox-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-lightbox-trigger]");
      if (!trigger) {
        return;
      }

      openLightbox(card);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft" && lightboxItems.length > 1) {
      showPreviousImage();
    } else if (event.key === "ArrowRight" && lightboxItems.length > 1) {
      showNextImage();
    }
  });
}

function bindImageFallbacks() {
  document.querySelectorAll("img[data-hide-on-error]").forEach((image) => {
    const hideBrokenImage = () => {
      const targetSelector = image.dataset.hideTarget;
      const target = targetSelector ? image.closest(targetSelector) : image;
      if (!target) {
        return;
      }
      target.hidden = true;

      const wrapper = image.closest(".timeline-item__extra");
      if (wrapper && !wrapper.querySelector("a") && !wrapper.querySelector("figure:not([hidden])")) {
        wrapper.hidden = true;
      }

      const dayVisual = image.closest(".day-card__visual");
      if (dayVisual && !dayVisual.querySelector("figure:not([hidden])")) {
        dayVisual.hidden = true;
      }
    };

    image.addEventListener("error", hideBrokenImage);

    if (image.complete && image.naturalWidth === 0) {
      hideBrokenImage();
    }
  });
}

function initBackToTopButton() {
  const button = document.createElement("button");
  button.className = "back-to-top";
  button.type = "button";
  button.textContent = "↑";
  button.setAttribute("aria-label", "回到頁面頂部");
  document.body.append(button);

  const toggleButton = () => {
    button.classList.toggle("is-visible", window.scrollY > 400);
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
}

function initCopyButtons() {
  document.querySelectorAll("[data-copy-button]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copyButton || "";
      if (!text) {
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        const originalText = button.textContent;
        button.textContent = "已複製";
        window.setTimeout(() => {
          button.textContent = originalText;
        }, 1400);
      } catch {
        button.textContent = "請手動複製";
      }
    });
  });
}

renderDays(appData);
renderDayTabs(appData);
bindDayTabs();
updateActiveDay(0);
initChecklist();
bindImageFallbacks();
initReferenceLightbox();
initBackToTopButton();
initCopyButtons();
