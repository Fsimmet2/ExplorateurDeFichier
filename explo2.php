<?php
            
            $dir = '/var/www/html/ExplorateurDeFichier';
            // $files = scandir($dir);
            // print_r($files);

            
            function recoType($dir){


            $tab = ['.', '..'];
            $png = '.png';
			$jpg = '.jpg';
			$gif = '.gif';
            $svg = '.svg';
				
            $php = '.php';
			$html = '.html';
			$css = '.css';
			$js = '.js';
            

           
           
            
            if (is_dir($dir)) {
                if ($dh = opendir($dir)) {
                    while (($file = readdir($dh)) !== false) {
                       
                        if($file[0] != '.'){
                            if(strpos($file, $php)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/php.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                             }
						    elseif(strpos($file, $html)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/HTML.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
						    elseif(strpos($file, $css)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/css.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
						    elseif(strpos($file, $js)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/js.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
                            elseif(strpos($file, $png)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/png.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
						    elseif(strpos($file, $jpg)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/jpg.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
						    elseif(strpos($file, $svg)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/svg.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
						    elseif(strpos($file, $gif)){
                                echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                                print '<img src="assets/img/gif.png" width="110" height="145" ><br>' .$file;
                                echo "</div>";
                           
                            }
                        else {
                            echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                            print '<img src="assets/img/sacclosed.png" width="110" height="145" ><br>' .$file;
                            echo "</div>";
                        }
                    }
                }
                        
                    }
                    closedir($dh);
                }
            }
            recoType($dir);
            
            ?>