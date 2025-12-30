const cards = [
    { name: "omikuji", imageUrl: "21.png" },
    { name: "omikuji", imageUrl: "22.png" },
    { name: "omikuji", imageUrl: "23.png" },
    { name: "omikuji", imageUrl: "24.png" },
    { name: "omikuji", imageUrl: "25.png" },
     { name: "omikuji", imageUrl: "21.png" },
     { name: "omikuji", imageUrl: "21.png" },
    { name: "omikuji", imageUrl: "22.png" },
    { name: "omikuji", imageUrl: "23.png" },
    { name: "omikuji", imageUrl: "22.png" },
    { name: "omikuji", imageUrl: "23.png" },
    { name: "omikuji", imageUrl: "24.png" },
    { name: "omikuji", imageUrl: "25.png" },
    { name: "omikuji", imageUrl: "26.png" },
    { name: "omikuji", imageUrl: "27.png" },
    { name: "omikuji", imageUrl: "28.png" },
    { name: "omikuji", imageUrl: "29.png" },
    { name: "omikuji", imageUrl: "30.png" }
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};
