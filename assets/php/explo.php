<?php



if(isset($_POST['toto'])){
    
    $dir = $_POST['toto'];
    if($dir == ""){
        $dir = '/xampp/htdocs/ExplorateurDeFichier/';
		$pathname = $dir;
    }else{
        $dir = $_POST['toto'];
		$pathname = $_POST['toto'];
    }
}else{
    $dir = '/xampp/htdocs/ExplorateurDeFichier/';
}

foreach (new DirectoryIterator($dir) as $file) {
    if($file->isDot()) continue;
    $tab[] = [
		
		'dirpath' => $file->getPath(),
		'name' => $file->getFilename(),
        'extension' => $file->getExtension(),
        'path' => $file->getPathname(),
        'type' => $file->getType(),
        'size' => $file->getSize()
    ];
	
	
    
}


echo json_encode($tab);


?>

