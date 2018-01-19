$(window).scroll(function(){
	if($(window).scrollTop() >= 500){
	  $('nav').addClass('scrolled');
	} else {
	  $('nav').removeClass('scrolled');
	}
});
