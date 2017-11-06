<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Explorateur de fichiers</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    
    <meta property="og:title" content="Explorateur de fichier"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://yohannt.promo-5.codeur.online/formphp/"/>
    <meta property="og:description" content="Explorateur de fichier/Php/Jquery/AJAX"/>
    <meta property="og:site_name" content="Explorateur"/>
    
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="Explorateur de fichier">
    <meta name="twitter:url" content="https://yohannt.promo-5.codeur.online/formphp/">
    <meta name="twitter:description" content="D.O.R.A : Detection Organisée de Recherches et d'Archivage">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
     <script src="js/script.js"></script>
</head>
<body>
    <header class="container-fluid">
        <div class="logo row bounce-in-bck">
            <p class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 "><img src="../logo.png" class="img-responsive" width="600" height="200"></p>
            <p class=" col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-8 col-lg-offset-4 col-lg-6"><img src="../logobis.png" class="img-responsive" width="400" height="63"></p>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
        
            <?php
            
            $dir = '/var/www/html/ExplorateurDeFichier/';
            $files = scandir($dir);
            $png = '.png';
            $php = '.php';
            
            unset($files[0], $files[1]);
            natcasesort($files);
            // print_r($files);
            
            if (is_dir($dir)) {
                if ($dh = opendir($dir)) {
                    while (($file = readdir($dh)) !== false) {
                        
                        if(strpos($file, $php)){
                            echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                            print '<img src="img/singe.jpg" width="110" height="145" ><br>' .$file;
                            echo "</div>";
                           
                        }
                        if(strpos($file, $png)){
                            echo "<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'>";
                            print '<img src="img/jpg.png" width="110" height="145" ><br>' .$file;
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