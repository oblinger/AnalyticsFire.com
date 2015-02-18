$(document).ready(function(){

	var interstichA = $('#interstitial-image-a');
	var interstichB = $('#interstitial-image-b');

	enquire.register("screen and (max-width:720px)", {
	   	match : function(){
	   		interstichA.remove();
	   		interstichB.remove();
	   	},
	   	unmatch : function(){
	   		//$(".interstitch-a").append(interstichA);
	   		$(".interstitch-b").append(interstichB);
	   	}
	});


	$(function() {
		$("#modal-1").on("change", function() {
			if ($(this).is(":checked")) {
				$("body").addClass("modal-open");
			} else {
				$("body").removeClass("modal-open");
			}
		});

		$(".modal-window").on("click", function() {
			$(".modal-state:checked").prop("checked", false).change();
		});

		$(".close-modal").on("click", function() {
			$(".modal-state:checked").prop("checked", false).change();
		});

		$(".modal-inner").on("click", function(e) {
			e.stopPropagation();
		});
	});


	$('.send').click(function(){
		$('.form').css({"display":"none"})
		$('.thanks').css({"display":"block"})
		$('#simplemodal-container').css({"height":"300px"})
	})

	var controller = new ScrollMagic();
	var splashscene = new ScrollScene()
		.triggerElement("#trigger1")
		.setTween(TweenMax.from(".graph-bar", 0.5, {"margin-top": "360px"}))
		.addTo(controller)

	var trashleftscene = new ScrollScene()
		.triggerElement("#trash-bar")
		.triggerHook("onEnter")
		.duration(400)
		.setTween(TweenMax.to(".trash-left", 1, {top: "300px", left: "275px", ease: Linear.easeOutQuart}))
		.addTo(controller)

	var trashcenterscene = new ScrollScene()
		.triggerElement("#trash-bar")
		.triggerHook("onEnter")
		.duration(400)
		.setTween(TweenMax.to(".trash-center", 1, {top: "300px", ease: Linear.easeOutQuart}))
		.addTo(controller)

	var trashrightscene = new ScrollScene()
		.triggerElement("#trash-bar")
		.triggerHook("onEnter")
		.duration(400)
		.setTween(TweenMax.to(".trash-right", 1, {top: "300px", right: "275px", ease: Linear.easeOutQuart}))
		.addTo(controller)


	var trasharrowsscene = new ScrollScene()
		.triggerElement("#trash-bar")
		.triggerHook("onEnter")
		.duration(200)
		.setTween(TweenMax.to(".arrow-block", 1, {opacity: "0", ease: Linear.easeNone}))
		.addTo(controller)

		trashcenterscene.on("end", function (event) {
        	$('.trash').css({"opacity":"0"});
		});

		trashcenterscene.on("end", function (event) {
        	$('.trash-full').css({"opacity":"1"});
		});

		trashcenterscene.on("progress", function (event) {
        	$('.trash').css({"opacity":"1"})
        	$('.trash-full').css({"opacity":"0"});
		});
		
	var interscene = new ScrollScene()
		.triggerElement("#trash-bar")
		.triggerHook("onEnter")
		.duration($(window).height()*2)
		.setTween(TweenMax.to("#interstitial-image-a", 1, {top: "-300px", ease: Linear.easeNone}))
		.addTo(controller)

	var interscene = new ScrollScene()
		.triggerElement(".interstitial-trigger-b")
		.triggerHook("onEnter")
		.duration($(window).height()*2)
		.setTween(TweenMax.to("#interstitial-image-b", 1, {top: "-350px", ease: Linear.easeNone}))
		.addTo(controller)
});