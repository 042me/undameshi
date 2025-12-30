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
  console.log("✅ JS loaded"); // ← これが出なければJS未読込

  const img = document.getElementById("card-image");
  if (!img) {
    console.error("❌ #card-image が見つかりません（id確認）");
    return;
  }

  const randomIndex = Math.floor(Math.random() * cards.length);
  const selected = cards[randomIndex];

  console.log("➡️ try set:", selected.imageUrl);

  img.onerror = () => {
    console.error("❌ 画像が読み込めません:", selected.imageUrl);
  };

  img.onload = () => {
    console.log("✅ loaded:", selected.imageUrl);
  };

  img.src = selected.imageUrl;
});
