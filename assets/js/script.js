$(document).ready(function(){

    generate();
});

function rmv(the_url)
{
	if ((the_url == "/xampp/htdocs") || (the_url == "/xampp/") || (the_url == "/")) {
		the_url =="/xampp/htdocs/ExplorateurDeFichier"
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



function generate(path = ''){
	
	
$.ajax({
    url: "http://localhost:8090/ExplorateurDeFichier/assets/php/explo.php",
    type : 'post',
    dataType: 'json',
    data: {toto : path},
    success: function(result){
       console.log(result[0].path);
		
		var previous = rmv(result[0].path);
		
		console.log('new   ' + previous );
		
		/*if((result[0].dirpath == '/xampp/htdocs/ExplorateurDeFichier')){
		$("#affichage").append("<ul class='breadcrumb'><li class='crumb first-crumb'>index</li></ul>")
		
		}*/
		
		if(!(result[0].dirpath == '/xampp/htdocs/ExplorateurDeFichier')){
		$('#affichage').append("<div  class='block text-center col-xs-6 col-sm-3 col-md-2 col-lg-2 img-responsive'><img src='assets/img/fleche.png' class='fleche' data-p='"+previous+"' alt='retour' width='120' height='120' ></br>RETOUR" );
			console.log("BONJOUR       " +previous);
		}
		
            $.each( result, function( i, val ) {

                
                if(val.type == 'dir'){
                    if(val.name[0] == '.'){

                        $('#affichage').append("<div class=' roll-in-right folder block text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/creature.png' alt='dossier' width='120' height='120' ></br>" + val.name + '<br>' + val.size + ' octets');
                    }
                    else
                        $('#affichage').append("<div data="+val.path+" class='block roll-in-right folder text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/sacclosed.png' alt='dossier' width='120' height='120' ></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'php'){
                    console.log('php');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/php.png' alt='fichier' width='120' height='120' ></br>" +val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'html'){
                    console.log('html');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/HTML.png' width='120' height='120'  alt='fichier' ></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'css'){
                    console.log('css');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/css.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'js'){
                    console.log('js');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/js.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'png'){
                    console.log('png');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/png.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'jpg' || val.extension == 'jpeg'){
                    console.log('jpg');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/jpg.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'svg'){
                    console.log('svg');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/svg.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
                }
                else if(val.extension == 'gif'){
                    console.log('gif');
                    $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/gif.png' width='120' height='120'  alt='fichier'></br>" + val.name + '<br>' + val.size + ' octets');
				}
                
                else{
                $('#affichage').append("<div class='block roll-in-right fichier text-center col-xs-6 col-sm-3 col-md-2 col-lg-2'><img src='assets/img/fichier.png' width='120' height='120'  ></br>" + val.name + '<br>' + val.size + ' octets');
               }
				
			});
            
			
            $( ".fleche" ).click(function() {
				console.log($(this));
               	var pathPrevious = $(this).attr("data-p");
				console.log(pathPrevious);
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