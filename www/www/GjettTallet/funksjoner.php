<?php
    function skrivHighScoreTabell() {
        ?>
        <table border="1">
            <tr>
                <th> Spiller </th>
                <th> Poeng </th>
            </tr>
            
            <?php
                $highscore = hentHighscore();
                foreach ($highscore as $rad) {
                    ?>
                    <?php
                        if(isset($_GET["brukernavn"])) {
                            $brukernavn = $_GET["brukernavn"];
                        }
                        else {
                            die("Du må angi et brukernavn.");
                        }
                        $kobling = dbTilkobling();


                        $kobling->set_charset("utf8");

                        $sql = "SELECT * FROM highscore WHERE brukernavn=$brukernavn";
                        $resultat = $kobling->query($sql);

                        while($rad = $resultat->fetch-assoc()) {
                            $brukernavn = $rad["brukernavn"];
                            $poeng = $rad["poeng"];

                            echo "Brukeren $brukernavn har $poeng poeng.";
                        }


                    ?>
                    
                    
                    <tr>
                        <td><?php echo $rad[0]; ?></td>
                        <td><?php echo $rad[1]; ?></td>
                </tr>
                    <?php
                }
                //Kodene som fletter ut highscore i rader
            ?>
        </table>
        <?php
        
    }

function hentHighscore() {
		$kobling = dbTilkobling();
		$sql = "SELECT * FROM highscore";
		$resultat  = $kobling->query($sql);

		echo "Spørringen $sql ga $resultat->num_rows rader.";
        return $resultat;
}

function dbTilkobling() {
    $tjener = "localhost";
    $brukernavn = "root";
    $passord = "";
    $database = "highscore";
    $kobling = new mysqli($tjener, $brukernavn, $passord, $database);
    if ($kobling->connect_error) {
        die("Noe gikk galt: " . $kobling->connect_error);
    }
    else {
        echo "Koblingen virker";
        $kobling->set_charset("utf8");
        return $kobling;
    }
    
}

?>