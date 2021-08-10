
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

                                    <h4 class="header-title mt-0 mb-3">Add New Task </h4>
                                     <form method="post" action="../App/controller/AjouterTask.php" >
                                    <div class="form-group">
                                            <label for="title">title</label>
                                            <input type="text" name="title" parsley-trigger="change" required
                                                   placeholder="Enter title" class="form-control" id="title">
                                        </div>
                                        <div class="form-group">
                                            <label for="Description">Description</label>
                                           <input type="text" name="Description" parsley-trigger="change" required
                                                   placeholder="Enter Description" class="form-control" id="Description">
                                        </div>
                                        <div class="form-group">
                                            <label for="personnel">personnel</label>
                                            <input type="text" name="personnel" parsley-trigger="change" required
                                                   placeholder="Enter your personnel" class="form-control" id="personnel">
                                        </div>
                                        <div class="form-group">
                                            <label for="projet">projet</label>
                                            <input type="texts" name="projet" parsley-trigger="change" required
                                                   placeholder="Enter your projet" class="form-control" id="projet">
                                        </div>
                                        <div class="form-group">
                                            <label for="date_fin">date_fin</label>
                                            <input type="date" name="date_fin" parsley-trigger="change" required
                                                   placeholder="Enter date_fin" class="form-control" id="date_fin">
                                        </div>
                                        <div class="form-group">
                                            <label for="Pourcentage">pourcentage</label>
                                            <input id="pourcentage" type="Pourcentage" placeholder="pourcentage" required
                                                   class="form-control" name="pourcentage">
                                        </div>
                                        <div class="form-group">
                                            <label for="etat"> etat </label>
                                            <input data-parsley-equalto="#etat" type="etat" required
                                                   placeholder="etat" class="form-control" id="etat" name="etat">
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
       