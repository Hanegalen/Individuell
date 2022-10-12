var mV;
var celsius;
var fahrenheit;
var kelvin;



function resultat() {
    mV = document.getElementById("input").value;
    celsius = (mV - 500) / 10;
    fahrenheit = celsius * 1.8 + 32;
    kelvin = celsius + 273.15;
}


function log() {
    kelvin = kelvin.toFixed(3);
    fahrenheit = fahrenheit.toFixed(3);
    celsius = celsius.toFixed(3);
    
    var kLengde = kelvin.length;
    var fLengde = fahrenheit.length;
    var cLengde = celsius.length;

    for (celsius[cLengde - 1] == 0 || celsius[cLengde - 1] == "."; cLengde--;) {
        celsius = (celsius.substring(0, celsius.length -1));
            if (celsius[cLengde -1] != ".") {
                cLengde--;
            }
    }

    for (fahrenheit[fLengde - 1] == 0 || fahrenheit[fLengde - 1] == "."; fLengde--;) {
        fahrenheit = (fahrenheit.substring(0, fahrenheit.length -1));
            if (fahrenheit[fLengde -1] != ".") {
                fLengde--;
            }
    }
    for (kelvin[kLengde - 1] == 0 || kelvin[kLengde - 1] == "."; kLengde--;) {
        kelvin = (kelvin.substring(0, kelvin.length -1));
            if (kelvin[kLengde -1] != ".") {
                kLengde--;
            }
    }
    
    console.log(celsius);
    console.log(fahrenheit);
    console.log(kelvin);

}

function test() {
    resultat();
    log();
}