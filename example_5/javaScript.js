$(function(){

    $('.top-1 a.btn.btn-default').click(function(){
        $('.top-1').animate({top:'100px'}, "slow");
        console.log($('.top-3').offset().top)
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