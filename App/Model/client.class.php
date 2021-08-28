<?php
class Client{
private $nom_client;
private $immatriculation;
private $raison_social;
private $type_de_payment;
private $adresse;
private $tel;




function __construct($nom_client,$immatriculation,$raison_social,$type_de_payment, $adresse,$tel)
{
$this->nom_client = addslashes($nom_client);
$this->immatriculation = addslashes($immatriculation);
$this->raison_social = addslashes($raison_social);
$this->type_de_payment = addslashes($type_de_payment);
$this->adresse = addslashes($adresse);
$this->tel = addslashes($tel);
}

public function ajouter(){ 

include('../includes/connect_db.php');
		
		$req = $bdd->exec("INSERT INTO `client`(`nom_client`, `immatriculation`, `raison_social`, `type_de_payment`,`adresse`, `tel`)	VALUES ('$this->nom_client','$this->immatriculation','$this->raison_social','$this->type_de_payment' ,'$this->adresse','$this->tel')");
		
		echo'<span class="message_envoyer">OUI</span>';
                //return TRUE;
			
}
 public function getAll()
        {
            try
            {
               include('../includes/connect_db.php');
                $T = array();
                $res = $bdd->query("SELECT * from client");
                $i = 0;
                while($tab=$res->fetch(PDO::FETCH_NUM))
                {
                    $T[$i] = $Array = array
                    (	'id_client'=>$tab[0],
                        'nom_client'=> $tab[1],
                        'immatriculation' => $tab[2],
                        'raison_social' => $tab[3],
                        'type_de_payment'=> $tab[4],
                        'adresse' => $tab[5],
                        'tel'=> $tab[6],
                        
                        
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
        
        $r=$bdd->exec(" UPDATE `client` SET `nom_client`='$this->nom_client',`immatriculation`='$this->immatriculation',`raison_social`='$this->raison_social',`type_de_payment`='$this->type_de_payment' ,`adresse`='$this->adresse', `tel`='$this->tel' WHERE id_client = $id" );
              // echo " UPDATE `admin` SET `first_name`='$this->first_name',`immatriculation`='$this->immatriculation',`login`='$this->login',`password`='$this->password' WHERE id= $id";
       // echo'oui';
        
}	







public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM client WHERE id_client=\''.$_GET['id_client'].'\''); 
 
		echo'oui';	
 
 
}








}


//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['cin'],$_POST['datedenaissance'],$_POST['adr'],$_POST['numtel'],$_POST['mp'],$_POST['e_mail'],$_POST['paiement'],$_POST['typeoffre'],$_POST['reussite']);


?>