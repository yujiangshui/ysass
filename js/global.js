// 实用函数，欢迎补充在 github 上
var isMobile = {
	android:     function() { return navigator.userAgent.match(/Android/i)     ? true : false; },
	blackberry:  function() { return navigator.userAgent.match(/BlackBerry/i)  ? true : false; },
	ios:         function() { return navigator.userAgent.match(/iPhone|iPod/i) ? true : false; },
	windows:     function() { return navigator.userAgent.match(/IEMobile/i)    ? true : false; },
	any:         function() { return (isMobile.android() || isMobile.blackberry() || isMobile.ios() || isMobile.windows()); }
};


//jQuery 功能代码编辑区
;(function($) {

$(document).ready(function() {

	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	$('a[href="#"]').click( function(e) { e.preventDefault(); return false; } );

	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0}, 200);
	});

});

$(window).load(function() {

});

$(window).scroll(function(){

	var scrollt = $(window).scrollTop();
	if( scrollt > 200 ){
		$('.back-to-top').fadeIn(200);
	}else{
		$('.back-to-top').fadeOut(200);
	}
	
});

})(jQuery);

