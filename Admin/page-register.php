<!doctype html>
<html lang="en">


<!-- Mirrored from wrraptheme.com/templates/lucid/hr/html/light/page-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 14 Aug 2021 12:23:21 GMT -->
<head>
<title> Sign Up</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="description" content="Lucid Bootstrap 4x Admin Template">
<meta name="author" content="WrapTheme, design by: ThemeMakker.com">

<link rel="icon" href="favicon.ico" type="image/x-icon">
<!-- VENDOR CSS -->
<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">

<!-- MAIN CSS -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/color_skins.css">
</head>

<body class="theme-orange">
	<!-- WRAPPER -->
	<div id="wrapper">
		<div class="vertical-align-wrap">
			<div class="vertical-align-middle auth-main">
				<div class="auth-box">
                    <div class="top">
                        <!--<img src="https://wrraptheme.com/templates/lucid/hr/html/assets/images/logo-white.svg" alt="Lucid"> -->
                    </div>
					<div class="card">
                        <div class="header">
                            <p class="lead">Create an account</p>
                        </div>
                        <div class="body">
                            <form class="form-auth-small" method="post" action="../../App/controller/ajoutAdmin.php">
                                <div class="form-group">
                                    <label for="signup-first_name" class="control-label sr-only">first_name</label>
                                    <input type="text" class="form-control" id="signup-email" placeholder="Your first_name" name="first_name" required>
                                </div>
                                <div class="form-group">
                                    <label for="signup-last_name" class="control-label sr-only">last_name</label>
                                    <input type="text" class="form-control" id="signup-last_name" placeholder="last_name" name="last_name" required>
                                </div>
                                  <div class="form-group">
                                    <label for="signup-login" class="control-label sr-only">login</label>
                                    <input type="text" class="form-control" id="signup-login" placeholder="login" name="login" required>
                                </div>
                                  <div class="form-group">
                                    <label for="signup-password" class="control-label sr-only">Password</label>
                                    <input type="password" class="form-control" id="signup-password" placeholder="Password" required name="password">
                                </div>
                                <button type="submit" class="btn btn-primary btn-lg btn-block">REGISTER</button>
                                <div class="bottom">
                                    <span class="helper-text">Already have an account? <a href="page-login.html">Login</a></span>
                                </div>
                            </form>
                            <div class="separator-linethrough"><span>OR</span></div>
                            <button class="btn btn-signin-social"><i class="fa fa-facebook-official facebook-color"></i> Sign in with Facebook</button>
                            <button class="btn btn-signin-social"><i class="fa fa-twitter twitter-color"></i> Sign in with Twitter</button>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
	<!-- END WRAPPER -->
</body>

</html>
