!(function(win, doc) {
	/**设计图宽度(根据设计图的宽度调整尺寸(默认iphone6的设计图x2))**/
	var clientWidth = 750;
	function setFontSize() {
		// 获取window 宽度
		// zepto实现 $(window).width()就是这么干的
		var winWidth = win.innerWidth;
		doc.documentElement.style.fontSize = (winWidth / clientWidth) * 100 + 'px';
	}
	var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
	var timer = null;
	win.addEventListener(evt, function() {
		clearTimeout(timer);
		timer = setTimeout(setFontSize, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if(e.persisted) {
			clearTimeout(timer);
			timer = setTimeout(setFontSize, 300);
		}
	}, false);
	// 初始化
	setFontSize();
}(window, document));