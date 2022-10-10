<!doctype html>
<html>
<head>
	<title> Første PHP-dokument </title>
	<meta charset="UTF-8">
</head>
<body>




<?php
//Tilkoblingsinformasjon
$tjener = "localhost";
$brukernavn = "root";
$passord = "";
$database = "tegneseriefigurer";

$kobling = new mysqli($tjener, $brukernavn, $passord, $database);

if ($kobling->connect_error) {
	die("<p>Noe gikk galt: " . $kobling->connect_error . "</p>");
} else {
	echo "<p>Koblingen virker.</p>";
}

$kobling->set_charset("utf8");

$sql = "SELECT * FROM blad";
$resultat = $kobling->query($sql);

echo "Spørringen <code style='display: block; margin: 1em;'>$sql</code> ga $resultat->num_rows rader.";

$sql = "SELECT figurnavn, bladnavn FROM figur JOIN blad ON figur.blad_id=blad.blad_id";
$resultat = $kobling->query($sql);

echo "<table>";
echo "<tr>";
	echo "<th>figurnavn</th>";
	echo "<th>bladnavn</th>";
echo "</tr>";

while($rad = $resultat->fetch_assoc()) {
	$figurnavn = $rad["figurnavn"];
	$bladnavn = $rad["bladnavn"];
	
	echo "<tr>";
		echo "<td>$figurnavn</td>";
		echo "<td><a href='figurer.php?blad_id'>$bladnavn</a></td>";
		echo "</tr>";
}

echo "</table>";
	






?>
<hr>

<?php



//kommentar test
/*kommentar test 2*/






$tall = rand(1,100);
echo "<p>Tallet er $tall</p>";


while ($tall<= 100) {
	echo "$tall<br>";
	$tall = $tall + 1;
}

$artist = array("Billie Eilish", "Madonna", "Prince", "Elton John", "Ice JJ Fish", "Scatman John");
echo "<h2>Artister</h2>";
for ($i=0; $i < count($artist); $i++) {
	echo "Artist med index $i: $artist[$i] <br>";
}








$matretter = array("Spaghetti Carbonara", "Potetstappe og pølse", "Panneduppe", "Fårikål", "Kakemix med hvit saus", "Langreist ananas med sitronpepper");
echo "<h2> Matretter </h2>";
for ($i=0; $i < count($matretter); $i++) {
	echo "Matrett nummer $i: $matretter[$i] <br>";
}



$rase = array("Anne Frank" => "Jøde", "Rosa Parks" => "Neger", "Osama Bin Laden" => "Islamist");
echo "<h2>Raser</h2>";
echo "<p>Anne Frank er en " . $rase["Anne Frank"] . ".</p>";

var_dump($rase);



?>
</body>
</html>