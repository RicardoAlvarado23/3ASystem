;(function(){
	let sticky = false;
	let currentPosition = 0;
	const imageCounter = $("[data-name='image-counter']").attr("content");
	console.log(currentPosition);
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0);
	$(window).scroll(()=>{
		const inBotton = isInBottom();
		if(inBotton && !sticky){
			stickNavigation()
			sticky = true;
		}
		if(!inBotton && sticky){
			sticky = false;
			unStickNavigation()
		}
	})	

	setInterval(function(){
		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0;
		}
		$("#gallery .inner").css({
			left: "-"+currentPosition * 100+"%"	
		});
	
	},4000);

	function stickNavigation(){
		$("#description").removeClass("absolute").addClass("fixed");
		$("#navigation").slideUp("fast");
		$("#sticky-navigation").slideDown("fast");
	}

	function unStickNavigation(){
		$("#description").addClass("absolute").removeClass("fixed");
		$("#navigation").slideDown("fast");
		$("#sticky-navigation").slideUp("fast");
	}

	function isInBottom(){
		const description = $("#description");
		const descripcionHeight = description.height();

		return $(window).scrollTop() > $(window).height() - descripcionHeight * 2;
	}
})()