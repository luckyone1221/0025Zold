"use strict";

var JSCCommon = {
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").after('<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	}
};
var $ = jQuery;

function eventHandler() {
	JSCCommon.ifie(); //luckyone js
	//top slider

	var topSlider = new Swiper('.top-slider-js', {
		spaceBetween: 30,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 2
		},
		navigation: {
			prevEl: '.top-sl-prev--js',
			nextEl: '.top-sl-next--js'
		},
		pagination: {
			el: '.top-sl-pugin--js',
			type: 'bullets',
			clickable: true
		}
	}); //sProggramm

	$('.prog-item-js').click(function () {
		var self = this;
		$('.prog-item-js').each(function () {
			if (this === self) {
				$(this).toggleClass('active');
				$(this.parentElement).find('.prog-content-js').slideToggle(function () {
					$(this).toggleClass('active');
				});
			} else {
				$(this).removeClass('active');
				$(this.parentElement).find('.prog-content-js').slideUp(function () {
					$(this).removeClass('active');
				});
			}
		});
	}); //end juckyone js

	$(".video-box__link ").click(function () {
		$(this).addClass('active').html($(this).data('src'));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} //localStorage.clear();