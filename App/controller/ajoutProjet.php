<?php 

require_once('../Model/Projet.class.php');

$projet = new Projet($_POST['project_name'], $_POST['Description'],$_POST['personnel'], $_POST['date_deb'],$_POST['date_fin'],$_POST['Pourcentage'], $_POST['prix']);

$projet->ajouter();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
