<?php
class Projet{
private $project_name;
private $Description;
private $date_deb;
private $date_fin;
private $Pourcentage;
private $prix;


function __construct($project_name,$Description,$date_deb,$date_fin,$Pourcentage,$prix){
$this->project_name = addslashes($project_name);
$this->Description = addslashes($Description);
$this->date_deb = addslashes($date_deb);
$this->date_fin = addslashes($date_fin);
$this->Pourcentage = addslashes($Pourcentage);
$this->prix =addslashes($prix);



}

public function ajouter(){ 

include('../includes/connect_db.php');
		
		$req = $bdd->exec("INSERT INTO `projet`(`project_name`, `Description`, `date_deb`,`date_fin`,`Pourcentage`,`prix`)	VALUES ('$this->project_name','$this->Description','$this->date_deb','$this->date_fin','$this->Pourcentage','$this->prix')");
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