<?php 

/*include('../App/includes/connect_db.php');
/*$req2= $bdd->query("SELECT * FROM projet");
$req1 = $bdd->query("SELECT * FROM personnel");

        $id = $_GET['id'];
//echo $id;
//exit;
        
        $req = $bdd->query(" SELECT * FROM tache WHERE id_task= $id ");
        $donnees = $req->fetch();*/


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

                                    <h4 class="header-title mt-0 mb-3">Update Task </h4>
                                     <form method="post" action="" >
                                    
                                        <div class="form-group">
                                            <select name="statut" id="statut" class="form-control"
                                            required="required">
                                                <option value="to do">To do</option>
                                                <option value="doing">Doing</option>
                                                <option value="done">Done</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select name="avenement_tache" id="avenement_tache" class="form-control"
                                                required="required">
                                                <option value="0%">0%</option>
                                                <option value="20%">20%</option>
                                                <option value="40%">40%</option>
                                                <option value="60%">60%</option>
                                                <option value="80%">80%</option>
                                                <option value="100%">100%</option>
                                            </select>
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
       