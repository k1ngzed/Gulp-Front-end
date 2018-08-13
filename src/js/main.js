// bootstrap
//= ../dist/bootstrap/bootstrap.min.js

// plugins
//= ../dist/jquery-mousewheel/jquery.mousewheel.min.js
//= ../dist/fancybox/jquery.fancybox.pack.js
//= ../dist/waypoints/waypoints-1.6.2.min.js
//= ../dist/scrollto/jquery.scrollTo.min.js
//= ../dist/owl-carousel/owl.carousel.min.js
//= ../dist/countdown/jquery.plugin.js
//= ../dist/countdown/jquery.countdown.min.js
//= ../dist/landing-nav/navigation.js
//= ../dist/maskedinput/jquery.maskedinput.min.js
//= ../dist/isotope/isotope.pkgd.js
//= ../dist/formstyler/jquery.formstyler.min.js
//= ../dist/rangeSlider/ion.rangeSlider.min.js
//= ../dist/remodal/remodal.js


$(document).ready(function() {
	

	
});

	// Mobile Button Menu
	// <div class="hamburger hamburger--spin js-hamburger ">
	// 	<div class="hamburger-box">
	// 		<div class="hamburger-inner"></div>
	// 	</div>
	// </div>
	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('is-active');
	// });

	// ionRangeSlider
	// http://ionden.com/a/plugins/ion.rangeSlider/demo.html
	// $("#range_01").ionRangeSlider({
	// 	type: "double",
	// 	grid: true,
	// 	min: 0,
	// 	max: 1000,
	// 	from: 200,
	// 	to: 800,
	// 	prefix: "$",
	// 	postfix: " pm"
	// });

	// Grid
	// https://codepen.io/desandro/pen/mEinp
	// $('.grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	masonry: {
	// 		columnWidth: 1
	// 	}
	// });

	// FormStyler
	// http://dimox.name/jquery-form-styler/
	// $('select').styler({
	// 	locale: 'en',
	// 	locales: {
	// 		'en': {
	// 			filePlaceholder: 'No file selected',
	// 			fileBrowse: 'Browse...',
	// 			fileNumber: 'Selected files: %s',
	// 			selectPlaceholder: 'Select...',
	// 			selectSearchNotFound: 'No matches found',
	// 			selectSearchPlaceholder: 'Search...'
	// 		}
	// 	}
	// });

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	// var austDay = new Date($(".countdown").attr("date-time"));
	// $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	// $("a.scroll").click(function() {
	// 	$.scrollTo($(".div"), 800, {
	// 		offset: -90
	// 	});
	// });
	//Скролл до id, указанного в hash URL
	// var elem = window.location.hash;
	// if(elem) {
	// 	$.scrollTo(elem, 800, {
	// 		offset: -90
	// 	});
	// };

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// function carousel_1() {
	// 	var owl = $(".carousel");
	// 	owl.owlCarousel({
	// 		items : 1,
	// 		loop : true,
	// 		autoHeight : true,
	// 		dots : true,
	// 		singleItem : true
	// 	});
	// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 		if (e.deltaY > 0) {
	// 			owl.trigger("owl.prev");
	// 		} else {
	// 			owl.trigger("owl.next");
	// 		}
	// 		e.preventDefault();
	// 	});
	// 	$(".next_button").click(function() {
	// 		owl.trigger("owl.next");
	// 	});
	// 	$(".prev_button").click(function() {
	// 		owl.trigger("owl.prev");
	// 	});
	// 	owl.on("resized.owl.carousel", function(event) {
	// 		var $this = $(this);
	// 		$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
	// 	});
	// 	setTimeout(function() {
	// 		owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
	// 	}, 5000);
	// };
	// carousel_1();

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	// $("#top").click(function () {
	// 	$("body, html").animate({
	// 		scrollTop: 0
	// 	}, 800);
	// 	return false;
	// });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
