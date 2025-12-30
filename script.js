const randomPics = [
  "21.png", "22.png", "23.png", "24.png", "25.png",
  "26.png", "27.png", "28.png", "29.png", "30.png"
];

let showingRandom = false; // false: 20.png表示中 / true: ランダム表示中

function rerunFadeAnimation(img) {
  // アニメーションを毎回リスタートさせる小技
  img.style.animation = "none";
  // reflow（これがないと再実行されないことがある）
  void img.offsetWidth;
  img.style.animation = "";
}

function setImageWithFade(img, src) {
  // フェードを毎回確実に走らせる
  rerunFadeAnimation(img);
  img.src = src;
}

window.addEventListener("load", () => {
  const img = document.getElementById("card-image");
  if (!img) return;

  // 初期表示(20.png)も確実にフェード（必要ないならこの行は消してOK）
  setImageWithFade(img, "20.png");

  img.addEventListener("click", () => {
    if (!showingRandom) {
      const idx = Math.floor(Math.random() * randomPics.length);
      setImageWithFade(img, randomPics[idx]);
      showingRandom = true;
    } else {
      setImageWithFade(img, "20.png");
      showingRandom = false;
    }
  });
});
