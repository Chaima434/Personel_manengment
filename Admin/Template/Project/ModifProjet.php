<?php 

include('../App/includes/connect_db.php');
$req1 = $bdd->query("SELECT * FROM personnel");
        $id = $_GET['id'];
//echo $id;
//exit;
        
        $req = $bdd->query(" SELECT * FROM projet WHERE id_projet = $id ");
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

                                    <h4 class="header-title mt-0 mb-3">Add New Project</h4>
                                     <form method="post" action="../App/controller/ModifProjet.php?id=<?php echo $donnees['id_projet'] ?>" >
                                    <div class="form-group">
                                            <label for="project_name">Project_name</label>
                                            <input type="text" name="project_name" parsley-trigger="change" required
                                                   placeholder="Enter Project_name" class="form-control" id="project_name" value="<?php echo $donnees['project_name'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="Description">Description</label>
                                           <input type="text" name="Description" parsley-trigger="change" required
                                                   placeholder="Enter Description" class="form-control" id="Description" value="<?php echo $donnees['Description'] ?>">
                                        </div>
                                        


                                       <div class="form-group">
                                            <label for="projet">Personnel</label>
                                           <select type="texts" name="personnel" parsley-trigger="change" required
                                                    class="form-control" id="personnel "> 
                                                <?php while($donnees1 = $req1->fetch()) {?> 
                                                    <option value="<?php echo $donnees1['first_name'] ?>">

                                                        <?php
                                                       echo $donnees1['first_name']
                                                        ?>
                                                    </option>
                                                    <?php

                                                 } ?>

                                             </select>
                                        </div>


                                        <div class="form-group">
                                            <label for="date_debut">date_debut</label>
                                            <input type="date" name="date_deb" parsley-trigger="change" required
                                                   placeholder="Enter your date_debut" class="form-control" id="date_debut" value="<?php echo $donnees['date_deb'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="date_fin">date_fin</label>
                                            <input type="date" name="date_fin" parsley-trigger="change" required
                                                   placeholder="Enter date_fin" class="form-control" id="date_fin" value="<?php echo $donnees['date_fin'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="Pourcentage">Pourcentage</label>
                                            <input id="Pourcentage" type="Pourcentage" placeholder="Pourcentage" required
                                                   class="form-control" name="Pourcentage" value="<?php echo $donnees['Pourcentage'] ?>">
                                        </div>
                                        <div class="form-group">
                                            <label for="prix"> prix </label>
                                            <input data-parsley-equalto="#prix" type="number" required
                                                   placeholder="prix" class="form-control" id="prix" name="prix" value="<?php echo $donnees['prix'] ?>">
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
       