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

                                    <h4 class="header-title mt-0 mb-3">Add New Personel</h4>

                                    <form action="#" data-parsley-validate novalidate>
                                    <div class="form-group">
                                            <label for="first_name">first_name</label>
                                            <input type="text" name="first_name" parsley-trigger="change" required
                                                   placeholder="Enter firstname" class="form-control" id="first name">
                                        </div>
                                        <div class="form-group">
                                            <label for="lastname">Last Name</label>
                                           <input type="text" name="Last Name" parsley-trigger="change" required
                                                   placeholder="Enter Lastname" class="form-control" id="Last Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="LastName">CIN</label>
                                            <input type="text" name="CIN" parsley-trigger="change" required
                                                   placeholder="Enter your CIN" class="form-control" id="cin">
                                        </div>
                                        <div class="form-group">
                                            <label for="emailAddress">Email address</label>
                                            <input type="email" name="Email address" parsley-trigger="change" required
                                                   placeholder="Enter email" class="form-control" id="emailAddress">
                                        </div>
                                        <div class="form-group">
                                            <label for="pass1">Login</label>
                                            <input id="pass1" type="login" placeholder="login" required
                                                   class="form-control" name="login">
                                        </div>
                                        <div class="form-group">
                                            <label for="passWord2"> Password </label>
                                            <input data-parsley-equalto="#pass1" type="password" required
                                                   placeholder="Password" class="form-control" id="passWord2" name="password">
                                        </div>
                                        <div class="form-group">
                                            <label for="passWord2">Confirm Password</label>
                                            <input data-parsley-equalto="#pass1" type="password" required
                                                   placeholder=" Confirm Password" class="form-control" id="passWord2">
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
       