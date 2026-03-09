function showMessage() {
document.getElementById("demo").innerText="Welcome! This is my portfolio.";
}
function Contactme() {
    alert("you can reach me on: manvi8oct@gmail.com");
}
function changeBackground() {
    document.body.style.background = "#b3ae34";
}
let text = "A CS student| Future developer| Coder| enterpeneur| businesswomen";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
    