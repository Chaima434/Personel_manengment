<?php
class Personnel{
private $first_name;
private $last_name;
private $CIN;
private $email;
private $login;
private $password;




function __construct($first_name,$last_name,$CIN,$email,$login,$password){
$this->first_name = addslashes($first_name);
$this->last_name = addslashes($last_name);
$this->CIN = addslashes($CIN);
$this->email = addslashes($email);
$this->login = addslashes($login);
$this->password = md5($password);



}

public function ajouter(){ 

include('../includes/connect_db.php');
		
		$req = $bdd->exec("INSERT INTO `personnel`(`first_name`, `last_name`,`CIN`,`email`, `login`, `password`)	VALUES ('$this->first_name','$this->last_name','$this->CIN','$this->email','$this->login','$this->password')");

		echo'<span class="message_envoyer">OUI</span>';
                //return TRUE;
			
}

public function modifier(){ 

    include('../includes/connect_db.php');

       $id=$_GET['id'];
        
        $r=$bdd->exec(" UPDATE `personnel` SET `first_name`='$this->first_name',`last_name`='$this->last_name',`CIN`='$this->CIN',`email`='$this->email',`login`='$this->login',`password`='$this->password' WHERE id_personnel = $id");
				
        
       // echo'oui';


}
public function getAll()
        {
            try
            {
               include('../includes/connect_db.php');
                $T = array();
                $res = $bdd->query("SELECT * from personnel");
                $i = 0;
                while($tab=$res->fetch(PDO::FETCH_NUM))
                {
                    $T[$i] = $Array = array
                    (	'id'=>$tab[0],
                        'first_name'=> $tab[1],
                        'last_name' => $tab[2],
                        'CIN' => $tab[3],
                        'email' => $tab[4],
                        'login' => $tab[5],
                        'password'=> $tab[6],
                        
                        
                    );
                    $i++;
                }
                return $T;
            }
            catch(Exception $e)
            {
                echo "Error : ".$e;
                return null;
            }
        }


public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM personnel WHERE id_personnel=\''.$_GET['id_personnel'].'\''); 
 
		echo'oui';	
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>