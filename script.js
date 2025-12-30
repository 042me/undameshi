/*
  出現率を上げたいものを多めに入れる
  21〜24.png：3倍
  25〜30.png：1倍
*/
const omikujiPics = [
  // 高確率ゾーン
  "21.png","21.png","21.png",
  "22.png","22.png","22.png",
  "23.png","23.png","23.png",
  "24.png","24.png","24.png",

  // 通常確率ゾーン
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png"
];

document.addEventListener("DOMContentLoaded", () => {
  let isOmikuji = false;

  const img = document.getElementById("card-image");
  const sound = document.getElementById("clickSound");

  if (!img) {
    console.error("Error: #card-image が見つかりません");
    return;
  }

  function fadeIn() {
    requestAnimationFrame(() => {
      img.classList.add("visible");
    });
  }

  function changeImageWithFade(src) {
    // いったん透明に（毎回フェードさせる）
    img.classList.remove("visible");
    img.style.opacity = "0";

    // 読み込み後にフェードイン（1回だけ）
    img.addEventListener("load", fadeIn, { once: true });

    // 画像切替
    img.src = src;

    // キャッシュ対策
    if (img.complete) {
      fadeIn();
    }
  }

  // 初期は 20.png をそのまま表示（フェードさせない設計）
  // 初期もフェードしたい場合は次の1行を有効に：
  // changeImageWithFade("20.png");

  img.addEventListener("click", () => {
    // 効果音
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }

    if (!isOmikuji) {
      const idx = Math.floor(Math.random() * omikujiPics.length);
      changeImageWithFade(omikujiPics[idx]);
      isOmikuji = true;
    } else {
      changeImageWithFade("20.png");
      isOmikuji = false;
    }
  });
});
