<!DOCTYPE html>
<html>
    <head>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/themes/dark-hive/dark-hive.css" media="screen" />
        <link rel="stylesheet" href="css/dropmenu_ex.css" media="screen" />
        
        <script type="text/javascript" src="libs/jquery-1.6.2.js" ></script>
        <script type="text/javascript" src="libs/jquery-ui.js" ></script>
        <script type="text/javascript" src="scripts/dropmenu_ex.js" ></script>
        
        <script type="text/javascript">
            $(function(){
               
               
               
               $("#novo_menu").dropmenuEx({themed:true});
               
               
       
               
            });
    
        </script>
     
        
        <title>Menu Drop Down</title>
    </head>
    <body>
        
    
        <ul class="dropmenu-ex" id="novo_menu">
            <li>
                <a href="" tabindex="1">Home</a>
            </li>
            <li>
                <a  href="" tabindex="2">Suport</a>
                <ul>                    
                    <li><a  href="http://www.google.com">Google</a></li>
                    <li><a  href="">item2</a></li>
                    <li><a  href="">item3</a></li>
                </ul>
            </li>
            <li>
                <a  href="" tabindex="3">Sega  </a>
                <ul>                    
                    <li><a  href="">MasterSystem</a></li>
                    <li><a  href="">Genesis</a></li>
                    <li>
                        <a  href="">MegaDrive  </a>
                        <ul>
                            <li> <a  href="">MegaDrive 2</a> </li>
                            <li> <a  href="">MegaDrive 3</a> </li>
                        </ul>                    
                    </li>
                </ul>
            </li>
            
            <li>
                <a  href="" tabindex="4">Jogos  </a>
                <ul>                    
                    <li><a  href="">Nintendo</a></li>
                    <li><a  href="">Capcom</a></li>
                    
                    <li>
                        <a  href="">Luta</a>
                        <ul>
                            <li> 
                                <a  href="">Super Street Fighter Alpha  </a> 
                                <ul>
                                    <li> <a  href="">Street Fighter 2</a> </li>
                                </ul>
                            </li>
                            
                            <li> <a  href="">Super Street Fighter Alpha</a>  </li>                            
                            <li> <a  href="">Street Fighter 2</a> </li>                            
                        </ul>                    
                    </li>
                </ul>
            </li>            
        </ul>

     
        
        <input type="text" size="80"  style="margin-top: 80px" />

      
        
    </body>
</html>


