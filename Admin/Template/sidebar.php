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
				Admin Head
			</p>
			
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
				</li>
				<li>
					<a href="javascript: void(0);">
						<i class="  fas fa-user-shield"></i>
						<span> 
							User Manengment 
						</span>
						<span class="menu-arrow"></span>
					</a>
					<ul class="nav-second-level" aria-expanded="false">
						<li>
							<a href="AddAdmin.php">
								Add new user
							</a>
						</li>
						<li>
							<a href="ListAdmin.php">
								List of users
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript: void(0);">
						<i class=" far fa-user"></i>
						<span> 
							Personel Manengment 
						</span>
						<span class="menu-arrow"></span>
					</a>
					<ul class="nav-second-level" aria-expanded="false">
						<li>
							<a href="AddPersonel.php">
								Add new Personel
							</a>
						</li>
						<li>
							<a href="ListPersonel.php">
								List of Personels
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript: void(0);">
						<i class="  far fa-edit"></i>
						<span> 
							Project Manengment 
						</span>
						<span class="menu-arrow"></span>
					</a>
					<ul class="nav-second-level" aria-expanded="false">
						<li>
							<a href="AddProject.php">
								Add new Project
							</a>
						</li>
						<li>
							<a href="ListProject.php">
								List of Projects
							</a>
						</li>
					</ul>
				</li>




				<li>
					<a href="javascript: void(0);">
						<i class="  far fa-edit"></i>
						<span> 
							Task Manengment 
						</span>
						<span class="menu-arrow"></span>
					</a>
					<ul class="nav-second-level" aria-expanded="false">
						<li>
							<a href="AddTask.php">
								Add new Task
							</a>
						</li>
						<li>
							<a href="ListTask.php">
								List of Task
							</a>
						</li>
					</ul>
				</li>



				<li>
					<a href="javascript: void(0);">
						<i class="   fas fa-user-tie"></i>
						<span> 
							Client Manengment 
						</span>
						<span class="menu-arrow"></span>
					</a>
					<ul class="nav-second-level" aria-expanded="false">
						<li>
							<a href="AddClient.php">
								Add new Client
							</a>
						</li>
						<li>
							<a href="ListClient.php">
								List of Client
							</a>
						</li>
					</ul>
				</li>






                <li class="menu-title">
					Apps
				</li>
				<li>
					<a href="apps-chat.html">
						<i class="mdi mdi-forum"></i>
						<span class="badge badge-purple float-right">New</span>
						<span> 
							Chat 
						</span>
					</a>
				</li>
				<li>
					<a href="calendar.html">
						<i class="mdi mdi-calendar"></i>
						<span> 
							Calendar 
						</span>
					</a>
				</li>
				<li>
					<a href="inbox.html">
						<i class="mdi mdi-email"></i>
						<span> 
							Mail 
						</span>
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