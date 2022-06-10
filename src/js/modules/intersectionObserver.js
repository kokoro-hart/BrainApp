import shuffleNumberCounter from './counter';

const els = document.querySelectorAll('.is-split-text');

const splitText = els.forEach(el => {
  const str = el.innerHTML.trim().split("");
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});


//const elementsTrigger = document.querySelectorAll('.js-trigger');
// const elementsScrollObserver = new IntersectionObserver(targetsElements, {
//   root: null,
//   rootMargin: '-40% 0px',
//   threshold: 0
// });

// elementsTrigger.forEach(target => {
//   elementsScrollObserver.observe(target);
// });

// function targetsElements(entries, observer) {
//   entries.forEach(entry => {
//     const child = entry.target.children;

//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-active');
//       if (resultCounter !== null) {
//         shuffleNumberCounter(resultCounter, 1100, 0);
//       }
//       if (priceCounter !== null) {
//         shuffleNumberCounter(priceCounter, 1, 300);
//       }
//       observer.unobserve(entry.target);
//     }
//   });
// };


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

const addIntoViewClass = (elements, isIntersecting) => {
  if (isIntersecting) {
    elements.classList.add('is-active');
  }
}

const initCounter = (elements, isIntersecting) => {
  const resultCounter = document.querySelector('.js-result-counter');
  const priceCounter = document.querySelector('.js-price-counter');
  if (isIntersecting) {
    if (resultCounter !== null) {
      shuffleNumberCounter(resultCounter, 1100, 0);
    }
    if (priceCounter !== null) {
      shuffleNumberCounter(priceCounter, 1, 300);
    }
  }
}

const scrollObserver = new ScrollObserver('.js-trigger', addIntoViewClass, {
  root: null,
  rootMargin: '-40% 0px',
  threshold: 0
});

const counterObserver = new ScrollObserver('.js-counter-trigger', initCounter, {
  root: null,
  rootMargin: '-40% 0px',
  threshold: 0
});