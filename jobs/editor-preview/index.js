$(function(){
	updatePreview();

	$("#amountOfIceCream").change(function(){
		updatePreview();
	});
	$("#coneSize").change(function(){
		updatePreview();
	});

	$("#print").click(function(){
		var pdf = new jsPDF();
        pdf.fromHTML($("body").html(), 30, 30, {
			"width" : "170"
		}, function(dispose){
	        pdf.save('hello_world.pdf');
		}, {
			top: 80,
			bottom: 60,
            left: 40,
            width: 522
		});
	});

	function updatePreview(){
		var amountOfIceCream = $("#amountOfIceCream").val();

		if(amountOfIceCream >= 1 && amountOfIceCream <= 3){
			$("#preview").html("<img src='img/ice_"+amountOfIceCream+".jpg' alt='Ice Cream'>");
			$("#preview img").css({
				"height" : "200px",
				"border" : $("#coneSize").val()+"px solid black"
			});
			$("#warningMessage").css({
				"opacity" : "0"
			});
		}else{
			$("#preview").html("Please ajust your amount of Ice Cream :)");
			$("#warningMessage").html("Your requested amount of Ice Cream is either too high or too low.").css({
				"opacity" : "1"
			});
		}
	}
});
