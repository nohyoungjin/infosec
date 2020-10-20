$(function() {

	// init

	// $.fn.valid();

	smooth_scroll();

	navi();
	sticky();
	// search();

	site();

	scroll_flag();

	title_motion();
	video_popup();
	caption();

	// global

	var headH,
		tabletW = 1024;

	// on load

    $(window).on('load', function() {

		$('body').addClass('load');

	});

	// on resize

	$(window).resize(function() {

		var w = window.innerWidth;

		if (w > tabletW) {
			$('body').removeClass('open');
			$('.backface').fadeOut();
			$('#gnb > ul > li').removeClass('current');
			$('#gnb .sub_menu').hide();
		}

		$('.top_logo a').show();

	});

	// smooth scroll

	function smooth_scroll() {

		if (is_mobile() || is_mac_os() || is_browser_firefox()) {
			return;
		}

		var $window = $(window);

		if (smooth_scroll_passive()) {
			window.addEventListener('wheel', smooth_scroll_scrolling, { passive: false });
		} else {
			$window.on('mousewheel DOMMouseScroll', smooth_scroll_scrolling);
		}

	}

	function smooth_scroll_passive() {

		var supportsPassive = false;

		try {
			document.addEventListener('infosec', null, { get passive() { supportsPassive = true } });
		} catch(e) {}

		return supportsPassive;

	}

	function smooth_scroll_scrolling(event) {

		event.preventDefault ? event.preventDefault() : event.returnValue = false;

		var $window = $(window);
			scrollTime = 1,
			scrollDistance = $window.height() / 2.5,
			delta = 0;

		if (smooth_scroll_passive()) {
			delta = event.wheelDelta / 120 || -event.originalEvent.detail / 3;
		} else {
			if (typeof event.originalEvent.deltaY != 'undefined') {
				delta = -event.originalEvent.deltaY / 120;
			} else {
				delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
			}
		}

		var scrollTop = $window.scrollTop(),
			finalScroll = scrollTop - parseInt(delta * scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill: true },
			ease: Power3.easeOut,
			overwrite: 5
		});

	}

	// gnb pc

	function navi() {

		var $body = $('body'),
			$h_group = $('.h_group'),
			$gnb = $('#gnb');

		$gnb.on('mouseenter', '> ul > li', function() {

			if (window.innerWidth > tabletW && !$(this).hasClass('last')) {

				$(this).addClass('on');
				$h_group.addClass('menu_hover');
				$(this).children('.sub_menu').stop().fadeIn().parent().siblings().children('.sub_menu').stop().fadeOut('fast');

				headH = $(this).find('.sub_menu').height() + 92;
				$(this).parents('.h_group').stop().animate({ 'height': headH }, 300, 'easeOutQuad');

			}

		});

		$gnb.on('mouseleave', '> ul > li', function() {
			
			$('#gnb > ul > li').removeClass('on');

		});

		$gnb.on('mouseleave', function() {

			if (window.innerWidth > tabletW) {

				$('#gnb > .box > ul > li').removeClass('on');
				$h_group.removeClass('on').css('border-bottom','1px solid #d3d3d3');

				$('#gnb > ul > li').parents('.h_group').stop().animate({ 'height': '90px' }, 300, function() {
					$('#gnb > ul > li').siblings().children('.sub_menu').hide();
					$h_group.removeClass('menu_hover');
				});

			}

		});

		$gnb.on('mouseenter', '> ul > li.last', function() {

			if (window.innerWidth > tabletW) {

				$h_group.removeClass('on').css('border-bottom','1px solid #d3d3d3');

				$('#gnb > ul > li').parents('.h_group').stop().animate({ 'height': '90px' }, 300, function() {
					$('#gnb > ul > li').siblings().children('.sub_menu').hide();
					$h_group.removeClass('menu_hover');
				});

			}

		});

		// gnb keyboard accessibility

		$gnb.on('focusin', '> ul > li > a', function() {

			if (window.innerWidth > tabletW) {

				$(this).siblings('.sub_menu').stop().fadeIn().parent().siblings().children('.sub_menu').stop().fadeOut();
				$h_group.addClass('on').css('border-bottom','none');

				headH = $(this).parent().find('.sub_menu').height() + 92;
				$(this).parents('.h_group').stop().animate({ 'height': headH }, 300, 'swing');

			}

		});

		// area escape

		$('.logo_link, #lnb > ul > li:first-child > a').on('focusin', function() {

			if (window.innerWidth > tabletW) {

				$h_group.removeClass('on').css('border-bottom','1px solid #d3d3d3');
				$('#gnb > ul > li').siblings().children('.sub_menu').hide();

				$('#gnb > ul > li').parents('.h_group').stop().animate({ 'height': '90px' }, 300, function() {
					$('#gnb > ul > li').siblings().children('.sub_menu').hide();
				});

			}

		});

		//

		$h_group.append('<div class="backface"></div>')

		$('.btn_offcanvas').on('click', function(e) {

			e.preventDefault();

			$gnb.fadeIn('fast');
			$body.toggleClass('open');
			
			$('#header').stop().animate({ 'top': '0' }, 500, 'linear');
			$('.backface').stop().fadeIn('slow');
			
		});

		$('.btn_offcanvas_close').on('click', function(e) {

			e.preventDefault();

			$gnb.fadeOut('fast');
			$body.removeClass('open');

			$('.backface').stop().fadeOut('slow');
			$('.btn_offcanvas').focus();

		});

		$(document).on('click touchstart', '.backface', function(e) {

			e.preventDefault();

			$body.removeClass('open');
			$('.backface').stop().fadeOut('slow');

		});
		
		// offcanvas event

		$(document).on('click', '#gnb > ul > li > a', function(e) {

			if (!$(this).parent().hasClass('last')) {
				e.preventDefault();
				e.stopPropagation();
			}

			if (window.innerWidth <= tabletW) {

				$(this).parent().find('.sub_menu').filter(':not(:animated)').slideToggle();

				$('#gnb > ul > li').find('.sub_menu').filter(':not(:animated)').slideUp('fast');
				$('#gnb .sub_menu .two_depth').filter(':not(:animated)').slideUp('fast');

				if ($(this).parent().hasClass('current')) {
					$(this).parent().removeClass('current');
					return;
				}

				$('#gnb > ul > li').removeClass('current');
				$(this).parent().toggleClass('current');
				
			}

		});

		$(document).on('click', '#gnb > ul > li:not(".last") .sub_menu .item > a', function(e) {

			if (window.innerWidth <= tabletW) {

				e.preventDefault();
				e.stopPropagation();

				if ($(this).parent().next('.two_depth').length) {

					e.preventDefault();

					$(this).parent().next('.two_depth').filter(':not(:animated)').slideToggle();
					$('#gnb .sub_menu .two_depth').filter(':not(:animated)').slideUp('fast');

					if ($(this).parent().hasClass('current')) {
						$(this).parent().removeClass('current');
						return;
					}

					$('#gnb > ul > li:not(".last") .sub_menu .item').removeClass('current');
					$(this).parent().toggleClass('current');

				}

			}

		});

	}

	// sticky

	function sticky() {

		var fixed_offset = $('#header').offset();

		// alert(fixed_offset.top);

		$(window).on('scroll', $.throttle(1000 / 15, function() {

			if ($(window).scrollTop() > fixed_offset.top) {
				$('.h_group').addClass('affix');
				$('#gnb > .box > ul > li > a').css('color','#444');
			} else {
				$('.h_group').removeClass('affix');
				if ( !$('.h_group').hasClass('sub') ) {
					// $('.h_group').css('background','transparent');
				}
				$('#gnb > .box > ul > li > a').css('color','#fff');
			}

		}));

	}

	// search

	function search() {

		$('#header .search_area .sizing_wrap .btn_search').click( function() {

			if (!$('#header .search_area .sizing_wrap .btn_search').hasClass('on')) {
				$('#header .search_area .sizing_wrap input').show();
				$('#header .search_area .sizing_wrap .btn_cl').show();

				$(this).addClass('on');

				setTimeout(function() {
					$('#header .search_area .sizing_wrap').addClass('show');
					$('#header .search_area .sizing_wrap input').focus();
				}, 10);

				if($('body').data('device') == 'mobile') {
					$('.top_logo a').hide();
				}

				return false;
			}

		});

		$('#header .search_area .sizing_wrap .btn_cl').click( function() {

			$('#header .search_area .sizing_wrap').removeClass('show');
			$('#header .search_area .sizing_wrap a').removeClass('on');
			$('#header .search_area .sizing_wrap a.btn_search').focus();
			$('#header .search_area .sizing_wrap .btn_cl').hide();

			$('.top_logo a').show();

		});

	}

	// site

	function site() {

		$('.btn_familyView').click(function() {

			if ($(this).next().css('display') == 'none') {
				$('.btn_familyView').removeClass('open');
				$('.list_family').slideUp(150);
				$(this).addClass('open');
				$(this).find('.txt').text('닫기');
				$(this).find('._down3').attr('class', 'ico _up3');
				$(this).next().slideDown(150);
			} else {
				$('.btn_familyView').removeClass('open');
				$('.list_family').slideUp(150);
				$(this).find('.txt').text('열림');
				$(this).find('._up3').attr('class', 'ico _down3');
			}

			return false;

		});

	}

	// top floating

	function scroll_flag() {

		var btnTopFlag = false;

		$(window).scroll( function() {

			if ($(window).scrollTop() > 100) {
				if (!btnTopFlag) {
					$('.btn_top').stop(true).fadeIn(300);
				}
				btnTopFlag = true;
			} else {
				if (btnTopFlag) {
					$('.btn_top').stop(true).fadeOut(300);
				}
				btnTopFlag = false;
			}

		});

	}

	// title motion

	function title_motion() {

		if (!$('body').hasClass('home')) {

			var tl = new TimelineLite({ delay: 0.5 });

			if ($('.sub-banner .inner p').length > 0) {
				var title = new SplitText($('.sub-banner .inner p'), { type: 'chars' });
				var title_chars = title.chars;

				tl.staggerFrom(title_chars, 1.2, motion({ force3D: true, autoAlpha: 0, y: 10, ease: Back.easeOut, onComplete: function() {
						$('.sub-banner .inner p').addClass('completed');
					}
				}), 0.02, '+=0')
			}

		}

	}

	// video popup

	function video_popup() {

		$('#btest1').on('click', function(e) {
			e.preventDefault();
			BPOPUP =  $('.video_wrap').bPopup({
			   // modalClose : false
			});
		});

	}

	// caption

	function caption() {

		$('.video_wrap .tit a').click(function() {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on');
				$('.video_wrap .txt').slideUp(150);
				$(this).text('자막보기');
			} else {
				$(this).addClass('on');
				$('.video_wrap .txt').slideDown(150);
				$(this).text('자막닫기');
			}
			return false;
		});

	}

});


// accessibility

$.fn.valid = function() { 

	if (location.href.indexOf('?valid') < 0) {
		return;
	}

	$('img, a, input, iframe').each( function() {

		var $this = $(this);

		if ($this.attr('alt')) {
			$('<span class="testBlindAlt">alt='+$this.attr('alt')+'</span>').insertAfter($this);
		}
		
		if ($this.attr('title')) {
			$('<span class="testBlindAlt">title='+$this.attr('title')+'</span>').insertAfter($this);
		}

	})

	$('.blind').addClass('testBlind');

	$('table').find('caption').addClass('testBlind').prepend( function() { 
		return ('<strong>summary=</strong>'+this.parentNode.summary+'<br /><strong>caption=</strong>') }).end().find('th').append( function() { 
			if ( this.scope ) { 
				return ('<span class="testBlind">'+this.scope+'</span>')
			} 
	});

}

// scroll top 

function scollTopStart() {

	 $('html,body').stop().animate({ scrollTop: 0 }, 600);

}

// text motion

function motion(args) {

	args.rotation = 0.1;
	return args

}

// popup

function fn_popup(url, title, w, h, l, t) {

	var agent = navigator.userAgent.toLowerCase();

	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = l + dualScreenLeft;

	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf('msie') != -1)) {
		var top = (t - 60) + dualScreenTop;
	} else {
		var top = t + dualScreenTop;
	}

	// options

	var options = {
		toolbar     : 'no',  
		resizable   : 'yes',  
		scrollbars  : 'yes'   
	};

	window.open(url, title, 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ', location=1, scrollbars=1');

}

// is mobile condition

function is_mobile() {
    return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
	// return $('html').hasClass('mobile');
}

// simple os check

function is_mac_os() {
    return navigator.platform.indexOf('Mac') > -1;
}

// simple browser check

function is_browser_chrome() {
    return /Chrome/.test(navigator.userAgent);
}

function is_browser_firefox() {
    return /Firefox/.test(navigator.userAgent);
}