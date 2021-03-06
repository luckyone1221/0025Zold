"use strict";

var JSCCommon = {
	ifie: function ifie() {
		!!window.MSInputMethodContext && !!document.documentMode && $("body").after('<div class="browsehappy">\t<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
	}
},
		$ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	new Swiper(".top-slider-js", {
		spaceBetween: 30,
		loop: !0,
		lazy: {
			loadPrevNext: !0,
			loadPrevNextAmount: 2
		},
		navigation: {
			prevEl: ".top-sl-prev--js",
			nextEl: ".top-sl-next--js"
		},
		pagination: {
			el: ".top-sl-pugin--js",
			type: "bullets",
			clickable: !0
		}
	});
	$(".prog-item-js").click(function () {
		var e = this;
		$(".prog-item-js").each(function () {
			this === e ? ($(this).toggleClass("active"), $(this.parentElement).find(".prog-content-js").slideToggle(function () {
				$(this).toggleClass("active");
			})) : ($(this).removeClass("active"), $(this.parentElement).find(".prog-content-js").slideUp(function () {
				$(this).removeClass("active");
			}));
		});
	}), $(".video-box__link ").click(function () {
		$(this).addClass("active").html($(this).data("src"));
	});
}

"loading" !== document.readyState ? eventHandler() : document.addEventListener("DOMContentLoaded", eventHandler);