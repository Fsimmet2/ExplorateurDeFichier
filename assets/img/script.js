$(document).ready(function(){

    generate();
});

function generate(path = ''){
$.ajax({
    url: "http://localhost:8090/ExplorateurDeFichier/assets/php/explo.php",
    type : 'post',
    dataType: 'json',
    data: {toto : path},
    success: function(result){
        console.log(result);
            $.each( result, function( i, val ) {
                if(val.type == 'dir'){
                    console.log('dir');
                    $('#affichage').append("<div data="+val.path+" class='block folder text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/sacclosed.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'php'){
                    console.log('php');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/php.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'html'){
                    console.log('html');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/HTML.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'css'){
                    console.log('css');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/css.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'js'){
                    console.log('js');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/javascript.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'png'){
                    console.log('png');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/png.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'jpg' || val.extension == 'jpeg'){
                    console.log('jpg');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/jpg.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'svg'){
                    console.log('svg');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/svg.png' width='120' height='120' ></br>" + val.name);
                }
                else if(val.extension == 'gif'){
                    console.log('gif');
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/gif.png' width='120' height='120' ></br>" + val.name);
                }
                else
                $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/sacopen.png' width='120' height='120'' ></br>" + val.name);
               });
            
            $( ".folder" ).click(function() {

                var path = $(this).attr("data");
                $('#affichage').html("");
                generate(path);

            });
        

    },
    error: function(){
        console.log('error');
        
        
    },
});
}