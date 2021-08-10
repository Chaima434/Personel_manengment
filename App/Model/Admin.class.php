<?php
class Admin{
private $first_name;
private $last_name;
private $login;
private $password;




function __construct($first_name,$last_name,$login,$password)
{
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
 public function getAll()
        {
            try
            {
               include('../includes/connect_db.php');
                $T = array();
                $res = $bdd->query("SELECT * from admin");
                $i = 0;
                while($tab=$res->fetch(PDO::FETCH_NUM))
                {
                    $T[$i] = $Array = array
                    (	'id'=>$tab[0],
                        'first_name'=> $tab[1],
                        'last_name' => $tab[2],
                        'login' => $tab[3],
                        'password'=> $tab[4],
                        
                        
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



public function modifier(){ 

    include('../includes/connect_db.php');

       $id=$_GET['id'];
        
        $r=$bdd->exec(" UPDATE `admin` SET `first_name`='$this->first_name',`last_name`='$this->last_name',`login`='$this->login',`password`='$this->password' WHERE id= $id");
				
       // echo " UPDATE `admin` SET `first_name`='$this->first_name',`last_name`='$this->last_name',`login`='$this->login',`password`='$this->password' WHERE id= $id";
       // echo'oui';
        
}	







public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM admin WHERE id=\''.$_GET['id'].'\''); 
 
		echo'oui';	
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>