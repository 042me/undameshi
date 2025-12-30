window.addEventListener("load", () => {
    const cards = [
        { name: "omikuji", imageUrl: "images/21.png" },
        { name: "omikuji", imageUrl: "images/22.png" },
        { name: "omikuji", imageUrl: "images/23.png" },
        { name: "omikuji", imageUrl: "images/24.png" },
        { name: "omikuji", imageUrl: "images/25.png" },
        { name: "omikuji", imageUrl: "images/26.png" },
        { name: "omikuji", imageUrl: "images/27.png" },
        { name: "omikuji", imageUrl: "images/28.png" },
        { name: "omikuji", imageUrl: "images/29.png" },
        { name: "omikuji", imageUrl: "images/30.png" }
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);
    document.getElementById("card-image").src = cards[randomIndex].imageUrl;
});
