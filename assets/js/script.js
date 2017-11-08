$(document).ready(function(){

    generate();
});

function rmv(the_url)
{
	if ((the_url == "/var/www/html/") || (the_url == "/var/www/") || (the_url == "/")) {
		the_url == "/var/www/html/ExplorateurDeFichier";
		var str = the_url;
		console.log("A    "+str);
		var res = str.replace(/\\/g, "/");
		console.log("B    "+res);
		var the_arr = res.split('/');
		console.log("cfC    "+the_arr);
		return(the_arr.join('/') );
	}
	else{
		var str = the_url;
console.log("A    "+str);
var res = str.replace(/\\/g, "/");
	console.log("B    "+res);
var the_arr = res.split('/');
	console.log("C    "+the_arr);
the_arr.pop();
	the_arr.pop();
return(the_arr.join('/') );
	}
	

}



function dl(name){
    
    if(name == '0'){
    $.ajax({
        url: 'http://localhost/ExplorateurDeFichier/index.html',
        
    	success: download.bind(true, "text/html", 'index.html')
    });
    }else{
    $.ajax({
        url: 'http://localhost/ExplorateurDeFichier/assets/php/explo.php',
        
    	success: download.bind(true, "text/plain", 'explo.php')
    });
}
}

function generate(path = ''){
	
	
$.ajax({
    url: "http://localhost/ExplorateurDeFichier/assets/php/explo.php",
    type : 'post',
    dataType: 'json',
    data: {toto : path},
    success: function(result){
       
       $('#breadcrumbs').html(""); 

       //aller rechercher le chemin
       var a = result[0].path;
       var b = a.replace(/\\/g, "/");
       var arr = b.split('/');
       arr.pop();
       
       $('#breadcrumbs').append("<div class='barre text-center col-xs-12 col-sm-12 col-md-12 col-lg-12'> Tu es ici : "+ arr.join('/') +"</div>");

		var previous = rmv(result[0].path);
		
		
		if(!(result[0].dirpath == '/var/www/html/ExplorateurDeFichier')){
		$('#affichage').append("<div  class='block roll-in-left fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/fleche.png' class='fleche img-responsive ' data-p='"+previous+"' alt='retour' width='120' height='120' ></br>RETOUR" );
		}
		
            $.each( result, function( i, val ) {

                
                if(val.type == 'dir'){
                    if(val.name == '.' || val.name == '..'){
                        $('#affichage').append("<div class=' hidden'></div>");
                    }
                    else if(val.name[0] == '.'){
                        $('#affichage').append("<div data="+val.path+" class=' roll-in-right fichier block text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/creature.png' alt='dossier' width='100%' ></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                    }
                    else
                        $('#affichage').append("<div data="+val.path+" class='block roll-in-right folder text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/sacclosed.png' alt='dossier' width='100%' ></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                }
                else if(val.extension == 'php'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/php.png' alt='fichier' width='100%' ></br>" +val.name + '<br>' + humanFileSize(val.size) + " <br> <button class='btn btn-default' onclick='dl(1)'>Download</button> </div>" );
                }
                else if(val.extension == 'html'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/HTML.png' width='100%'  alt='fichier' ></br>" + val.name + '<br>' + parseInt(val.size/8) + " bits <br> <button class='btn btn-default' onclick='dl(0)'>Download</button> </div>");
                }
                else if(val.extension == 'css'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/css.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size + '</div>'));
                }
                else if(val.extension == 'js'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/js.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                }
                else if(val.extension == 'png'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/png.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                }
                else if(val.extension == 'jpg' || val.extension == 'jpeg'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/jpg.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                }
                else if(val.extension == 'svg'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/svg.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');
                }
                else if(val.extension == 'gif'){
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/gif.png' width='100%'  alt='fichier'></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');

                }
                

                
                else

                $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/fichier.png' width='100%'  ></br>" + val.name + '<br>' + humanFileSize(val.size) + '</div>');

               });
            
			
            $( ".fleche" ).click(function() {
               	var pathPrevious = $(this).attr("data-p");
				$('#affichage').html("");
				generate(pathPrevious);
                	

            });
		
            $( ".folder" ).click(function() {
				
                var path = ($(this).attr("data"));
                $('#affichage').html("");
				
				
                generate(path);
				

            });
        

    },
    error: function(){
        console.log('error');
        
        
    },
});
}

function humanFileSize(size) {
    var i = size == 0 ? 0 :Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};


