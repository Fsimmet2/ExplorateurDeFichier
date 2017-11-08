<?php


// verification path

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

// boucle tableau 

    
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
	
	
    
// renvoie du tableau en json 

if(!empty($tab)){
    echo json_encode($tab);
}
else{
    echo json_encode('erreur');
    echo json_encode($test);
}


?>

