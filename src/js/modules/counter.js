/**
 * 数値カウンター
 * @param {HTMLElement} target 対象のDOM要素
 * @param {number} num カウントアップのスピード
 * @param {number} startNum スタート時の数値
 */
export default function (target, num, startNum) {
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