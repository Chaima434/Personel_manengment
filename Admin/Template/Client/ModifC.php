
<?php 


include('../App/includes/connect_db.php');

        $id = $_GET['id'];
//echo $id;
//exit;
        
        $req = $bdd->query(" SELECT * FROM client WHERE id_client = $id ");
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

                                    <h4 class="header-title mt-0 mb-3">Add New Client</h4>
                                     <form method="post" action="../App/controller/ModifClient.php?id=<?php echo $donnees['id_client'] ?>" >
                                    <div class="form-group">
                                            <label for="nom_client">nom_client</label>
                                            <input type="text" name="nom_client" parsley-trigger="change" required
                                                   placeholder="Enter nom_client" class="form-control" id="nom_client"value="<?php echo $donnees['nom_client'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="immatriculation">immatriculation</label>
                                           <input type="text" name="immatriculation" parsley-trigger="change" required
                                                   placeholder="Enter immatriculation" class="form-control" id="immatriculation" value="<?php echo $donnees['immatriculation'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="raison_social">raison_social</label>
                                            <input type="text" name="raison_social" parsley-trigger="change" required
                                                   placeholder="Enter your raison_social" class="form-control" id="raison_social" value="<?php echo $donnees['raison_social'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="type_de_payment">type_de_payment</label>
                                            <input type="type_de_payment" name="type_de_payment" parsley-trigger="change" required
                                                   placeholder="Enter type_de_payment" class="form-control" id="type_de_payment" value="<?php echo $donnees['type_de_payment'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="adresse">adresse</label>
                                            <input id="adresse" type="login" placeholder="adresse" required
                                                   class="form-control" name="adresse" value="<?php echo $donnees['adresse'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="tel"> tel </label>
                                            <input data-parsley-equalto="#tel" type="tel" required
                                                   placeholder="tel" class="form-control" id="tel" name="tel" value="<?php echo $donnees['tel'] ?>" >
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
       