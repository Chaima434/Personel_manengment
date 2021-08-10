<?php

include('./includes/connect_db.php');
$req = $bdd->query("SELECT * FROM projet");

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
                                    <h4 class="mt-0 header-title">List of Personel</h4>
                                    <p class="text-muted font-14 mb-3">
                                    </p>

                                    <table id="datatable" class="table table-bordered dt-responsive nowrap">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th> Action </th>
                                          
                                          
                                        </tr>
                                        </thead>


                                        <tbody>
                                            <?php while($donnees = $req->fetch()) {?>
                                        <tr>
                                            
                                            <td><?php echo $donnees['project_name'] ?></td>
                                            <td><?php echo $donnees['Description'] ?></td>
                                            <td><?php echo $donnees['date_deb'] ?></td>
                                            <td><?php echo $donnees['date_fin'] ?></td>
                                            <td><?php echo $donnees['Pourcentage'] ?></td>
                                            <td><?php echo $donnees['prix'] ?></td>
                                            <td>
												<center>
													 <a href="controller/SuppProjet.php?id_projet=<?php echo $donnees['id_projet']?>" class="ti-trash"> </a>
												</center>
										
												<center>
													<a href="ModifProjet.php?id=<?php echo $donnees['id_projet']?>" class="ti-pencil-alt"> </a>
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
