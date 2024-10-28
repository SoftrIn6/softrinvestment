const texts = ["INVEST", "Earn", "super high interest"];
let index = 0;

function rotateText() {
    const rotatingText = document.getElementById('rotating-text');
    index = (index + 1) % texts.length;
    rotatingText.textContent = texts[index];
}

setInterval(rotateText, 3000);
