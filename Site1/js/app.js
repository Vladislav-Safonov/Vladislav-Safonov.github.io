$(function() {

	let filter = $("[data-filter]");

	filter.on("click", function (event){
			event.preventDefault();

			let cat = $(this).data('filter');

			if(cat == 'all') {
				$("[data-cat]").removeClass('hide');
			} else {

				$("[data-cat]").each(function() {
					let workCat = $(this).data('cat');
					if(workCat != cat) {
						$(this).addClass('hide');
					} else {
						$(this).removeClass('hide');
					}

		});
		}
	});
	/*button burger*/
	const navToggle = $("#navToggle");
	const nav = $("#nav_burger");
	const navRemove = $("#navRemove");

	navToggle.on('click', function(event){
		event.preventDefault();

		nav.toggle(.01).toggleClass("show");
	});

	navRemove.on('click', function(event){
		event.preventDefault();
		nav.toggle(.01).removeClass("show");
	});

	/******************************/

	/********smooth ancher*********/

	$("#nav_burger").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /***************************************/

    $("#icon__search").on("click", function() {
    	alert('Так было задумано в дизайне, но эта кнопка не нужна');
    });
});

