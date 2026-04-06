const heading = document.getElementById('mainHeading');
const input = document.getElementById('textInput');
const para = document.getElementById('samplePara');
const card = document.querySelector('.card');


document.getElementById('btnChangeHeading').addEventListener('click', function() {
    if (input.value !== "") {
        heading.innerText = input.value;
    }
});


document.getElementById('btnChangeBg').addEventListener('click', function() {
    const colors = ['#ffeaa7', '#fab1a0', '#74b9ff', '#55efc4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
});


let currentFontSize = 16;
document.getElementById('btnIncreaseFont').addEventListener('click', function() {
    currentFontSize += 2;
    para.style.fontSize = currentFontSize + "px";
});


document.getElementById('btnTogglePara').addEventListener('click', function() {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});


document.getElementById('btnReset').addEventListener('click', function() {
    heading.innerText = "Welcome to JavaScript Lab";
    card.style.backgroundColor = "white";
    para.style.fontSize = "16px";
    para.style.display = "block";
    input.value = "";
    currentFontSize = 16;
});