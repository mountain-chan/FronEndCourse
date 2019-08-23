$(function(){

    $('.top-1 a.btn.btn-default').click(function(){
        $('html, body').animate({scrollTop:$('.top-3').offset().top}, "slow");
        return false;
    });

    $('#home').click(function(){
        $('html, body').animate({scrollTop:0}, "slow");
        $('.menu-phai').removeClass('show');
        return false;
    });

    $('#about').click(function(){
        $('html, body').animate({scrollTop:$('.top-2').offset().top}, "slow");
        $('.menu-phai').removeClass('show');
        return false;
    });

    $('#service').click(function(){
        $('html, body').animate({scrollTop:$('.top-3').offset().top}, "slow");
        $('.menu-phai').removeClass('show');
        return false;
    });

    $('#contact').click(function(){
        $('html, body').animate({scrollTop:$('.footer').offset().top}, "slow");
        $('.menu-phai').removeClass('show');
        return false;
    });

    var do_cao_man_hinh = $(window).height();
    $('.top-1').css({'height':do_cao_man_hinh});
    $(window).resize(function(){
        var do_cao_man_hinh = $(window).height();
        $('.top-1').css({'height':do_cao_man_hinh});
    });


    $('.nut-menu').click(function(){
        $('.menu-phai').addClass('show');
        return false;
    });

    $('.off').click(function(){
        $('.menu-phai').removeClass('show');
        return false;
    });
});