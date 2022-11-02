var arrData = []; //tom array for pushing av input
let antallArrays = arrData.length;
let z = new Date();


//funksjon for adding av informasjon til array "arrData"
function add() {
    //hvis input-felt for navn er tomt, 
    //gi bruker beskjed og avslutt funksjon
    if (document.getElementById("navn").value == "") {
        document.getElementById("feil").innerHTML = "Vennligst skriv inn navn";
        return;
    }
        //lag ny array i array arrData
        //(blir en multidimensjonell array)
        //og push input-data i den nye arrayen 
        arrData[antallArrays] = new Array(8);
        arrData[antallArrays].push(document.getElementById("navn").value);
        let dato = z.getFullYear().toString() + z.getMonth().toString() + z.getDate().toString() + z.getHours() + z.getMinutes() + z.getSeconds();
        let randomString = Math.floor(Math.random() * 10000).toString(16) + Math.floor(Math.random() * 10000).toString(16) + Math.floor(Math.random() * 10000).toString(16) + Math.floor(Math.random() * 10000).toString(16);
        let id = dato + "-" + randomString;

        for (let i = 1; i < 8; i++) {
            arrData[antallArrays].push(document.getElementById("spm"+i).value);
            document.getElementById("spm" + i).value = 50;
            document.getElementById("navn").value = "";
        }
        arrData[antallArrays].push(id);
        console.table(arrData);
        console.log(id);
        antallArrays++;
        
        }

        function konvTilJson() {
            var jsonData = JSON.stringify(arrData);
            console.log(jsonData);
            var jsData = JSON.parse(jsonData);
            console.log(jsData);
            console.table(jsData);

        }

function display() {
    for (let b = 0; b < arrData.length; b++) {
        for (c = 0; c < arrData[b].length; c++) {
            
        }
    }
}
