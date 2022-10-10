<?php
include 'funksjoner.php';
?>

<!doctype html>
<html>
<head>
	<title> Gjett tallet </title>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="stylesheet.css">
	
	<script src="gjettTallet.js"></script>
	
	
</head>

<body>
	<div id="tabell">
		<table>
			<tr>
				<td id="forsok"> </td>
				<td>
					<img src="Bilder/Hjerte.png">
				</td>
			</tr>
			<tr>
				<td id="poeng"> </td>
				<td><img src="Bilder/Stjerne.png"></td>
			</tr>
		</table>
	
	</div>
	<!--
	<div id="forsok"> </div>
	<div id="poeng"> </div>
	<div id="ikoner">
		<img src="Bilder/Hjerte.png" id="hjerte"> <br> 
		<img src="Bilder/Stjerne.png" id="stjerne">
	</div>
-->
	<div id="body">
		<button onclick="nyttSpill()">Nytt spill</button>
		<br><br>
	
		<label for="svar">Gjett et tall mellom 1 og 100:</label>
		<br><br>
		<div id="gjettFelt">
			<input type="text" maxlength="3" id="svar" onchange="if (getElementById('svar').value !='') sjekkForslag();">
			<button onclick="if (getElementById('svar').value !='') {sjekkForslag();} else {getElementById('svar').focus(); return false}" id="btnForslag"> Gjett </button>
		</div>

	
		<p id="forsokStatus"> </p>
		<p id="forsokHint"> </p>
		<p id="debug"> </p>
		<h1 id="gameOver" style="display: none">GAME OVER</h1>
		<p id=gameOverStats> </p>
		<br>
		<button onclick="visSvar()">Vis Svar</button>
	</div>

	<div id="highscore">
		<form>
			<input type="text" id="brukernavn">
			<button type="submit">Lagre highscore</button>
		</form>
		
		<?php 
			//print('her skal highscore-tabellen');
			//skrivHighScoreTabell();
			//dbTilkobling();
		?>

	</div>

	<?php
		$kobling = dbTilkobling();
		$sql = "SELECT * FROM highscore";
		$resultat  = $kobling->query($sql);

		echo "Spørringen $sql ga $resultat->num_rows rader.";
	?>
	


</body>


</html>