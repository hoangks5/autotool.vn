$(document).ready(function() {

	"use strict";

	$('.counter').counterUp();

	$("#contactForm").validator().on("submit", function (event) {

		"use strict";

		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Please Follow Error Messages and Complete as Required");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});


	function submitForm(){
		
		"use strict";

		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email + "&phone=" + phone,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		
		"use strict";

		$("#contactForm")[0].reset();
		submitMSG(true, "Thank you for your submission :)")
	}

	function formError(){
		
		"use strict";

		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		
		"use strict";

		if(valid){
			var msgClasses = "success form-message";
		} else {
			var msgClasses = "error form-message";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

	$("#contactForm2").validator().on("submit", function (event) {
		
		"use strict";

		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError2();
			submitMSG2(false, "Please Follow Error Messages and Complete as Required");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm2();
		}
	});


	function submitForm2(){
		
		"use strict";

		// Initiate Variables With Form Content
		var name = $("#name2").val();
		var email = $("#email2").val();
		var phone = $("#phone2").val();

		$.ajax({
			type: "POST",
			url: "php/form-process2.php",
			data: "name=" + name + "&email=" + email + "&phone=" + phone,
			success : function(text){
				if (text == "success"){
					formSuccess2();
				} else {
					formError2();
					submitMSG2(false,text);
				}
			}
		});
	}

	function formSuccess2(){
		
		"use strict";

		$("#contactForm2")[0].reset();
		submitMSG2(true, "Thank you for your submission :)")
	}

	function formError2(){
		
		"use strict";

		$("#contactForm2").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG2(valid, msg){
		
		"use strict";

		if(valid){
			var msgClasses = "success form-message";
		} else {
			var msgClasses = "error form-message";
		}
		$("#msgSubmit2").removeClass().addClass(msgClasses).text(msg);
	}

	initbackTop();
	function initbackTop() {
		
		"use strict";

		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('show');
			} else {
				jQuerybackToTop.removeClass('show');
			}
		});
		jQuerybackToTop.on('click', function(e) {
			jQuery("html, body").stop().animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		});
	}

	initStickyHeader();
	function initStickyHeader() {
		
		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 152;
			var flag = true;

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}
	initAddClass();
	function initAddClass() {
		
		"use strict";

		jQuery('.nav-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
		jQuery('#nav .smooth').on( "click", function(){
			if (jQuery("body").hasClass("nav-active")) {
				setTimeout(function() { 
				jQuery("body").removeClass("nav-active");}, 800);
			}
		});
	}
	
	$.scrollIt({
		topOffset: -75,
		scrollTime: 1500,
		easing: 'easeInOutExpo'
	});

	$( "#subscribe-form" ).ajaxChimp({
		callback: mailchimpCallback,
		url: "http://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2" //Replace this with your own mailchimp post URL. 
	});

	function mailchimpCallback(resp) {
		
		"use strict";

		if (resp.result === 'success') {
		    $('#msgSubmit').hide().html('<div class="success">' + resp.msg + '</div>').slideDown().delay(10000).slideUp();
		}
		else if (resp.result === 'error') {
		    $('#msgSubmit').hide().html('<div class="error">' + resp.msg + '</div>').slideDown().delay(10000).slideUp();
		}
	}

	initSlickSlider();
	// Slick Slider init
	function initSlickSlider() {

		jQuery('.main-slider').slick({
			dots: true,
			speed: 800,
			arrows: true,
			infinite: true,
			autoplay: true,
			slidesToShow: 1,
			autoplaySpeed: 2000,
			adaptiveHeight: true
		});
	}

	initLightbox();
	// modal popup init
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			helpers: {
				media : {},
				overlay: {
					css: {
						background: 'rgba(0, 0, 0, 0.65)'
					}
				}
			},
			afterLoad: function(current, previous) {
				// handle custom close button in inline modal
				if(current.href.indexOf('#') === 0) {
					jQuery(current.href).find('a.close').off('click.fb').on('click.fb', function(e){
						e.preventDefault();
						jQuery.fancybox.close();
					});
				}
			},
			padding: 0
		});
	}

	initStyleChanger();
	// style changer
	function initStyleChanger() {
		
		"use strict";

		var element = jQuery('#style-changer');

		if(element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function(data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}

	initVegasSlider();
	// Vegas Slider init
	function initVegasSlider() {
		jQuery("#bgvid").vegas({
		  slides: [
		    {   src: 'images/img07.jpg',
		        video: {
		            src: [
		                'video/polina.webm',
		                'video/polina.mp4'
		            ],
		            loop: true,
		            timer: false,
		            mute: true
		        }
		    }
		]
		});
	}

}); 
$( window ).on( "load" , function() {

	"use strict";

	$( "#loader" ).delay( 600 ).fadeOut( 300 );
}); 