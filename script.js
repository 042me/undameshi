const cards = [
  { name: "daikichi", imageUrl: "img/daikichi.png" },
  { name: "chukichi", imageUrl: "img/chukichi.png" },
  { name: "chukichi", imageUrl: "img/chukichi.png" },
  { name: "chukichi", imageUrl: "img/chukichi.png" },
  { name: "chukichi", imageUrl: "img/chukichi.png" },
  { name: "shokichi", imageUrl: "img/shokichi.png" },
  { name: "shokichi", imageUrl: "img/shokichi.png" },
  { name: "shokichi", imageUrl: "img/shokichi.png" },
  { name: "shokichi", imageUrl: "img/shokichi.png" },
  { name: "kyou", imageUrl: "img/kyou.png" }
];

window.addEventListener("load", () => {
  const img = document.getElementById("card-image");

  // 毎回確実にフェードさせるためリセット
  img.classList.remove("visible");
  img.style.opacity = 0;

  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  // 読み込み完了後にフェードイン
  img.onload = () => {
    requestAnimationFrame(() => {
      img.classList.add("visible");
    });
  };

  img.src = selectedCard.imageUrl;
});
