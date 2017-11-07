<?php




if(isset($_POST['toto'])){
    
    $dir = $_POST['toto'];
    if($dir == ""){
        $dir = '/var/www/html/ExplorateurDeFichier/';
    }else{
        $dir = $_POST['toto']; 
    }
}else{
    $dir = '/var/www/html/ExplorateurDeFichier/';
}

foreach (new DirectoryIterator($dir) as $file) {
    if($file->isDot()) continue;
    $tab[] = [
        'name' => $file->getFilename(),
        'extension' => $file->getExtension(),
        'path' => $file->getPathname(),
        'type' => $file->getType(),
        'size' => $file->getSize()
    ];
    
}


echo json_encode($tab);

?>

