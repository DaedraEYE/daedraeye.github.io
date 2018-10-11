var mainBodySize = 1600;
var sidebarSize = 300, minSidebarSize = 220;
var articlesSize = mainBodySize - sidebarSize;

$(function(){
	resizeEverything();

	$(window).resize(function(){
		resizeEverything();
	});
});

function resizeEverything(){
	var windowSize = $(window).width();
	console.log(windowSize);

	//console.log("side: "+$(".resizeSidebar").width());
	if(windowSize < 1600 && $(".resizeSidebar").width() > minSidebarSize){
		$(".resizeSidebar").css({
			"width" : windowSize/8+"px"
		});
	}else{
		$(".resizeSidebar").css({
			"width" : minSidebarSize+"px"
		});
	}

	if(windowSize < 1000){
		$(".resizeContacts").removeClass("row");
	}else{
		if(!$(".resizeContacts").hasClass("row")){
			$(".resizeContacts").addClass("row");
		}
	}
}
