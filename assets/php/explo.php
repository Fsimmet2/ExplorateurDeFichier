<?php




if(isset($_POST['toto'])){
    
    $dir = $_POST['toto'];
    if($dir == ""){
        $dir = '/var/www/html/ExplorateurDeFichier/';
		$pathname = $dir;
    }else{
        $dir = $_POST['toto'];
		$pathname = $_POST['toto'];
    }
}else{
    $dir = '/var/www/html/ExplorateurDeFichier/';
}


    
    foreach (new DirectoryIterator($dir) as $file) {
  

        $tab[] = [
		
	        'dirpath' => $file->getPath(),
	        'name' => $file->getFilename(),
            'extension' => $file->getExtension(),
            'path' => $file->getPathname(),
            'type' => $file->getType(),
            'size' => $file->getSize()
        ];
}
	
	
    


if(!empty($tab)){
    echo json_encode($tab);
}
else{
    echo json_encode('erreur');
    echo json_encode($test);
}


?>

