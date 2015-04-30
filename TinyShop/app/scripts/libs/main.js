jQuery(document).ready(function() {
	'use strict';
	var windowWidth = $(window).width();

	buildCarousel();
	buildSearchBar();

	// Read Only
	$('.rating.readonly-rating').raty({
		readOnly: true,
		path: 'content/img',
		score: function() {
			return $(this).attr('data-score');
		}
	});

	$('.rating.rate').raty({
		path: 'content/img',
		score: function() {
			return $(this).attr('data-score');
		}
	});

	$(".tooltip-hover").tooltip();

	// init, we hide button back to top
	$("#back-to-top").hide();

	createBackToTopLink();
	backToTopEvent();

	$(window).scroll(function() {
		/* Act on the event */
		createBackToTopLink();
	});

	/* Sidebar Flexslider */
	$('.sidebar-flexslider').flexslider({
		animate: "slide",
		controlNav: true,
		directionNav: false,
		prevText: "",
		nextText: "",
		start: function(slider) {
			$('body').removeClass('loading');
		}
	});

	/* Revolutions Slider */
	$('.tp-banner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:500,
		hideThumbs:10,
		navigationType:"none"
	});

	// product actions accordion ----------------------------------------------
	// productButtons contains: add to cart/wishlist/compare/
	var productButtons = $('.product-actions').not('.full-width');
	productButtons.find('>span:first-child').addClass('current');
	productButtons.find('>span').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).parent().find('>span').removeClass('current');
		$(this).addClass('current');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('current');
	});

	productButtons.hover(function() {
		/* Stuff to do when the mouse enters the element */
		// do nothing;
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('>span:first-child').addClass('current');
	});
	// End of pruduct actions accordion ----------------------------------------------

	function createBackToTopLink() {
		var button = $("#back-to-top");
		var w_scroll = $(window).scrollTop();
		if (w_scroll > 150 && windowWidth > 767) {
			button.fadeIn('400');
		} else {
			button.fadeOut('400');
		}
	}

	function backToTopEvent() {
		var button = $("#back-to-top");
		button.click(function() {
			/* Act on the event */
			$('html,body').animate({scrollTop:0}, 600);
		});
	}

	function buildCarousel() {
		$('.owl-carousel').each(function() {
			var maxItems = $(this).attr('data-max-items');
			var tabletItems = maxItems;
			if(maxItems > 1) {
				tabletItems = maxItems - 1;
			}
			var mobileItems = 1;

			// install Owl carousel
			$(this).owlCarousel({
				items: maxItems,
				pagination: false,
				itemsDesktop: [1199, maxItems],
				itemsDesktopSmall: [1000, maxItems],
				itemsTablet: [920, tabletItems],
				itemsMobile: [560, mobileItems]
			});

			var owl = $(this).data('owlCarousel');

			// go next
			$(this).parent().parent().find('.icon-left-dir').click(function(e) {
				/* Act on the event */
				owl.next();
			});

			// go previous
			$(this).parent().parent().find('.icon-right-dir').click(function(e) {
				/* Act on the event */
				owl.prev();
			});
		});
	}

	function buildSearchBar() {
		var searchButton = $('.nav-search');
		var searchBar = $('#search-bar');
		searchButton.click(function() {
			if (searchBar.hasClass('searchbar-visible')) {
				searchButton.removeClass('searchbar-visible');
				searchBar.animate({opacity: 0, left:-200, right:200}, 200, function() {
					$(this).removeClass('searchbar-visible').hide();
				});
			} else {
				searchButton.addClass('searchbar-visible');
				searchBar.css({
					"opacity": 0,
					"left": -200,
					"right": 200
				}).show().animate({opacity: 1, left: 0, right: 1}, 300, function() {
					$(this).addClass('searchbar-visible');
					var config = {
						'.chosen-select-search': {disable_search_threshold: 10, width: '100%'}
					};
					for(var selector in config){
						$(selector).chosen(config[selector]);
					}

				});
			}
		});
	}
});