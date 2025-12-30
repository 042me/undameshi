const cards = [
  { name: "undameshi", imageUrl: "21.png" },
  { name: "undameshi", imageUrl: "22.png" },
  { name: "undameshi", imageUrl: "23.png" },
  { name: "undameshi", imageUrl: "24.png" },
  { name: "undameshi", imageUrl: "25.png" },
  { name: "undameshi", imageUrl: "26.png" },
  { name: "undameshi", imageUrl: "27.png" },
  { name: "undameshi", imageUrl: "28.png" },
  { name: "undameshi", imageUrl: "29.png" },
  { name: "undameshi", imageUrl: "30.png" }
];

function fadeIn(img) {
  requestAnimationFrame(() => {
    img.classList.add("visible");
  });
}

function showRandomCard() {
  const img = document.getElementById("card-image");
  if (!img) return; // DOM未生成なら何もしない

  // 毎回確実にフェードさせるため初期化
  img.classList.remove("visible");
  img.style.
