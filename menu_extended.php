<!DOCTYPE html>
<html>
    <head>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/themes/dark-hive/dark-hive.css" media="screen" />
        <link rel="stylesheet" href="css/menu_extended.css" media="screen" />
        
        <script type="text/javascript" src="libs/jquery-1.6.2.js" ></script>
        <script type="text/javascript" src="libs/jquery-ui.js" ></script>
        <script type="text/javascript" src="scripts/panelEx.js" ></script>
        
        <script type="text/javascript">
            $(function(){
               
               
               
               
       
               
            });
    
        </script>
     
        
        <title>Menu Drop Down</title>
    </head>
    <body>
        
        
      <ul class="dropmenu" id="nav-one"> 
			<li> 
				<a href="#">Home</a> 
			</li> 
			<li class="dropitem"> 
				<a href="#">Forum<span class="arrow"></span></a> 
				<ul style="z-index: 100; display: none;"> 
					<li><a href="#">Support</a></li> 
					<li><a href="#">Help</a></li> 
					<li><a href="#">Examples</a></li>
					<li class="dropitem"><a href="#">Your work<span class="arrow"></span></a>
                    <ul style="z-index: 100; display: none;"> 
                        <li><a href="#">Tools</a></li> 
                        <li><a href="#">Office</a></li> 
                        <li class="dropitem"><a href="#">Custom projects<span class="arrow"></span></a>
                        
                        <ul style="z-index: 100; display: none;">
                        	 <li><a href="#">Tools</a></li> 
                        <li><a href="#">Office</a></li> 
                        <li><a href="#">Custom projects</a></li></ul>
                        
                        </li> 
                    </ul> 
                    </li>
				</ul> 
			</li> 
			<li class="dropitem"> 
				<a href="#item3">Downloads<span class="arrow"></span></a> 
				<ul style="z-index: 100; display: none;"> 
					<li><a href="#">Tools</a></li> 
					<li><a href="#">Office</a></li> 
					<li><a href="#">Custom projects</a></li> 
				</ul> 
			</li>  
			<li class="dropitem"> 
				<a href="#">Products<span class="arrow"></span></a> 
				<div class="products" style="z-index: 100; display: none;">
					<ul style="z-index: 100;"> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/236872.jpg"><h2>Featured Box</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/242702.jpg"><h2>Mod Rewriter</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/242177.jpg"><h2>Byte Scrambler</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/226138.jpg"><h2>Image Processor</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/216794.jpg"><h2>Registry Class</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/211826.jpg"><h2>Data Validation</h2><p><a href="#">More information about this product</a></p></li> 
						<li><img width="40" height="40" border="0" alt="Thumb" src="images/203708.jpg"><h2>Ajax Tables</h2><p><a href="#">More information about this product</a></p></li> 
					</ul>
				</div>
			</li>
			<li><a href="#">Tutorials</a></li>
			<li class="dropitem"> 
				<a href="#">Links<span class="arrow"></span></a> 
				<ul style="z-index: 100; display: none;"> 
					<li><a href="#">Programming</a></li> 
					<li><a href="#">Inspiration</a></li> 
					<li><a href="#">My websites</a></li> 
					<li><a href="#">Clients</a></li> 
					<li><a href="#">Cool stuff</a></li> 
					<li><a href="#">Sitebase</a></li> 
					<li><a href="#">Other</a></li> 
				</ul> 
			</li>
			<li class="dropitem"> 
				<a href="#">Login<span class="arrow"></span></a> 
				<div class="login" style="z-index: 101; display: none;">
                	<div style="z-index: 100;">
                        <form method="post" action="">
                            <label for="txtuser">Username: </label>
                            <input type="text" id="txtuser" name="txtuser">
                            <label for="txtuser">Password: </label>
                            <input type="password" id="txtpass" name="txtpass">
                            <button>Login</button>
                        </form>
                    </div>
				</div>
			</li> 			
		</ul>

        
    </body>
</html>


