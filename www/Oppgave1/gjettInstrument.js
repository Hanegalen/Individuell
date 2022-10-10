function test() {
    document.getElementById('check').textContent = "Funker." + tilfeldigTall;
}

let tilfeldigTall;

function nyLyd() {
    tilfeldigTall = Math.floor(Math.random() * 5);
    var lyder = ["Obo", "Klarinett", "Fløyte", "Valthorn", "Fagott"];
    lyd = new Audio("Audio/" + lyder[tilfeldigTall] + ".mp3");
    lyd.play();
}

function spillAv() {
    lyd.play();
}