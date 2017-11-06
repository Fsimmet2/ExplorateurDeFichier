<?php

$dir = '/var/www/html/ExplorateurDeFichier/';
$files = scandir($dir);
$png = '.png';
$php = '.php';

unset($files[0], $files[1]);
natcasesort($files);
print_r($files);

if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            
            if(strpos($file, $php)){
                print '<p><img src="assets/img/singe.jpg" width="100" height="100" ></p>';
                echo $file."<br>";
               
            }
            if(strpos($file, $png)){
                print '<p class="block"><img src="assets/img/jpg.png" width="110" height="145" ></p>';
                echo $file."<br>";
               
            }
            
        }
        closedir($dh);
    }
}

?>