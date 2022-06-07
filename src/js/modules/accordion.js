
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.classList.add('u-hidden');
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
};

const slideDown = (el, duration = 300) => {
  el.classList.add("is-open");
  el.classList.remove('u-hidden');
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

const slideToggle = (el, duration = 300) => {
  if (el.classList.contains('u-hidden')) {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

/* =================================================== */
// DOM操作
/* =================================================== */

const accordions = document.querySelectorAll(".js-accordion");
const accordionsArr = Array.prototype.slice.call(accordions);

accordionsArr.forEach((accordion) => {
  const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
  const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);

  accordionTriggersArr.forEach((trigger) => {
    const clickEvent = () => {
      trigger.classList.toggle("is-active");
      const content = trigger.querySelector(".js-accordion-content");
      slideToggle(content);

      if (content.getAttribute('aria-expanded') == 'false') {
        content.setAttribute('aria-expanded', 'true');
        content.setAttribute('area-hidden', 'false');
      } else {
        content.setAttribute('aria-expanded', 'false')
        content.setAttribute('area-hidden', 'true');
      };
    }
    // クリックイベント
    trigger.addEventListener("click", () => {
      clickEvent();
    });
    // キーボード処理
    // ターゲットフォーカス時にいずれかのキーが押された場合
    trigger.addEventListener('keypress', keypress_ivent);
    function keypress_ivent(e) {
      clickEvent();
      return false;
    }
  });
});