
<?php 

include('../App/includes/connect_db.php');

        $id = $_GET['id'];
//echo $id;
//exit;
        
        $req = $bdd->query("SELECT * FROM admin WHERE id = $id");
        $donnees = $req->fetch();

?>
 <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card-box">
                                    <div class="dropdown float-right">
                                        <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                                            <!-- item-->
                                            <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                                        </div>
                                    </div>

                                    <h4 class="header-title mt-0 mb-3"> User Manengment </h4>
                                

                                    <form method="post" action="../App/controller/modifAdmin.php?id=<?php echo $donnees['id'] ?>" >
                                    
                                        <div class="form-group">
                                            <label for="Firstname"> First Name </label>
                                            <input type="text"  parsley-trigger="change" required
                                                   placeholder="Enter first name" class="form-control" id="FirstName" name="first_name" value="<?php echo $donnees['first_name'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="LastName"> Last Name </label>
                                            <input type="text"  parsley-trigger="change" required
                                                   placeholder="Enter Last name" class="form-control" id="LastName" name="last_name" value="<?php echo $donnees['last_name'] ?>">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="login">Login</label>
                                            <input type="text" parsley-trigger="change" required
                                                   placeholder="Login" class="form-control" id="login" name="login" value="<?php echo $donnees['login'] ?>" >
                                        </div>
                                        <div class="form-group">
                                            <label for="pass1">Password</label>
                                            <input id="pass1" type="password" placeholder="Password" required
                                                   class="form-control" name="password" value="<?php echo $donnees['password'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="passWord2"> Confirm Password  </label>
                                            <input data-parsley-equalto="#pass1" type="password" required
                                                   placeholder="Password" class="form-control" id="passWord2" value="<?php echo $donnees['passWord2'] ?>" >
                                        </div>
                                        

                                        <div class="form-group text-right mb-0">
                                            <button class="btn btn-primary waves-effect waves-light mr-1" type="submit">
                                                Submit
                                            </button>
                                            <button type="reset" class="btn btn-secondary waves-effect waves-light">
                                                Cancel
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <!-- end col -->
                        </div>

                    </div>
                </div>
            </div>
</div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->
            <!-- controle 3la l'ajout-->
        
        <!-- Vendor js -->
        <script src="assets/js/vendor.min.js"></script>

        <!-- knob plugin -->
        <script src="assets/libs/jquery-knob/jquery.knob.min.js"></script>

        <!--Morris Chart-->
        <script src="assets/libs/morris-js/morris.min.js"></script>
        <script src="assets/libs/raphael/raphael.min.js"></script>

        <!-- Dashboard init js-->
        <script src="assets/js/pages/dashboard.init.js"></script>

        <!-- App js -->
        <script src="assets/js/app.min.js"></script>
       