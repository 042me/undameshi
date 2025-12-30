<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
    }

    #card-image {
        width: 100%;
        height: auto;
        max-width: 600px;
        opacity: 0; /* 最初は透明 */
        transition: opacity 1.2s ease-in; /* フェードの時間 */
    }

    /* 表示したときに opacity を 1 にするクラス */
    .visible {
        opacity: 1;
    }
</style>
</head>
<body>

<img id="card-image" src="" alt="おみくじ画像">

<script>
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
    const img = document.getElementById("card-image");

    img.src = cards[randomIndex].imageUrl;

    // 画像の読み込みが完了したら visible クラスを付けてフェードイン
    img.onload = () => {
        img.classList.add("visible");
    };
});
</script>

</body>
</html>
