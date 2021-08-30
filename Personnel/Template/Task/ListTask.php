 
<?php

echo $_SESSION['id_personnel'];

include('../App/includes/connect_db.php');
$req = $bdd->query("SELECT * FROM tache WHERE
 personnel=".$_SESSION['id_personnel']);

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
                                    <h4 class="mt-0 header-title">List of Tasks</h4>
                                    <p class="text-muted font-14 mb-3">
                                    </p>
                                   
                                    <table id="datatable" class="table mb-0">
                                        <thead>
                                        <tr>
                                            <th>title</th>
                                            <th>Description</th>
                                            <th>personnel</th>
                                            <th>projet</th>
                                            <th>date_fin</th>
                                            <th>pourcentage</th>
                                            <th> etat </th>

                                             <th> <center>action</center> </th>
                                          
                                          
                                        </tr>
                                        </thead>


                                        <tbody>
                                            <?php while($donnees = $req->fetch()) {?>
                                        <tr>
                                            
                                            <td><?php echo $donnees['title'] ?></td>
                                            <td><?php echo $donnees['Description'] ?></td>
                                            <td><?php echo $donnees['personnel'] ?></td>
                                            <td><?php echo $donnees['projet'] ?></td>
                                            <td><?php echo $donnees['date_fin'] ?></td>
                                            <td><?php echo $donnees['pourcentage'] ?></td>
                                            <td><?php echo $donnees['etat'] ?></td>
                                            <td>
                                                <!--<center>
                                                     <a href="../App/controller/SuppTask.php?id_task=<?php echo $donnees['id_task']?>" class="ti-trash"> </a>
                                                </center>
                                        
                                                <center>
                                                    <a href="ModifTask.php?id=<?php echo $donnees['id_task']?>" class="success"> </a>
                                                </center> !-->

                                                 <button type="button" class="btn btn-success waves-effect width-md waves-light" onclick="update(<?php echo $donnees['id_task']?>)">Update</button>

                                                <!-- <button type="button" class="btn btn-danger waves-effect width-md waves-light" onclick="destroy(<?php// echo $donnees['id_task']?>)">Delete</button>
                                            </td>

                                        </tr> -->
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
<script>
    /*function destroy (id)
    {

        location.href = "../App/controller/SuppTask.php?id_task=" +id;
    }*/
    function update (id)
    {
        //alert("ModifTask.php?id=" + id);
        location.href = "ModifTask.php?id=" + id;
    }
</script>