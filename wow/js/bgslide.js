(function($) {

			// Set initial x & y values for both odd and even bg-blocks    (or make 28 of each, one copy going up, the other going down)
			var x = 0;
	        var y = 0;

	        var xx = 0;
	        var yy = 0;
		

			// Target our divs
	        var odd = $(".odd");
	        var even = $(".even");


	        // Set initial background-position
	        odd.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
	        even.css('backgroundPosition', x + 'px' + ' ' + y + 'px');


	 		
	 		// diagonally scroll up/down background-position every millisecond
	      	$('.tab, .logodiv, .entrysprite').click(function(){

	      		for 
	     		(var i=0;i<5;i++)
  				{
				setTimeout(function() { window.setInterval(function() {
	        	odd.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
	            y-=7;
	            x+=7;

	            //y++ / x--
	           
	        }, 1);
			},800);
			} for 
	     		(var c=0;c<5;c++)
  				{
				setTimeout(function() { window.setInterval(function() {
	        	even.css("backgroundPosition", xx + 'px' + ' ' + yy + 'px');
	            yy+=7;
	            xx-=7;

	            //y++ / x--
	          
	        }, 1);
			},800);
			} 


	      	});

	      $(".content").on("click", ".button", function(){	

	      		for 
	     		(var i=0;i<5;i++)
  				{
				setTimeout(function() { window.setInterval(function() {
	        	odd.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
	            y-=7;
	            x+=7;

	            //y++ / x--
	            console.log("i");
	        }, 1);
			},800);
			} for 
	     		(var c=0;c<5;c++)
  				{
				setTimeout(function() { window.setInterval(function() {
	        	even.css("backgroundPosition", xx + 'px' + ' ' + yy + 'px');
	            yy+=7;
	            xx-=7;

	            //y++ / x--
	            console.log("i");
	        }, 1);
			},800);
			} 


	      	});


})(jQuery);