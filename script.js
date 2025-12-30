const cards = [
  { imageUrl: "21.png" },
  { imageUrl: "22.png" },
  { imageUrl: "23.png" },
  { imageUrl: "24.png" },
  { imageUrl: "25.png" },
  { imageUrl: "26.png" },
  { imageUrl: "27.png" },
  { imageUrl: "28.png" },
  { imageUrl: "29.png" },
  { imageUrl: "30.png" }
];

window.addEventListener("load", () => {
  const img = document.getElementById("card-image");
  if (!img) return;

  const randomIndex = Math.floor(Math.random() * cards.length);
  img.src = cards[randomIndex].imageUrl;
});
