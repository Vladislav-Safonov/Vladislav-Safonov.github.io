$('.block-button').click(function() {
	event.preventDefault();
	alert("К сожалению github (хостинг на котором находится мой сайт) не поддерживает метод передачи данных POST, поэтому сделать на нём обратную связь не составляет возможным.");
});

//Hide menu
var headerMenu = $('.header-menu');

scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

		if(scrolled > 10 && scrolled > scrollPrev) {
			$(headerMenu).addClass('hide-menu');
		} else {
			$(headerMenu).removeClass('hide-menu');
		}

	scrollPrev = scrolled;
})

//--------------------------

/*scroll to section*/
$(document).ready(function(){
	$('#nav').on("click","a", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		 	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-100}, 1300);
	});
});

$(document).ready(function(){
	$('.vshape-link').click(function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top-100}, 1300);
	});
});
/*------------------*/

// parallax
$(window).scroll(function(){
	var scrolled = $(this).scrollTop();

	$('.header-text_block').css({
		"transform" : "translate(0%, "+ scrolled/33 +"%"
	});
})

//------------