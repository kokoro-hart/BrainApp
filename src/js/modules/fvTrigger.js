
const fvTrigger = document.getElementById('js-fv-trigger');
if (fvTrigger !== null) {
  setTimeout(() => {
    fvTrigger.classList.add('is-active');
  }, 500);
}