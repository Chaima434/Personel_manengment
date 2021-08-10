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
$this->pourcentage = addslashes($pourcentage);
$this->etat =addslashes($etat);



}

public function ajouter(){ 

include('../includes/connect_db.php');
        
        $req = $bdd->exec("INSERT INTO `tache`(`title`, `Description`, `personnel`,`projet`,`date_fin`,`pourcentage`,`etat`)  VALUES ('$this->title','$this->Description','$this->personnel','$this->projet','$this->date_fin','$this->pourcentage','$this->etat')");
        //echo "INSERT INTO `tache`(`title`, `Description`, `personnel`,`projet`,`date_fin`,`pourcentage`,`etat`)  VALUES ('$this->title','$this->Description','$this->personnel','$this->projet','$this->date_fin','$this->pourcentage','$this->etat')" ;
        echo'<span class="message_envoyer">OUI</span>';
                //return TRUE;
            
}



public function modifier(){ 

    include('../includes/connect_db.php');

       $id=$_GET['id'];
        
        $r=$bdd->exec(" UPDATE `tache` SET `title`='$this->title',`Description`='$this->Description',`personnel`='$this->personnel',`projet`='$this->projet',`date_fin`='$this->date_fin',`pourcentage`='$this->pourcentage',`etat`='$this->etat'
         WHERE id_task = $id");
                
        
       // echo'oui';
        
}   






public function supprimer(){ 
    
    include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM tache WHERE id_task=\''.$_GET['id_task'].'\''); 
 
        echo'oui';  
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>