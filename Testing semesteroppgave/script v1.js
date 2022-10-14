let arrListe = [];

var navn;
var spm1;
var spm2;
var spm3;
var spm4;
var spm5;

var lengdeArrListe = arrListe.length;

function add() {
    var input = document.getElementById("input").value;

    for (i = 0; i < arrListe.length; i++) {
        input;
        if (input == arrListe[i][0]) {
            console.log("Navn er allerede lagt inn");
            return;
        } else if (input == "") {
            console.log("Vennligst skriv inn en verdi");
            return;
        } else {
            arrListe.push(input);
            document.getElementById("input").value = "";
            console.log(arrListe[lengdeArrListe[0]]);
            console.table(arrListe);
            return arrListe;
        }
    }

}

function neste() {
    
}
