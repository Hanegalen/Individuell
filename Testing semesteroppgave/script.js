let arrData = [
    ["navn", "Arman"],
    ["jobbe i gruppe / alene"],
    ["jobbe face-to-face / digitalt"],
    ["følge arbeidsplan / freestyle"],
    ["spesifikk tid for spm / alltid tilgjengelig"],
    ["100% ferdig før går videre / move on"],
    []
];

let rawInput = document.getElementById("input");
let input;
let aLen = arrData.length;
let valid = true;
let rad = 0;
let output = document.getElementById("output");


function definerInput() {
    input = rawInput.value;
    return input;
}

function sjekkInputTom() {
    if (input == "") {
        output.innerHTML = "Vennligst skriv inn navn eller verdi";
        return valid = false;
    } else {
        return valid = true;
    }
}

function sjekkInputLedig() {
    for (i = 0; i < aLen; i++) {
        if (input == arrData[0][i]) {
            output.innerHTML = "Navnet finnes allerede";
            i = aLen;
            return valid = false;
        }
    }
}

function add() {
    definerInput();
    sjekkInputTom();
    sjekkInputLedig();
    if (valid == true && rad <= aLen) {
        arrData[rad].push(input);
        rad++;
        let tekstPlaceholder = arrData[rad][0];
        rawInput.value = "";
        rawInput.placeholder = tekstPlaceholder;
        rawInput.focus();
        return rad;
    } else {
        return;
    }
}

function test() {
    console.log("valid = " + valid);
    console.table(arrData);

}

function run() {
    add();
    test();
}