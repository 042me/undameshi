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

function showRandomCard() {
  const img = document.getElementById("card-image");
  if (!img) return;

  // フェード初期化
  img.classList.remove("visible");
  img.style.opacity = "0";

  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  // src設定前に onload を仕込む（重要）
  img.onload = () => {
    requestAnimationFrame(() => {
      img.classList.add("visible");
    });
  };

  img.src = selectedCard.imageUrl;
}

// 初期表示
window.addEventListener("load", showRandomCard);
