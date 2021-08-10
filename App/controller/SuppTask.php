<?php 

require_once('../Model/task.class.php');

$task = new Task(null,null,null,null,null,null,null);

$task->supprimer();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
