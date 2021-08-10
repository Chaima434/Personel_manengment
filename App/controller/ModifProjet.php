<?php 

require_once('../Model/projet.class.php');

$projet = new Projet($_POST['project_name'], $_POST['Description'], $_POST['date_deb'],$_POST['date_fin'],$_POST['Pourcentage'], $_POST['prix']);

$projet->modifier();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
