<?php

include('./includes/connect_db.php');
$req = $bdd->query("SELECT * FROM admin");

 ?>
<!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-12">
                                <div class="card-box">
                                    <h4 class="mt-0 header-title">List of User</h4>
                                    <p class="text-muted font-14 mb-3">
                                    </p>

                                    <table id="datatable" class="table table-bordered dt-responsive nowrap">
                                        <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Login</th>
                                            <th>Mot de passe</th>
											<th>Action</th>
                                            
                                        </tr>
                                        </thead>


                                        <tbody>
                                            <?php while($donnees = $req->fetch()) {?>
                                        <tr>
                                            <td><?php echo $donnees['first_name'] ?></td>
                                            <td><?php echo $donnees['last_name'] ?></td>
                                            <td><?php echo $donnees['login'] ?></td>
                                            <td><?php echo $donnees['password'] ?></td>
											<td> 
												<center>
                                                    <a href="controller/SuppAdmin.php?id=<?php echo $donnees['id']?>" class="ti-trash"> </a>
												</center>

												<center>
													

                                                    <a href="modifAdmin.php?id=<?php echo $donnees['id']?>" class="ti-pencil-alt"> </a>
												</center>
											</td>
                                        </tr>
                                    <?php } ?>
                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

</div>
            <!-- Vendor js -->
        <script src="assets/js/vendor.min.js"></script>

<!-- third party js -->
<script src="assets/libs/datatables/jquery.dataTables.min.js"></script>
<script src="assets/libs/datatables/dataTables.bootstrap4.js"></script>
<script src="assets/libs/datatables/dataTables.responsive.min.js"></script>
<script src="assets/libs/datatables/responsive.bootstrap4.min.js"></script>
<script src="assets/libs/datatables/dataTables.buttons.min.js"></script>
<script src="assets/libs/datatables/buttons.bootstrap4.min.js"></script>
<script src="assets/libs/datatables/buttons.html5.min.js"></script>
<script src="assets/libs/datatables/buttons.flash.min.js"></script>
<script src="assets/libs/datatables/buttons.print.min.js"></script>
<script src="assets/libs/datatables/dataTables.keyTable.min.js"></script>
<script src="assets/libs/datatables/dataTables.select.min.js"></script>
<script src="assets/libs/pdfmake/pdfmake.min.js"></script>
<script src="assets/libs/pdfmake/vfs_fonts.js"></script>
<!-- third party js ends -->

<!-- Datatables init -->
<script src="assets/js/pages/datatables.init.js"></script>

<!-- App js -->
<script src="assets/js/app.min.js"></script>
