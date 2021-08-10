<?php 

require_once('../Model/personnel.class.php');

$personnel = new Personnel($_POST['first_name'], $_POST['last_name'], $_POST['CIN'],$_POST['email'],$_POST['login'], $_POST['password']);

$personnel->supprimer();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
