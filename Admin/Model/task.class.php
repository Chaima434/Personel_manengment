<?php
class Task{
private $title;
private $Description;
private $personnel;
private $projet;
private $date_fin;
private $pourcentage;
private $etat;


function __construct($title,$Description,$personnel,$projet,$date_fin,$pourcentage,$etat){
$this->title = addslashes($title);
$this->Description = addslashes($Description);
$this->personnel = addslashes($personnel);
$this->projet = addslashes($projet);
$this->date_fin = addslashes($date_fin);
$this->Pourcentage = addslashes($pourcentage);
$this->etat =addslashes($etat);



}

public function ajouter(){ 

include('../includes/connect_db.php');
        
        $req = $bdd->exec("INSERT INTO `tache`(`title`, `Description`, `personnel`,`projet`,`date_fin`,`pourcentage`,`etat`)  VALUES ('$this->title','$this->Description','$this->personnel','$this->projet','$this->date_fin','$this->pourcentage','$this->etat')");
        echo'<span class="message_envoyer">OUI</span>';
                //return TRUE;
            
}



public function modifier(){ 

    include('../includes/connect_db.php');

       $id=$_GET['id'];
        
        $r=$bdd->exec(" UPDATE `admin` SET `nom_admin`='$this->nom_admin',`prenom_admin`='$this->prenom_admin',`email_admin`='$this->email_admin',`mot_de_passe`='$this->mot_de_passe',`login_admin`='$this->login_admin',`type_admin`='$this->type_admin' WHERE id_admin = $id");
                
        
       // echo'oui';
        
}   






public function supprimer(){ 
    
    include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM projet WHERE id_projet=\''.$_GET['id_projet'].'\''); 
 
        echo'oui';  
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>