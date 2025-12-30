/*
  出現率を上げたいものを多めに入れる
  21〜24.png：3倍
  25〜30.png：1倍
*/
const omikujiPics = [
  "21.png","21.png","21.png",
  "22.png","22.png","22.png",
  "23.png","23.png","23.png",
  "24.png","24.png","24.png",
  "25.png","26.png","27.png","28.png","29.png","30.png"
];

document.addEventListener("DOMContentLoaded", () => {
  let isOmikuji = false;

  const img = document.getElementById("card-image");
  const sound = document.getElementById("clickSound");

  if (!img) {
    console.error("❌ #card-image が見つかりません（idを確認）");
    return;
  }

  console.log("✅ JS起動 OK / click待機中");

  function fadeIn() {
    requestAnimationFrame(() => {
      img.classList.add("visible");
    });
  }

  function changeImageWithFade(src) {
    img.classList.remove("visible");
    img.style.opacity = "0";

    img.addEventListener("load", fadeIn, { once: true });
    img.src = src;

    // キャッシュ対策
    if (img.complete) fadeIn();
  }

  img.addEventListener("click", () => {
    console.log("👆 click detected");

    // 効果音
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }

    if (!isOmikuji) {
      const idx = Math.floor(Math.random() * omikujiPics.length);
      const next = omikujiPics[idx];
      console.log("➡️ show:", next);
      changeImageWithFade(next);
      isOmikuji = true;
    } else {
      console.log("↩️ back to 20.png");
      changeImageWithFade("20.png");
      isOmikuji = false;
    }
  });
});
