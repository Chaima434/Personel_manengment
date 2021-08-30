<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">
	<div class="slimscroll-menu">
		<!-- User box -->
		<div class="user-box text-center">
			<img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" class="rounded-circle img-thumbnail avatar-md" />
			<div class="dropdown">
				<a href="#" class="user-name dropdown-toggle h5 mt-2 mb-1 d-block" data-toggle="dropdown"  aria-expanded="false">
					<?php
					echo($_SESSION['login']); //bech ykoun dynamique li bech yconnecty ykoun esmou ghadi
				?>
				</a>
				
			</div>
			<p class="text-muted">
				Personnel Head
			</p>
			<ul class="list-inline">
				
				
			</ul>
		</div>
		<!--- Sidemenu -->
		<div id="sidebar-menu">
			<ul class="metismenu" id="side-menu">
				
				<li class="menu-title">
					Navigation
				</li>
				<li>
					<a href="index.php">
						<i class=" fas fa-home"></i>
						<span> 
							Dashboard 
						</span>
						<span class="menu-arrow"></span>
						

				</li>
				
				
				<li>
					<a href="ListProject.php">
						<i class="  far fa-edit"></i>
						<span> 
							My Projects
						</span>
						<span class="menu-arrow"></span>
					</a>
					
					
				</li>




				<li>
					<a href="ListTask.php">
						<i class="  far fa-edit"></i>
						<span> 
							My Task
						</span>
						<span class="menu-arrow"></span>
					</a>
				</li>

               
			</ul>
		</div>
      <!-- End Sidebar -->
      <div class="clearfix"></div>
   </div>
   <!-- Sidebar -left -->
</div>
<!-- Left Sidebar End -->