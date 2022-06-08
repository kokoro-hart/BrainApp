
const svg01 = document.querySelector(".fvSvg01");
const svg02 = document.querySelector(".fvSvg02");
const svg03 = document.querySelector(".svg03");
const svg04 = document.querySelector(".svg04");

const scaleAnimation = (el, from, to, duration=7000) => {
  el.animate(
    {
      transform: [
        `${from}`,
        `${to}`
      ]
    },
    {
      iterations: Infinity,
      direction: 'alternate',
      duration: duration
    }
  );
}

setTimeout(() => {
  scaleAnimation(
    svg01,
    'translate(-50%, -50%) scale(1, 1) rotate(-90deg)',
    'translate(-50%, -50%) scale(1, 0.9) rotate(-180deg)',
  );
  scaleAnimation(
    svg02,
    'translateX(50%) scale(1, 1) rotate(0)',
    'translateX(50%) scale(1.1, 0.9) rotate(-60deg)'
  );

  const mediaQuery = window.matchMedia('(min-width: 1440px)')
  if (mediaQuery.matches) {
    scaleAnimation(
      svg03,
      'translate(-83%, 50%) scale(1, 1) rotate(90deg)',
      'translate(-83%, 50%) scale(1.1, 0.9) rotate(125deg)'
    );
  } else {
    scaleAnimation(
      svg03,
      'translate(-50%, 50%) scale(1, 1) rotate(90deg)',
      'translate(-50%, 50%) scale(1.1, 0.9) rotate(45deg)',
    );
  }

  scaleAnimation(
    svg04,
    'translate(-50%, -50%) scale(1, 1) rotate(180deg)',
    'translate(-50%, -50%) scale(1.1, 0.9) rotate(90deg)',
  );
}, 2000);