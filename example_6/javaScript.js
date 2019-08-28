$(function(){
	var viTri = 10;
	$(window).scroll(function(){
		viTri = $('html, body').scrollTop(); 

		if(viTri > 10){
			$('.navbar-fixed-top').addClass('tien-hoa');
		}

		else{
			$('.navbar-fixed-top').removeClass('tien-hoa');
		}

		if(viTri > 400){
			$('.top-3').addClass('bien-ra');
		}
		else{
			$('.top-3').removeClass('bien-ra');
		}

	});
    	
    $('#home').click(function(){
        $('html, body').animate({scrollTop:0}, "slow");
        return false;
    });

    $('#portfolio').click(function(){
        $('html, body').animate({scrollTop:$('.top-2').offset().top}, "slow");
        return false;
    });

	$('#about').click(function(){
        $('html, body').animate({scrollTop:$('.muc-about').offset().top}, "slow");
        return false;
    });

	$('#contact').click(function(){
        $('html, body').animate({scrollTop:$('.contact-me').offset().top}, "slow");
        return false;
    });


	$(window).resize(function(){
		top_news = $('.news').offset().top;
		$('.duongke').css({'top': top_news + 300})
	});

});