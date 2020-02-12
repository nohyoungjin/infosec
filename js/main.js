/* */

dummyStyle = document.createElement('div').style;

vendor = (function () {
	var vendors = 't,webkitT,MozT,msT,OT'.split(','),
		t,
		i = 0,
		l = vendors.length;

	for ( ; i < l; i++ ) {
		t = vendors[i] + 'ransform';
		if ( t in dummyStyle ) {
			return vendors[i].substr(0, vendors[i].length - 1);
		}
	}
	return false;
})();

TRNEND_EV = (function () {
	if ( vendor === false ) return false;

	var transitionEnd = {
			''			: 'transitionend',
			'webkit'	: 'webkitTransitionEnd',
			'Moz'		: 'transitionend',
			'O'			: 'otransitionend',
			'ms'		: 'MSTransitionEnd'
		};

	return transitionEnd[vendor];
})();

ANI_EV = (function () {
	if ( vendor === false ) return false;

	var animationEnd = {
			''			: 'animationend',
			'webkit'	: 'webkitAnimationEnd',
			'Moz'		: 'AnimationEnd',
			'O'			: 'oAnimationEnd',
			'ms'		: 'MSAnimationEnd'
		};

	return animationEnd[vendor];
})();

(function ($) {
	$.fn.TRANSITION = function( callback ) {
		var ver = getIEVersion();
		if(ver > -1 && ver < 10) {
			callback( $(this) );
			return;
		}
		if(TRNEND_EV != undefined) {
			$(this).one(TRNEND_EV, function() {
				callback( $(this) );
			})
		} else {
			callback( $(this) );
		}
	}
})(jQuery);

(function ($) {
	$.fn.ANI = function( callback ) {
		if(ANI_EV != undefined) {
			$(this).one(ANI_EV, function() {
				callback( this );
			})
		} else {
			callback( this );
		}
	}
})(jQuery);

function getIEVersion() {    
	 var rv = -1; // Return value assumes failure.    
	 if (navigator.appName == 'Microsoft Internet Explorer') {        
		  var ua = navigator.userAgent;        
		  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		  if (re.exec(ua) != null)            
			  rv = parseFloat(RegExp.$1);    
		 }    
	 return rv; 
}


/*===== main ani =====*/

var vrPlay = true;
var aniIdx = 0;

$(function() {
	refreshGnbH();
});

var isIE = /*@cc_on!@*/false || !!document.documentMode;

function scaleVR(idx) {
	if(!vrPlay)
		return;

	$(".vr div.on").ANI(function() {
		var old = $(".vr div.on");
		old.removeClass("fadeIn");
		if(idx > 0)
			aniIdx = idx;
		else
			aniIdx++;
		if(aniIdx > 2)
			aniIdx = 0;

		$(".control_btns a").removeClass("on").removeAttr("title");
		$(".control_btns a").eq(aniIdx).addClass("on").attr("title","현재배너");

		$(".vr div").eq(aniIdx).addClass("fadeIn on").TRANSITION(function() {
			$(".vr div").eq(aniIdx).addClass("on");
			old.removeClass("on");
			scaleVR(-1);
		});
	});
}

$(document).ready(function() {	

	$(window).resize(function() {
		refreshGnbH();
	});

	setTimeout(function(){
		$("#wrap.main").parent().addClass("load");
	}, 300);

	$(".vr div.first").addClass("on");
	scaleVR(-1);

	$(".control_btns a.btn_stop").click(function() {
		vrPlay = false;
		$(this).hide();
		$(".control_btns a.btn_play").css("display","inline-block");
		$(".vr div").removeClass("running");
		$(".vr div").addClass("paused");
		$(".control_btns a.btn_play").focus();
		return false;
	});

	$(".control_btns a.btn_play").click(function() {
		vrPlay = true;
		$(this).hide();
		$(".control_btns a.btn_stop").show();
		$(".vr div").removeClass("paused");
		$(".vr div").addClass("running");
		scaleVR(-1);
		$(".control_btns a.btn_stop").focus();
		return false;
	});

	$(".control_btns a.page").click(function() {
		var idx = parseInt($(this).attr("data-idx"));
		$(".vr div").off("transitionend webkitTransitionEnd transitionend otransitionend MSTransitionEnd");
		$(".vr div").off("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd");

		var old = $(".vr div.on");
		old.removeClass("fadeIn");
		aniIdx = idx;
		
		$(".control_btns a").removeClass("on").removeAttr("title");
		$(".control_btns a").eq(aniIdx).addClass("on").attr("title","현재배너");

		$(".vr div").eq(aniIdx).addClass("fadeIn on").TRANSITION(function() {
			$(".vr div").eq(aniIdx).addClass("on");
			old.removeClass("on");
		});

		scaleVR(-1);
		return false;
	});

});

function refreshGnbH() {
	var h = $(window).height();
	var w = $(window).width();
	var headerH = $("#header").height();
	var contH = h - (headerH);
	
	$(".visual").height(contH);
}