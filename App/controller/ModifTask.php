<?php 

require_once('../Model/task.class.php');

$task = new Task($_POST['title'], $_POST['Description'], $_POST['personnel'], $_POST['projet'],$_POST['date_fin'],$_POST['pourcentage'], $_POST['etat']);

$task->modifier();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();

?>
