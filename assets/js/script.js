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
		console.log("C    "+the_arr);
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
		
		if(!(result[0].dirpath == '/xampp/htdocs/ExplorateurDeFichier')){
		$('#affichage').append("<div  class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/fleche.png' class='fleche' data-p='"+previous+"' alt='retour' width='120' height='120' ></br>RETOUR" );
			console.log("BONJOUR       " +previous);
		}
		
            $.each( result, function( i, val ) {
				
                if(val.type == 'dir'){
                    
                    $('#affichage').append("<div data="+val.path+" class='block folder text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/sacclosed.png' alt='dossier' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'php'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/php.png' alt='fichier php' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'html'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/HTML.png' alt='fichier html' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'css'){
                   
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/css.png' alt='fichier css' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'js'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/javascript.png' alt='fichier javascript' width='100%' ></br>" + val.name);
                }
                else if(val.extension == 'png'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/png.png' alt='image png'width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'jpg' || val.extension == 'jpeg'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/jpg.png' alt='fichier jpg' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'svg'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/svg.png' alt='fichier svg' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'gif'){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/gif.png' alt='fichier gif' width='120' height='120' ></br>" + val.name);
                }
				else if((val.extension == 'md') || (val.extension == 'txt') || (val.extension == 'sys') || (val.extension == 'psd') || (val.extension == 'ai') || (val.extension == 'xls') || (val.extension == 'doc') || (val.extension == 'docx')){
                    
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/gif.png' alt='fichier gif' width='120' height='120' ></br>" + val.name);
                }
                else
                $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/fichier.png' width='120' height='120'' ></br>" + val.name);
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