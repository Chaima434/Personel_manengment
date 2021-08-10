<?php 

require_once('../Model/Projet.class.php');

$projet = new Projet(null,null,null,null,null,null);

$projet->supprimer();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
