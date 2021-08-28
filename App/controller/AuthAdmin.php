<?php
    
   require_once('../model/Admin.class.php');
    
    $admin = new Admin(null,null,null,null);
    $test=false;
    $id=0;
    foreach ($admin->getall() as $v) 
    {
        if ($v['login'] == $_POST['login'])
        {
          if($v['password'] == md5 ($_POST['password']) )

            {
                $test=true;
                $id=$v['id'];
                break;
            }
        }
    }
    if ($test==true)
    {
        session_start();
        $_SESSION['id'] =$id;
        $_SESSION['login'] =$_POST['login'];
        $_SESSION['password'] =$_POST['password'];
        header('location:../../Admin/index.php');
    }
    else
    {
        echo "your login or your password not correct";
    }
    
?>