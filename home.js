$(function(){
	title_background_size()

	$(window).resize(function(){
		title_background_size()
	});

	$(window).click(function(){
		//alert($(window).scrollTop());
	});

	/*for (var i = 0; i < array.length; i++) {
		array[i]
	}*/
});

function title_background_size(){
	var size = $(window).width()/1440*900;
	$("header").css({
		"height": ((size > 300)? 300 : size)+"px"
	});
}
