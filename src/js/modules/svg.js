import { Ease24, Tween24 } from "tween24";

// パス要素を取得
const path = document.querySelectorAll(".p-mv__svg path");

path.forEach(el => {
  // パスの長さを取得
  const pathLength = el.getTotalLength();

  // パスの長さを破線の間隔として設定
  el.setAttribute("stroke-dasharray", String(pathLength));

  // アニメーション進捗のオブジェクト。valueの値をTweenさせる。目標値
  const tweenData = { progress: 0 };

  /**
   * アップデート時の実行する関数
   * 進捗率に応じてパスのオフセットを設定する
   */
  const update = () => {
    // 進捗率に長さを掛けたものがオフセット値
    const offset = pathLength * (tweenData.progress / 100);
    el.setAttribute("stroke-dashoffset", String(offset));
  };

  const pathTween = Tween24.serial(
    Tween24.prop(tweenData, { progress: 100 }),
    Tween24.tween(tweenData, 0.8, Ease24._1_SineIn, tweenData).onUpdate(update)
  );

  pathTween.play();
});
