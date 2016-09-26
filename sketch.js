$(document).ready(function() {
    for (var i = 0; i < 16; i++) {
        for (var y = 0; y < 16; y++) {
            var square = $("<div class='square'></div>");
            square.appendTo('#container');
        }
   }
	$('.square').on('mouseenter', function(){
		$(this).css('background-color', 'red');
		});
});
	function reset(){
		$("#container").remove();
		$('body').prepend("<div id='container'></div>")
	
		var height = prompt("please enter a height between 1 and 25");
		if(height > 25){
			 height = prompt("height must be 25 or less");
			}
		var width = prompt("please enter a width between 1 and 25");
		if(width > 25){
			width = prompt("Width must be 25 or less");
			}
		for (i=1; i<=height; i++){
			$("#container").append("<div class='square'></div>");
			}
		for (i=1; i<=width; i++){
			$("square").append("<div id='container'></div>");
			}
			for(x=0; x<height; x++){
			for(z=0; z<width; z++){
				var square = $("<div class='square'></div>");
            square.appendTo('#container')
				}
		}
		$('.square').on('mouseenter', function(){
		$(this).css('background-color', 'red');
		});
			
		}


	
