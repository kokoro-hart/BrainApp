
/**
 * メニューを閉じる（スライドアップ）
 * @param {HTMLElement} el 対象のDOM要素
 * @param {number} duration 秒数
 */
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionDelay = -1 + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;

  setTimeout(() => {
    el.classList.add('u-hidden');
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
    el.classList.remove("is-open");
  }, duration);
};

/**
 * メニューを開く（スライドダウン）
 * @param {HTMLElement} el 対象のDOM要素
 * @param {number} duration 秒数
 */
const slideDown = (el, duration = 300) => {
  el.classList.add("is-open");
  el.classList.remove('u-hidden');
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

/**
 * 要素をスライドしながら交互に表示/非表示にする関数
 * @param {HTMLElement} el 対象のDOM要素
 * @param {number} duration 秒数
 */
const slideToggle = (el, duration = 300) => {
  if (el.classList.contains('u-hidden')) {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

const accordions = document.querySelectorAll(".js-accordion");
const accordionsArr = Array.prototype.slice.call(accordions);

accordionsArr.forEach((accordion) => {
  const accordionTriggers = accordion.querySelectorAll(".js-accordion-trigger");
  const accordionTriggersArr = Array.prototype.slice.call(accordionTriggers);

  accordionTriggersArr.forEach((trigger) => {
    // クリックイベント
    const clickEvent = () => {
      // クラスの付与・削除
      trigger.classList.toggle("is-active");
      const content = trigger.querySelector(".js-accordion-content");
      slideToggle(content);

      // aria属性の操作
      if (content.getAttribute('aria-expanded') == 'false') {
        content.setAttribute('aria-expanded', 'true');
        content.setAttribute('area-hidden', 'false');
      } else {
        content.setAttribute('aria-expanded', 'false')
        content.setAttribute('area-hidden', 'true');
      };
    }
    
    trigger.addEventListener("click", () => {
      clickEvent();
    });
    // ターゲットフォーカス時にいずれかのキーが押された場合
    trigger.addEventListener('keypress', keypress_ivent);
    function keypress_ivent(e) {
      clickEvent();
      return false;
    }
  });
});