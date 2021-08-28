<!DOCTYPE html>
<html lang="en">
    <?php
        require_once("Template/head.php");
   ?> 
    <body>
        <div id="wrapper">
        <?php
        require_once("Template/navbar.php");
         ?>  
         
        <?php
        require_once("Template/sidebar.php");
        ?> 
        <?php
        require_once("Template/js.php");
        ?> 
        <?php
        //require_once("login.php");
        ?> 
        </div>
         <!-- Start Content-->
         <div class="container-fluid">
         </div>
         <!-- Start Content-->
          <div class="content-page">
                <div class="content">
         <div class="container-fluid">


            <div class="row">
                            <div class="col-sm-12">
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

                                    <h4 class="header-title mt-0">Jquery Knob</h4>

                                    <div class="row">
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150"
                                                       data-fgColor="#71b6f9" data-displayInput=false value="35"/>
                                                <h5 class="text-muted">Disable display input</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150" data-cursor=true
                                                       data-fgColor="#10c469" value="29"/>
                                                <h5 class="text-muted">Cursor mode</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150" data-min="-100"
                                                       data-fgColor="#f9c851" data-displayPrevious=true value="44"/>
                                                <h5 class="text-muted">Display previous value</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150" data-min="-100"
                                                       data-fgColor="#35b8e0" data-displayPrevious=true data-angleOffset=-125
                                                       data-angleArc=250 value="44"/>
                                                <h5 class="text-muted">Angle offset and arc</h5>
                                            </div>
                                        </div><!-- end col-->
                                    </div><!-- end row -->

                                    <div class="row">
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150"
                                                       data-angleOffset="90" data-linecap="round" data-fgColor="#ff8acc"
                                                       value="35"/>
                                                <h5 class="text-muted">Angle offset</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150" data-min="-15000"
                                                       data-displayPrevious=true data-max="15000" data-step="1000"
                                                       value="-11000" data-fgColor="#5b69bc"/>
                                                <h5 class="text-muted">5-digit values, step 1000</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150" data-linecap=round
                                                       data-fgColor="#435966" value="80" data-skin="tron" data-angleOffset="180"
                                                       data-readOnly=true data-thickness=".1"/>
                                                <h5 class="text-muted">Readonly</h5>
                                            </div>
                                        </div><!-- end col-->
                                        <div class="col-md-6 col-xl-3 text-center">
                                            <div class="mt-3" dir="ltr">
                                                <input data-plugin="knob" data-width="150" data-height="150"
                                                       data-displayPrevious=true data-fgColor="#ff5b5b" data-skin="tron"
                                                       data-cursor=true value="75" data-thickness=".2" data-angleOffset=-125
                                                       data-angleArc=250 value="44"/>
                                                <h5 class="text-muted">Angle offset and arc</h5>
                                            </div>
                                        </div><!-- end col-->
                                    </div><!-- end row-->

                                </div>
                            </div><!-- end col-->
                        </div>
                        <!-- End row -->

                                    </div>
</body>
</html>