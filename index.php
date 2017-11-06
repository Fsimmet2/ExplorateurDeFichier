<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Explorateur de fichiers</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    
    <meta property="og:title" content="Explorateur de fichier"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://yohannt.promo-5.codeur.online/formphp/"/>
    <meta property="og:description" content="Explorateur de fichier/Php/Jquery/AJAX"/>
    <meta property="og:site_name" content="Explorateur"/>
    
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Explorateur de fichier">
    <meta name="twitter:url" content="https://yohannt.promo-5.codeur.online/formphp/">
    <meta name="twitter:description" content="D.O.R.A : Detection Organisée de Recherches et d'Archivage">
    <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
     <script src="assets/js/script.js"></script>
</head>
<body>
    <header class="container-fluid">
        <div class="logo row bounce-in-bck">
            <p class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 "><img src="assets/img/logo.png" class="img-responsive" width="600" height="200"></p>
            <p class=" col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-8 col-lg-offset-4 col-lg-6"><img src="assets/img/logobis.png" class="img-responsive" width="400" height="63"></p>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
        
            <?php
            
            $dir = 'assets/img';
            $files = scandir($dir);
            $png = '.png';
			$jpg = '.jpg';
			$gif = '.gif';
			$svg = '.svg';
				
            $php = '.php';
			$html = '.html';
			$css = '.css';
			$js = '.js';
            
            unset($files[0], $files[1]);
            natcasesort($files);
            // print_r($files);
            
            if (is_dir($dir)) {
                if ($dh = opendir($dir)) {
                    while (($file = readdir($dh)) !== false) {
                        
                        if(strpos($file, $php)){
                            echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                            print '<img src="assets/img/php.png" width="110" height="145" ><br>' .$file;
                            echo "</div>";
                           
                        }
						elseif(strpos($file, $html)){
                            echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                            print '<img src="assets/img/html.png" width="110" height="145" ><br>' .$file;
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
                        
                    }
                    closedir($dh);
                }
            }
            
            ?>
             </div>
        </div>
     </main>
    
</body>
</html>