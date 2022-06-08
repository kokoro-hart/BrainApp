const shuffleNumberCounter = (target, num, startNum) => {
  const targetNum = Number(target.getAttribute('data-num'))

  if (!targetNum) {
    return
  }

  let counterData = null
  const speed = num / targetNum
  let initNum = startNum

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      target.innerHTML = initNum
    } else {
      target.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`
    }

    initNum++

    if (initNum > targetNum) {
      target.innerHTML = targetNum
      clearInterval(counterData)
    }
  }

  counterData = setInterval(countUp, speed)
}

// intersectionObserver
class ScrollObserver {
  constructor(elements, callback, options) {
    this.elements = document.querySelectorAll(elements);
    const defaultOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };
    this.callback = callback;
    this.options = Object.assign(defaultOptions, options);//デフォルトオプションと指定したオプションをマージする
    this._init();
  }

  //初期化処理
  _init() {
    const initCallbackFunction = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.callback(entry.target, true);
          observer.unobserve(entry.target);
        } else {
          this.callback(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(initCallbackFunction.bind(this), this.options);
    this.elements.forEach(element => this.io.observe(element));
  }
}

const resultCounter = document.querySelector('.js-result-counter');
const priceCounter = document.querySelector('.js-price-counter');

function addIntoViewClass() {
  const addIntoViewClass = (elements, isIntersecting) => {
    if (isIntersecting) {
      elements.classList.add('is-active');
      if (resultCounter !== null) {
        shuffleNumberCounter(resultCounter, 1000, 0);
      }
      if (priceCounter !== null) {
        shuffleNumberCounter(priceCounter,  1, 300);
      }
    }
  }
  const scrollObserver = new ScrollObserver('.js-trigger', addIntoViewClass, {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0
  });
}
addIntoViewClass();