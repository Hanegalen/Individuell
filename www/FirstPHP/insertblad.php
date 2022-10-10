<!doctype html>
<html>
<head>
	<title>SELECT-spørringer</title>
	<meta charset="UTF-8">
</head>
<body>

<?php
if(isset($_POST["leggtil"])) {
	$tjener = "localhost";
	$brukernavn = "root";
	$passord = "";
	$database = "tegneseriefigurer";

	$kobling = new mysqli($tjener, $brukernavn, $passord, $database);

	if ($kobling->connect_error) {
		die("Noe gikk galt: ". $kobling->connect_error);
	}
	$kobling->set_charset("utf8");

	$bladnavn = $_POST["bladnavn"];

	$sql = "INSERT INTO blad (bladnavn) VALUES ('$bladnavn')";

	if $kobling->query($sql)) {
		echo "Spørringen $sql ble gjennomført.";
	} else {
		echo "Noe gikk galt med spørringen $sql
			($kobling->error).";
	}
}
?>

<form method="POST">
	Bladnavn
	<input type="text" name="bladnavn">

	<input type="submit" name="leggtil" value="Legg til">
</form>

</body>
</html>