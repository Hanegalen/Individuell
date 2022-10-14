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

    
    while (celsius[celsius.length - 1] == 0) {
        celsius = (celsius.substring(0, celsius.length - 1))
        celsius.length--;
        if (celsius[celsius.length - 1] == "." && celsius[celsius.length - 1] == ".") {
            
        }

    }

/*    while (celsius[cLengde - 1] == 0 || celsius[cLengde - 1] == "." && celsius[cLengde - 2] + celsius[cLengde - 1] != Number + ".") {
        celsius = (celsius.substring(0, celsius.length -1));
        cLengde--;
    }

    while (fahrenheit[fLengde - 1] == 0 || fahrenheit[fLengde - 1] == "." && fahrenheit[fLengde - 2] + fahrenheit[fLengde - 1] != Number + ".") {
        fahrenheit = (fahrenheit.substring(0, fahrenheit.length -1));
        fLengde--;
    }

    while (kelvin[kLengde - 1] == 0 || kelvin[kLengde - 1] == "." && kelvin[kLengde] - 2 + kelvin[kLengde - 1] != Number + ".") {
        kelvin = (kelvin.substring(0, kelvin.length -1));
        kLengde--;
    }
*/

    console.log(celsius + " Celsius");
    console.log(fahrenheit + " Fahrenheit");
    console.log(kelvin + " Kelvin");

}

function test() {
    resultat();
    log();
}