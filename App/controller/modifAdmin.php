<?php 

require_once('../Model/Admin.class.php');

$admin = new Admin($_POST['first_name'], $_POST['last_name'], $_POST['login'], $_POST['password']);

$admin->modifier();
//header("Location:../ListeDesAdministrateur.php?resultat=oui");
//echo "oui";
//exit();
?>
