<?php
    
    require_once('../model/Admin.class.php');
 
    $admin = new Admin(null,null,null,null);
    foreach ($admin->getall() as $v) {
        if ($v['login'] != $_POST['login'])
        {
            echo "this login is not found";
            break;
        }
        else 
        {
            if($v['password'] != md5 ($_POST['password']))
            {
                echo "your paasword est incorrect";
                break;
            }
            else 
            {
                session_start();
                $_SESSION['login'] =$_POST['login'];
                $_SESSION['password'] =$_POST['password'];
                header('location:../index.php');
            }

        }
    }
    
?>