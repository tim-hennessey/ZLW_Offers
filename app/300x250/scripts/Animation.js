var app = app || {};


app.Animation = (function () {

	
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax({paused:true});
	var banner = document.getElementById('banner');
	var txt1a = document.getElementById('txt1a');
	var txt1b = document.getElementById('txt1b');
	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');
	var txt3a = document.getElementById('txt3a');
	var txt3b = document.getElementById('txt3b');
	var txt4a = document.getElementById('txt4a');
	var txt4b = document.getElementById('txt4b');
	var txt5 = document.getElementById('txt5');
	var txt6 = document.getElementById('txt6');
	
	var cta = document.getElementById('cta');
	var curtain = document.getElementById('curtain');

	var resolve = document.getElementsByClassName("resolve");
	var container = document.getElementsByClassName("container");
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(cta, {y:"-=5", transformOrigin: "50% 70%"});
		t.set(txt5, {x:"-=5"});
		t.set(txt6, {y:"-=5"});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.to(txt1a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt1b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(txt1a, .5, {opacity: 0}, "+=1.5")
		.to(txt1b, .5, {opacity: 0}, "-=.5")

		.to(txt2a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt2b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(txt2a, .5, {opacity: 0}, "+=1.5")
		.to(txt2b, .5, {opacity: 0}, "-=.5")

		.to(txt3a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt3b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(txt3a, .5, {opacity: 0}, "+=1.5")
		.to(txt3b, .5, {opacity: 0}, "-=.5")

		.to(txt4a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt4b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(curtain, .75, {opacity: 1, onComplete: function () {tl2.play();}}, "+=1.5")

		.set(resolve, {display: "block"})

		.from(txt5, .5, {y:"-=10", opacity: 0, ease: Sine.easeInOut})

		.from(container, .5, {y:"-=10", opacity: 0, ease: Sine.easeInOut}, "-=.5")

		.from(txt6, .5, {y:"-=10", opacity: 0, ease: Sine.easeInOut, onComplete: function () {tl2.play();}}, "-=.5")

		.from(cta, .5, {y:"-=10", scale: 0, opacity: 0, ease: Sine.easeInOut}, "-=.25");


		tl2.to(flag, 0.1, {display: "block"})
		
		.to(sprite, 1, {x: -468, ease: SteppedEase.config(18)}, "-=.25");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
