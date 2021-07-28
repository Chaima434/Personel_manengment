<?php
class Admin{
private $first_name;
private $last_name;
private $login;
private $password;




function __construct($first_name,$last_name,$login,$password){
$this->first_name = addslashes($first_name);
$this->last_name = addslashes($last_name);
$this->login = addslashes($login);
$this->password = md5($password);



}

public function ajouter(){ 

include('../includes/connect_db.php');
		
		$req = $bdd->exec("INSERT INTO `admin`(`first_name`, `last_name`, `login`, `password`)	VALUES ('$this->first_name','$this->last_name','$this->login','$this->password')");
		
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

    $req = $bdd->exec('DELETE FROM admin WHERE id_admin=\''.$_GET['id'].'\''); 
 
		echo'oui';	
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>