<?php
    
   require_once('../model/personnel.class.php');
    
    $personnel = new Personnel(null,null,null,null,null,null);
    $test=false;
    $id=0;
    foreach ($personnel->getall() as $v) 
    {
        if ($v['login'] == $_POST['login'])
        {
          if($v['password'] == md5 ($_POST['password']) )

            {
                $id=$v['id'];
                $test=true;
                break;
            }
        }
    }
    if ($test==true)
    {
        session_start();
         $_SESSION['id_personnel'] =$id;
         //$_SESSION['first_name'] =$_POST['first_name'];
         // $_SESSION['last_name'] =$_POST['last_name'];
        // $_SESSION['CIN'] =$_POST['CIN'];
          //$_SESSION['email'] =$_POST['email'];
        $_SESSION['login'] =$_POST['login'];
         $_SESSION['password'] =$_POST['password'];
        header('location:../../Personnel/index.php');
    }
    else
    {
        echo "your login or your password not correct";
    }
    
?>