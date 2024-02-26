const author = document.getElementById('author');
const inputX = document.getElementById('xInput');
const inputY = document.getElementById('yInput');

function showOverlay(x, y) {
    const overDiv = document.createElement('div');
    overDiv.classList.add('overlay');
    overDiv.style.display = 'block';
    overDiv.style.left = x + 'px';
    overDiv.style.top = y + 'px';
    overDiv.textContent = `Зигмунд Фрейд (оригинальная транскрипция — Фройд; так как нем. 
        Sigmund Freud, немецкое произношение: [ˈziːkmʊnt ˈfʁɔʏt]; полное имя 
        Зигисмунд Шломо Фройд; 6 мая 1856 — 23 сентября 1939) — австрийский 
        психолог, психоаналитик, психиатр и невролог.`;
    author.appendChild(overDiv);
}

function hideOverlay() {
    author.removeChild(author.querySelector('.overlay'));
}

author.addEventListener('mouseover', () => {
    showOverlay(inputX.value, inputY.value);
});

author.addEventListener('mouseout', () => {
    hideOverlay();
});