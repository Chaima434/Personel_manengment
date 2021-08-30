<?php 

require_once('../Model/personnel.class.php');

$personnel = new Personnel(null,null,null,null,null,null,null);

$personnel->supprimer();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
