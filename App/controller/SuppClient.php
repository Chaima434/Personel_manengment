<?php 

require_once('../Model/client.class.php');

$client = new Client($_POST['nom_client'], $_POST['immatriculation'], $_POST['raison_social'], $_POST['type_de_payment'],$_POST['adresse'],$_POST['tel']);

$client->supprimer();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
