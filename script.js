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

window.onload = function() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  // カード画像を表示
  document.getElementById('card-image').src = selectedCard.imageUrl;
};
