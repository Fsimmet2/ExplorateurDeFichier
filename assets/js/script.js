$(document).ready(function(){


    $.ajax({
        url: "explo.php",
        type : 'post',
        dataType: 'json', 
        success: function(result){
            
                $.each( result, function( i, val ) {
                    console.log(val.name);
                    console.log(i);
                    if(val.type == 'dir'){
                        console.log('dir');
                        $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/sacclosed.png' width='110' height='145' ></br>" + val.name);
                    }
                    else if(val.extension == 'php'){
                        console.log('php');
                        $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/php.png' width='110' height='145' ></br>" + val.name);
                    }
                    else if(val.extension == 'html'){
                        console.log('html');
                        $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/HTML.png' width='110' height='145' ></br>" + val.name);
                    }
                    else if(val.extension == 'css'){
                        console.log('css');
                        $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/css.png' width='110' height='145' ></br>" + val.name);
                    }
                    else if(val.extension == 'png'){
                        console.log('css');
                        $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/png.png' width='110' height='145' ></br>" + val.name);
                    }
                    else
                    $('#affichage').append("<div class='block text-center col-xs-6 col-sm-6 col-md-3 col-lg-2'><img src='assets/img/sacopen.png' width='110' height='145' ></br>" + val.name);
                   });
                
            
            

        },
        error: function(){
            console.log('error');
        },
    });
});

