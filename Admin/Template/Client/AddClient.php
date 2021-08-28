

<?php
$req = $bdd->query("SELECT * FROM projet");
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

                                    <h4 class="header-title mt-0 mb-3"> Client Manengment </h4>

                                    <form method="post" action="../App/controller/AjoutClient.php" >
                                    
                                        <div class="form-group">
                                            <label for="Firstname"> Client Name </label>
                                            <input type="text"  parsley-trigger="change" required
                                                   placeholder="Enter Client Name" class="form-control" id="nom_client" name="nom_client">
                                        </div>
                                        <div class="form-group">
                                            <label for="immatriculation"> Matricule Faciale </label>
                                            <input type="text"  parsley-trigger="change" required
                                                   placeholder="Enter immatriculation" class="form-control" id="immatriculation" name="immatriculation">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="login">Raison_Social</label>
                                            <input type="text" parsley-trigger="change" required
                                                   placeholder="raison_social" class="form-control" id="raison_social" name="raison_social">
                                        </div>
                                        <div class="form-group">
                                            <label for="pass1">Type_de_payment</label>
                                            <input id="pass1" type="type_de_payment" placeholder="type_de_payment" required
                                                   class="form-control" name="type_de_payment">
                                        </div>
                                        <div class="form-group">
                                            <label for="adresse"> Adresse </label>
                                            <input data-parsley-equalto="#adresse" type="adresse" required
                                                   placeholder="adresse" class="form-control" id="adresse" name="adresse">
                                        </div>
                                         <div class="form-group">
                                            <label for="tel"> Tel </label>
                                            <input data-parsley-equalto="#tel" type="tel" required
                                                   placeholder="tel" class="form-control" id="tel"name="tel">
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
       