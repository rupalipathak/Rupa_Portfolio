

var nav = $('.navbar-fixed-top');
var distance= $('.navbar-fixed-top').offset();
if(distance.top>300){
    nav.addClass('effect');
    $('.effect img').attr("src","img/logo_white3.png");
}
$(window).scroll(function(){

    var scroll = $(window).scrollTop();

    console.log(scroll);
    $('.effect img').attr("src","img/logo3.png");
    if(scroll>=300) {

        nav.addClass('effect');
        $('.effect img').attr("src","img/logo_white3.png");

    }else{

        nav.removeClass('effect');
        $('.effect img').attr("src","img/logo3.png");
    }
    if(scroll>800){



        $(".progress_animation").css('width', '80%').attr('aria-valuenow', "80");

        $(".progress_animation1").css('width', '80%').attr('aria-valuenow', "80");

        $(".progress_animation2").css('width', '90%').attr('aria-valuenow', "90");

        $(".progress_animation3").css('width', '60%').attr('aria-valuenow', "60");

        $(".progress_animation4").css('width', '70%').attr('aria-valuenow', "70");

        $(".progress_animation5").css('width', '50%').attr('aria-valuenow', "50");
        $(".progress_animation6").css('width', '90%').attr('aria-valuenow', "90");
        $(".progress_animation7").css('width', '65%').attr('aria-valuenow', "65");
    }

});



/*
$('#about .blue-circle').waypoint(function(){
    $('#about .blue-circle').addClass('animated fadeInUp')

},{
    offset:"50%"

} );*/
