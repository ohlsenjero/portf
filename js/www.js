
$(document).ready(function(){


	var $wrapper = $('.wrapper'),

	currentIndex = 0,

	//overlay variable
	$overlay,
	$overlayContent;

	//story slide gallery 
	var $gallery = $('.gallery'),
	dissolveSpeed = 400,
	currentIndexStory = 0, 
	$sites = $('.images figure'),
	$nextBtn = $('.next-btn'),
	$prevBtn = $('.prev-btn'),
	numsites = $sites.length;
	var hovered=false;
	var hoveredTwice=false;



$('.invisible').hide();



$('.site2').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible2').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible2-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible2-3').show();
		}		
}, function(){
	$('.invisible').hide();
});



$('.site4').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible4').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible4-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible4-3').show();
		}		
}, function(){
	$('.invisible').hide();
});

$('.site5').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible5').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible5-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible5-3').show();
		}		
}, function(){
	$('.invisible').hide();
});

$('.site6').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible6').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible6-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible6-3').show();
		}		
}, function(){
	$('.invisible').hide();
});

$('.site7').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible7').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible7-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible7-3').show();
		}		
}, function(){
	$('.invisible').hide();
});

$('.site8').hover(function(){

	if(!hovered&&!hoveredTwice){
			$('.invisible8').show();

		}else if(hovered&&!hoveredTwice){
			$('.invisible8-2').show();
		}else if(hoveredTwice&&!hovered){
			$('.invisible8-3').show();
		}		
}, function(){
	$('.invisible').hide();
});




	



$('.vidvisible2 p').hover(function(){

	$('.neonframe2').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible2').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible2-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible2-3').show();
		}


	}, function(){
		$('.neonframe2').show();
});

$('.vidvisible3 p').hover(function(){

	$('.neonframe3').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible3').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible3-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible3-3').show();
		}


	}, function(){
		$('.neonframe3').show();
});



$('.vidvisible5 p').hover(function(){

	$('.neonframe5').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible5').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible5-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible5-3').show();
		}


	}, function(){
		$('.neonframe5').show();
});



$('.vidvisible7 p').hover(function(){

	$('.neonframe7').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible7').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible7-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible7-3').show();
		}


	}, function(){
		$('.neonframe7').show();
});

$('.vidvisible8 p').hover(function(){

	$('.neonframe8').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible8').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible8-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible8-3').show();
		}


	}, function(){
		$('.neonframe8').show();
});

$('.vidvisible9 p').hover(function(){

	$('.neonframe9').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisible9').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisible9-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisible9-3').show();
		}


	}, function(){
		$('.neonframe9').show();
});




$('.vidvisiblereel p').hover(function(){

	$('.neonframereel').hide();


	if(!hovered&&!hoveredTwice){
			$('.vidinvisiblereel').show();

		}else if(hovered&&!hoveredTwice){
			$('.vidinvisiblereel-2').show();
		}

		if(hoveredTwice){
			$('.vidinvisiblereel-3').show();
		}


	}, function(){
		$('.neonframereel').show();
});






$('.invisible').mouseout(function(e){handleMouseOut(e);});


    function handleMouseOut(e){		    


    		if(!hovered&&!hoveredTwice){
				$('.invisible').hide();

				hovered=true;

    		} else if (hovered&&!hoveredTwice){
    			$('.invisible').hide();
    			
    			    hoveredTwice=true;
    			    hovered=false;

    		} else if (hoveredTwice&&!hovered){
    			$('.invisible').hide();

    			    hoveredTwice=false;
    		}

}


	//init the sites - stack one on top the other, hide them and fade in 1st one
	$sites.parent().css({"position":"relative"});
	$sites.css({"position":"absolute"}).hide().eq(currentIndexStory).fadeIn(dissolveSpeed);

	/*---------------------- Next and Previous Btns -----------------------*/

	$nextBtn.click(function(){

		if(currentIndexStory<numsites-1){
			changeImage(currentIndexStory+1)
		}else{
			changeImage(0)
		}


	});

	$prevBtn.click(function(){

		if(currentIndexStory>0){
			changeImage(currentIndexStory-1);
		}else{
			changeImage(numsites-1)
		}

	});



	function changeImage(newIndex){

		//fade out previous selected image
		$sites.eq(currentIndexStory).stop(true, true).fadeOut(dissolveSpeed);

		currentIndexStory = newIndex;

		$sites.eq(currentIndexStory).stop(true, true).fadeIn(dissolveSpeed);



	};//end of image change function





});//this is the end of ready!


