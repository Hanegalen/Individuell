let tall;
let poeng = 0;
let forsok;


// antallForsøk
function antallForsok() {
    document.getElementById('forsok').textContent = forsok;
}

function antallPoeng() {
    document.getElementById('poeng').textContent = poeng;
}

function nyttSpill() {
        // nyttSpill
        tall = Math.floor(Math.random()*100)+1;
        forsok = 10;
        poeng = 0;
        document.getElementById('svar').disabled = false;
        document.getElementById('svar').focus();
        document.getElementById('forsokStatus').textContent = " ";
        document.getElementById('gameOver').style.display = "none";
        document.getElementById('gameOverStats').textContent = "";
        document.getElementById('btnForslag').disabled = false;
        antallPoeng();
		visSvar();
        antallForsok();
	} 
	
	function sjekkForslag() {
        // sjekkForslag
        var forslag = document.getElementById ('svar').value;
        // document.getElementById('forsokHint').textContent = "Du har foreslått " + forslag;
     
        // Sjekk om numerisk
        if ( isNaN(forslag)) {
		    document.getElementById('forsokHint').textContent = "Skriv inn et tall da. Idiot...";
            return false;
        }

        // Sjekk om riktig svar
        

        if (forslag > tall ) {
            // Hvis forslag er større enn tall
            forsok--;
            document.getElementById('forsokStatus').textContent = "" + forslag + " er for høyt. Prøv igjen.";
            document.getElementById('svar').value = "";
            document.getElementById('svar').focus();
            document.getElementById('forsokHint').textContent = " ";
            antallForsok();
        }

        else if (forslag < tall) {
            // Hvis forslag er mindre enn tall
            forsok--;
            document.getElementById('forsokStatus').textContent = forslag + " er for lavt. Prøv igjen.";
            document.getElementById('svar').value = "";
            document.getElementById('svar').focus();
            document.getElementById('forsokHint').textContent = " ";
            antallForsok();
        }

        else {
            // Hvis riktig svar
            poeng++;
            forsok = forsok + 3;
            document.getElementById('forsokStatus').textContent = forslag + " er korrekt! Ett poeng og tre ekstra forsøk til deg, baby!";
            antallPoeng();
            document.getElementById('svar').value = "";
            document.getElementById('forsokHint').textContent = " ";
            tall = Math.floor(Math.random()*100)+1;
            visSvar();
            antallForsok();



        }

        if (forsok == 0) {
            //Game over
            document.getElementById('gameOver').style.display = "block";
            document.getElementById('svar').disabled = true;
            document.getElementById('btnForslag').disabled = true;
            document.getElementById('gameOverStats').textContent = "Du fikk " + poeng + " poeng!";
            
        }
	}
   
    function visSvar() {
		document.getElementById('debug').textContent = "Tallet er " + tall;
        
    }
	