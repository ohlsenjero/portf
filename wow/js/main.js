
$(document).ready(function(){


////////////////////////////////////// L O G O / DESIGNER'S ENTRY


	
      // $('#testDiv').slimscroll({
      //   size: '10px',
      //   distance: '1%'
      // });


	$('.wow').hover(function () {
		$(this).stop().transition({ scale: [1.04, 1.04] });
	},function () {
		$(this).stop().transition({ scale: [1, 1] });
	});







	$('.entrysprite').hover(function () {
		$(this).stop().transition({ x: '31%', y: '-50%' });
	},function () {
		$('.entrysprite').stop().transition({ x: '0px', y: '0px' });
	});



	
	$('.designergif').click(function(){
		$('.desig-bg').show();
		$('.tick-bg').css("z-index","8");
		$('.vid-bg').css("z-index","8");
	})



$('.headerdiv').css('width', $(window).width()+'px');

$(window).resize(function(){
	$('.headerdiv').css('width', $(window).width()+'px');	
});


////////////////////////////////////////////////////////////////// N A V


	var $navItems = $(".headerdiv a"),                         //  if it's 'header a'  everything works but SOCIAL links
	$main = $(".content"),
	fadeSpeed = 400;										// if 'header nav a', SOCIAL links work but not the logo and entryform links...
	
	//initialise - load intro content
	loadContent("#intro");
	

	//tabs click handler
	$navItems.click(function(e){
		

		e.preventDefault();
		
		//tabs selected states
		$navItems.filter(".selected").removeClass("selected");
		$(this).addClass("selected");
		



		//get the the id of the section to be loaded from the navItem
		var pageId = $(this).attr("href");
		
		//empty the old content from the main div and load the selected section
		loadContent(pageId);
		
	});





///////////////////////////////////////////////////////////////////////////////////////////   $MAIN.ON


	$main.on("click", ".button", function(){
		var pageId = $(this).attr("href");
		loadContent(pageId);

	});



//functions:

	function loadContent(pageId){
		
				$('footer').hide('fast', function(){


		//empty the old content from the main div and load the selected section
		$main.empty().css({opacity:0}).load("content.html "+pageId, function(){
			
			switch(pageId){

				case "#home":

					fadeIntroBG();
					break;

				case "#about":
					fadeIntroBG();
					break;
				case "#winners":

					winFunctionality();
						$('#winners2012').coinslider();
						$('#winners2011').coinslider();
						$('#winners2010').coinslider();
						$('#winners2009').coinslider();
						$('#winners2008').coinslider();
					fadeIntroBG();
					break;
				
				case "#designers":

					fadeIntroBG();
					break;

		
				case "#enterform":
					$main.find(".contact-form").formvalidation()
					fadeIntroBG();
					break;


				case "#register":
					$main.find(".reg-form").formvalidation()
					fadeIntroBG();
					break;
				case "#videos":
					videoFunctionality();
					fadeIntroBG();
					break;
				case "#tickets":
					fadeIntroBG();
					break;
			}
			
			$(this).delay('300').fadeTo(900, 1, function(){

				$('footer').show();
			});

		});
		});
	}
	

	function fadeIntroBG(){
		$('.intro-bg').delay('2000').fadeOut(1000);
	}




	
	////////////////////////////////////////////////////////////////////////////// end nav
/////////////////////////////////////////////////////////////////////////////////


			


///////////////////////////////////////////////////////// B A C K G R O U N D S

	$('.abo-bg').hide();
	$('.win-bg').hide();
	$('.desig-bg').hide();
	$('.vid-bg').hide();
	$('.tick-bg').hide();
	$('.home-bg').fadeIn();




$('.logodiv').click(function(){
		$('.home-bg').fadeOut(600);

	});


	$('.ticktab, .vidtab, .desigtab, .wintab, .abotab, .entrysprite').click(function(){
		$('.home-bg').fadeIn(600);
	});



$('.abotab').click(function(){
		$('.abo-bg').fadeIn(600);
	});
	$('.ticktab, .vidtab, .desigtab, .wintab, .logodiv, .button').click(function(){
		$('.abo-bg').fadeOut(600);
	});




	
$('.wintab').click(function(){
		$('.win-bg').fadeIn(600);

	});
	$('.ticktab, .vidtab, .desigtab, .abotab, .logodiv, .button').click(function(){
		
		$('.win-bg').fadeOut(600);
			
		
	});





$('.desigtab').click(function(){
		$('.desig-bg').fadeIn(600);
	});
	$('.ticktab, .vidtab, .wintab, .abotab, .logodiv, .button').click(function(){
		$('.desig-bg').fadeOut(600);
	});

$('.vidtab').click(function(){
		$('.vid-bg').fadeIn(600);
	});
	$('.ticktab, .desigtab, .wintab, .abotab, .logodiv, .button').click(function(){
		$('.vid-bg').fadeOut(600);
	});


$('.ticktab').click(function(){
		$('.tick-bg').fadeIn(600);
	});
	$('.vidtab, .desigtab, .wintab, .abotab, .logodiv, .button').click(function(){
		$('.tick-bg').fadeOut(600);
	});


	$('.tab, .logodiv').click(function(){
		  $('footer').hide();
		  $('.davideo').hide();
		  $('.vid').animate({
			opacity: 1
			}, 300 );
		
		  $('.vid-bg').animate({
			opacity: 1
			}, 300 );

		  $('.content').css("z-index","10");
		  $('footer').css({"z-index":"10","visibility":"visible"});
		  // try hidding the footer for two seconds to bring it back up	
		

		  $('#winners, #videos, #about, #designers, #tickets').hide();

		$('.years').animate({
		opacity: 1
		}, 300 );
		
		$('.win-bg').animate({
		opacity: 1
		}, 300
		);


	});

	$main.on("click", ".button", function(){
		  $('footer').hide();
		  $('.content').css("z-index","10");
		  $('footer').css("z-index","10");
		  // try hidding the footer for two seconds to bring it back up		  
		  $('footer').delay('1000').show();




	});


//////////////////////////////  end Backgrounds


//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?
//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//?//? H  O  M  E




bgLoop();

quoteLoop();

function bgLoop(){

$('.home-bg2').show();

	setTimeout(function(){

		$('.home-bg2').fadeOut()
		$('.home-bg3').fadeIn('slow')
	},10000);

	setTimeout(function(){

		$('.home-bg3').fadeOut()
		$('.home-bg4').fadeIn('slow')
	},20000);

	setTimeout(function(){

		$('.home-bg4').fadeOut()
		$('.home-bg5 ').fadeIn('slow')
	},30000)

	setTimeout(function(){

		$('.home-bg5').fadeOut()
		$('.home-bg6 ').fadeIn('slow')
	},40000);

	setTimeout(function(){

		$('.home-bg6').fadeOut()
		$('.home-bg7 ').fadeIn('slow')
	},50000);

	setTimeout(function(){

		$('.home-bg7').fadeOut()
		$('.home-bg8 ').fadeIn('slow')
	},60000);

	setTimeout(function(){

		$('.home-bg2').fadeIn('slow', function(){
			$('.home-bg3, .home-bg4, .home-bg5, .home-bg6, .home-bg7').show()
		})

		bgLoop()

	},70000);

}




function quoteLoop(){


$('.quote2, .quote3, .quote4').hide();

	setTimeout(function(){

		$('.quote1').fadeOut();
		$('.quote2').fadeIn('slow');
		
	},6000);

	setTimeout(function(){
		$('.quote1').fadeOut();
		$('.quote2').fadeOut();
		$('.quote3').fadeIn('slow');
	},24000);

	setTimeout(function(){

		$('.quote3').fadeOut();
		$('.quote4').fadeIn('slow');
	},47000);

	setTimeout(function(){

		$('.quote1').fadeIn('slow');
	
			$('.quote4').fadeOut();

		quoteLoop();

	},63000);

}




////////////////////////////////////////////////////////////////////////////////////////////////////  W I N N E R S
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function winFunctionality(){




	$('.gallery1, .gallery2, .gallery3, .gallery4, .gallery5').hide();

	$('.closevid').css("opacity","0");



	// Asign "davideo" the value of whatever thumbnail was cliked

	var galNumber = 0;
	var galleryName = 0;

	$('.2008').click(function(){          // Why do I need to clik twice!
		galNumber = 1;
		galleryName = $('.gallery1');
		setNumero();	
		ifGal();
		
	});

	$('.2009').click(function(){
		galNumber = 2;	
		galleryName = $('.gallery2');
		setNumero();
		ifGal();
		
	});

	$('.2010').click(function(){
		galNumber = 3;	
		galleryName = $('.gallery3');
		setNumero();
		ifGal();
		
	});

	$('.2011').click(function(){
		galNumber = 4;	
		galleryName = $('.gallery4');
		setNumero();
		ifGal();
		
	});

	$('.2012').click(function(){
		galNumber = 5;	
		galleryName = $('.gallery5');
		setNumero();
		ifGal();
		
	});





	// Click on whatever Vid to reveal it (function)

	function setNumero(){


		$('.years').animate({
		opacity: 0
		}, 700 );
		
		$('.win-bg').animate({
		opacity: 0.2
		}, 700, function(){
			$('.gallery').fadeIn('fast', function(){




				$('.gallery'+ galNumber).show();

			
				$('footer').css("visibility","hidden");
			});
		});

	

}	




		function ifGal(){

				var $img = galleryName.find('img');
				var currentIndex = 0;
				var numImages = $img.length-2;

					$('.cap').click(function(){
						$(this).css("opacity","0");
					})


					$('.cap').hide();



					//////////////////////// THUMBS



					$('a#cs-button-winners2008-1, a#cs-button-winners2009-1, a#cs-button-winners2010-1, a#cs-button-winners2011-1, a#cs-button-winners2012-1').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap1').show();
						currentIndex = 0;
					})

					$('a#cs-button-winners2008-2, a#cs-button-winners2009-2, a#cs-button-winners2010-2, a#cs-button-winners2011-2, a#cs-button-winners2012-2').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap2').show();
						currentIndex = 1;
					})

					$('a#cs-button-winners2008-3, a#cs-button-winners2009-3, a#cs-button-winners2010-3, a#cs-button-winners2011-3, a#cs-button-winners2012-3').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap3').show();
						currentIndex = 2;
					})

					$('a#cs-button-winners2008-4, a#cs-button-winners2009-4, a#cs-button-winners2010-4, a#cs-button-winners2011-4, a#cs-button-winners2012-4').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap4').show();
						currentIndex = 3;
					})

					$('a#cs-button-winners2008-5, a#cs-button-winners2009-5, a#cs-button-winners2010-5, a#cs-button-winners2011-5, a#cs-button-winners2012-5').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap5').show();
						currentIndex = 4;
					})

					$('a#cs-button-winners2008-6, a#cs-button-winners2009-6, a#cs-button-winners2010-6, a#cs-button-winners2011-6, a#cs-button-winners2012-6').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap6').show();
						currentIndex = 5;
					})


					$('a#cs-button-winners2008-7, a#cs-button-winners2009-7, a#cs-button-winners2010-7, a#cs-button-winners2011-7, a#cs-button-winners2012-7').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap7').show();
						currentIndex = 6;
					})

					$('a#cs-button-winners2008-8, a#cs-button-winners2009-8, a#cs-button-winners2010-8, a#cs-button-winners2011-8, a#cs-button-winners2012-8').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap8').show();
						currentIndex = 7;
					})

					$('a#cs-button-winners2008-9, a#cs-button-winners2009-9, a#cs-button-winners2010-9, a#cs-button-winners2011-9, a#cs-button-winners2012-9').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap9').show();
						currentIndex = 8;
					})

					$('a#cs-button-winners2008-10, a#cs-button-winners2009-10, a#cs-button-winners2010-10, a#cs-button-winners2011-10, a#cs-button-winners2012-10').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap10').show();
						currentIndex = 9;
					})

					$('a#cs-button-winners2008-11, a#cs-button-winners2009-11, a#cs-button-winners2010-11, a#cs-button-winners2011-11, a#cs-button-winners2012-11').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap11').show();
						currentIndex = 10;
					})

					$('a#cs-button-winners2008-12, a#cs-button-winners2009-12, a#cs-button-winners2010-12, a#cs-button-winners2011-12, a#cs-button-winners2012-12').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap12').show();
						currentIndex = 11;
					})

					$('a#cs-button-winners2008-13, a#cs-button-winners2009-13, a#cs-button-winners2010-13, a#cs-button-winners2011-13, a#cs-button-winners2012-13').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap13').show();
						currentIndex = 12;
					})

					$('a#cs-button-winners2008-14, a#cs-button-winners2009-14, a#cs-button-winners2010-14, a#cs-button-winners2011-14, a#cs-button-winners2012-14').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap14').show();
						currentIndex = 13;
					})

					$('a#cs-button-winners2008-15, a#cs-button-winners2009-15, a#cs-button-winners2010-15, a#cs-button-winners2011-15, a#cs-button-winners2012-15').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap15').show();
						currentIndex = 14;
					})

					$('a#cs-button-winners2008-16, a#cs-button-winners2009-16, a#cs-button-winners2010-16, a#cs-button-winners2011-16, a#cs-button-winners2012-16').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap16').show();
						currentIndex = 15;
					})

					$('a#cs-button-winners2008-17, a#cs-button-winners2009-17, a#cs-button-winners2010-17, a#cs-button-winners2011-17, a#cs-button-winners2012-17').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap17').show();
						currentIndex = 16;
					})

					$('a#cs-button-winners2008-18, a#cs-button-winners2009-18, a#cs-button-winners2010-18, a#cs-button-winners2011-18, a#cs-button-winners2012-18').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap18').show();
						currentIndex = 17;
					})

					$('a#cs-button-winners2008-19, a#cs-button-winners2009-19, a#cs-button-winners2010-19, a#cs-button-winners2011-19, a#cs-button-winners2012-19').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap19').show();
						currentIndex = 18;
					})

					$('a#cs-button-winners2008-2021, a#cs-button-winners2009-2021, a#cs-button-winners2010-2021, a#cs-button-winners2011-2021, a#cs-button-winners2012-2021').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap20').show();
						currentIndex = 19;
					})

					$('a#cs-button-winners2008-21, a#cs-button-winners2009-21, a#cs-button-winners2010-21, a#cs-button-winners2011-21, a#cs-button-winners2012-21').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap21').show();
						currentIndex = 20;
					})

					$('a#cs-button-winners2008-22, a#cs-button-winners2009-22, a#cs-button-winners2010-22, a#cs-button-winners2011-22, a#cs-button-winners2012-22').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap22').show();
						currentIndex = 21;
					})

					$('a#cs-button-winners2008-23, a#cs-button-winners2009-23, a#cs-button-winners2010-23, a#cs-button-winners2011-23, a#cs-button-winners2012-23').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap23').show();
						currentIndex = 22;
					})

					$('a#cs-button-winners2008-24, a#cs-button-winners2009-24, a#cs-button-winners2010-24, a#cs-button-winners2011-24, a#cs-button-winners2012-24').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap24').show();
						currentIndex = 23;
					})

					$('a#cs-button-winners2008-25, a#cs-button-winners2009-25, a#cs-button-winners2010-25, a#cs-button-winners2011-25, a#cs-button-winners2012-25').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap25').show();
						currentIndex = 24;
					})

					$('a#cs-button-winners2008-26, a#cs-button-winners2009-26, a#cs-button-winners2010-26, a#cs-button-winners2011-26, a#cs-button-winners2012-26').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap26').show();
						currentIndex = 25;
					})

					$('a#cs-button-winners2008-27, a#cs-button-winners2009-27, a#cs-button-winners2010-27, a#cs-button-winners2011-27, a#cs-button-winners2012-27').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap27').show();
						currentIndex = 26;
					})

					$('a#cs-button-winners2008-28, a#cs-button-winners2009-28, a#cs-button-winners2010-28, a#cs-button-winners2011-28, a#cs-button-winners2012-28').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap28').show();
						currentIndex = 27;
					})

					$('a#cs-button-winners2008-29, a#cs-button-winners2009-29, a#cs-button-winners2010-29, a#cs-button-winners2011-29, a#cs-button-winners2012-29').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap29').show();
						currentIndex = 28;
					})

					$('a#cs-button-winners2008-30, a#cs-button-winners2009-30, a#cs-button-winners2010-30, a#cs-button-winners2011-30, a#cs-button-winners2012-30').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap30').show();
						currentIndex = 29;
					})

					$('a#cs-button-winners2008-31, a#cs-button-winners2009-31, a#cs-button-winners2010-31, a#cs-button-winners2011-31, a#cs-button-winners2012-31').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap31').show();
						currentIndex = 30;
					})

					$('a#cs-button-winners2008-32, a#cs-button-winners2009-32, a#cs-button-winners2010-32, a#cs-button-winners2011-32, a#cs-button-winners2012-32').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap32').show();
						currentIndex = 31;
					})

					$('a#cs-button-winners2008-33, a#cs-button-winners2009-33, a#cs-button-winners2010-33, a#cs-button-winners2011-33, a#cs-button-winners2012-33').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap33').show();
						currentIndex = 32;
					})

					$('a#cs-button-winners2008-34, a#cs-button-winners2009-34, a#cs-button-winners2010-34, a#cs-button-winners2011-34, a#cs-button-winners2012-34').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap34').show();
						currentIndex = 33;
					})

					$('a#cs-button-winners2008-35, a#cs-button-winners2009-35, a#cs-button-winners2010-35, a#cs-button-winners2011-35, a#cs-button-winners2012-35').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap35').show();
						currentIndex = 34;
					})

					$('a#cs-button-winners2008-36, a#cs-button-winners2009-36, a#cs-button-winners2010-36, a#cs-button-winners2011-36, a#cs-button-winners2012-36').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap36').show();
						currentIndex = 35;
					})

					$('a#cs-button-winners2008-37, a#cs-button-winners2009-37, a#cs-button-winners2010-37, a#cs-button-winners2011-37, a#cs-button-winners2012-37').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap37').show();
						currentIndex = 36;
					})

					$('a#cs-button-winners2008-38, a#cs-button-winners2009-38, a#cs-button-winners2010-38, a#cs-button-winners2011-38, a#cs-button-winners2012-38').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap38').show();
						currentIndex = 37;
					})

					$('a#cs-button-winners2008-39, a#cs-button-winners2009-39, a#cs-button-winners2010-39, a#cs-button-winners2011-39, a#cs-button-winners2012-39').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap39').show();
						currentIndex = 38;
					})

					$('a#cs-button-winners2008-40, a#cs-button-winners2009-40, a#cs-button-winners2010-40, a#cs-button-winners2011-40, a#cs-button-winners2012-40').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap40').show();
						currentIndex = 39;
					})

					$('a#cs-button-winners2008-41, a#cs-button-winners2009-41, a#cs-button-winners2010-41, a#cs-button-winners2011-41, a#cs-button-winners2012-41').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap41').show();
						currentIndex = 40;
					})

					$('a#cs-button-winners2008-42, a#cs-button-winners2009-42, a#cs-button-winners2010-42, a#cs-button-winners2011-42, a#cs-button-winners2012-42').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap42').show();
						currentIndex = 41;
					})


					$('a#cs-button-winners2008-43, a#cs-button-winners2009-43, a#cs-button-winners2010-43, a#cs-button-winners2011-43, a#cs-button-winners2012-43').click(function(){
						$('.cap').css("opacity","1");

						$('.cap').hide();
						$('.cap43').show();
						currentIndex = 42;
					})







					//////////////////////// INITIAL





					if (currentIndex ===0){
						$('.cap1').show();
					}
				


					//////////////////////// PREV / NEXT




				$('.cs-next').click(function(){
					currentIndex++;
					if(currentIndex>numImages){
						currentIndex=0;
					}

					$('.cap').css("opacity","1");


					$('.cap').hide();

					if (currentIndex ===0){
						$('.cap1').show();
					}else if (currentIndex ===1){
						$('.cap2').show();
					}else if (currentIndex ===2){
						$('.cap3').show();
					}else if (currentIndex ===3){
						$('.cap4').show();
					}else if (currentIndex ===4){
						$('.cap5').show();
					}else if (currentIndex ===5){
						$('.cap6').show();
					}else if (currentIndex ===6){
						$('.cap7').show();
					}else if (currentIndex ===7){
						$('.cap8').show();
					}else if (currentIndex ===8){
						$('.cap9').show();
					}else if (currentIndex ===9){
						$('.cap10').show();
					}else if (currentIndex ===10){
						$('.cap11').show();
					}else if (currentIndex ===11){
						$('.cap12').show();
					}else if (currentIndex ===12){
						$('.cap13').show();
					}else if (currentIndex ===13){
						$('.cap14').show();
					}else if (currentIndex ===14){
						$('.cap15').show();
					}else if (currentIndex ===15){
						$('.cap16').show();
					}else if (currentIndex ===16){
						$('.cap17').show();
					}else if (currentIndex ===17){
						$('.cap18').show();
					}else if (currentIndex ===18){
						$('.cap19').show();
					}else if (currentIndex ===19){
						$('.cap20').show();
					}else if (currentIndex ===20){
						$('.cap21').show();
					}else if (currentIndex ===21){
						$('.cap22').show();
					}else if (currentIndex ===22){
						$('.cap23').show();
					}else if (currentIndex ===23){
						$('.cap24').show();
					}else if (currentIndex ===24){
						$('.cap25').show();
					}else if (currentIndex ===25){
						$('.cap26').show();
					}else if (currentIndex ===26){
						$('.cap27').show();
					}else if (currentIndex ===27){
						$('.cap28').show();
					}else if (currentIndex ===28){
						$('.cap29').show();
					}else if (currentIndex ===29){
						$('.cap30').show();
					}else if (currentIndex ===30){
						$('.cap31').show();
					}else if (currentIndex ===31){
						$('.cap32').show();
					}else if (currentIndex ===32){
						$('.cap33').show();
					}else if (currentIndex ===33){
						$('.cap34').show();
					}else if (currentIndex ===34){
						$('.cap35').show();
					}else if (currentIndex ===35){
						$('.cap36').show();
					}else if (currentIndex ===36){
						$('.cap37').show();
					}else if (currentIndex ===37){
						$('.cap38').show();
					}else if (currentIndex ===38){
						$('.cap39').show();
					}else if (currentIndex ===39){
						$('.cap40').show();
					}else if (currentIndex ===40){
						$('.cap41').show();
					}else if (currentIndex ===41){
						$('.cap42').show();
					}else if (currentIndex ===42){
						$('.cap43').show();
					}

				
			

				});




				$('.cs-prev').click(function(){
					currentIndex--;
					if(currentIndex<0){
						currentIndex= numImages;
					}

					$('.cap').css("opacity","1");


					$('.cap').hide();


					if (currentIndex ===0){
						$('.cap1').show();
					}else if (currentIndex ===1){
						$('.cap2').show();
					}else if (currentIndex ===2){
						$('.cap3').show();
					}else if (currentIndex ===3){
						$('.cap4').show();
					}else if (currentIndex ===4){
						$('.cap5').show();
					}else if (currentIndex ===5){
						$('.cap6').show();
					}else if (currentIndex ===6){
						$('.cap7').show();
					}else if (currentIndex ===7){
						$('.cap8').show();
					}else if (currentIndex ===8){
						$('.cap9').show();
					}else if (currentIndex ===9){
						$('.cap10').show();
					}else if (currentIndex ===10){
						$('.cap11').show();
					}else if (currentIndex ===11){
						$('.cap12').show();
					}else if (currentIndex ===12){
						$('.cap13').show();
					}else if (currentIndex ===13){
						$('.cap14').show();
					}else if (currentIndex ===14){
						$('.cap15').show();
					}else if (currentIndex ===15){
						$('.cap16').show();
					}else if (currentIndex ===16){
						$('.cap17').show();
					}else if (currentIndex ===17){
						$('.cap18').show();
					}else if (currentIndex ===18){
						$('.cap19').show();
					}else if (currentIndex ===19){
						$('.cap20').show();
					}else if (currentIndex ===20){
						$('.cap21').show();
					}else if (currentIndex ===21){
						$('.cap22').show();
					}else if (currentIndex ===22){
						$('.cap23').show();
					}else if (currentIndex ===23){
						$('.cap24').show();
					}else if (currentIndex ===24){
						$('.cap25').show();
					}else if (currentIndex ===25){
						$('.cap26').show();
					}else if (currentIndex ===26){
						$('.cap27').show();
					}else if (currentIndex ===27){
						$('.cap28').show();
					}else if (currentIndex ===28){
						$('.cap29').show();
					}else if (currentIndex ===29){
						$('.cap30').show();
					}else if (currentIndex ===30){
						$('.cap31').show();
					}else if (currentIndex ===31){
						$('.cap32').show();
					}else if (currentIndex ===32){
						$('.cap33').show();
					}else if (currentIndex ===33){
						$('.cap34').show();
					}else if (currentIndex ===34){
						$('.cap35').show();
					}else if (currentIndex ===35){
						$('.cap36').show();
					}else if (currentIndex ===36){
						$('.cap37').show();
					}else if (currentIndex ===37){
						$('.cap38').show();
					}else if (currentIndex ===38){
						$('.cap39').show();
					}else if (currentIndex ===39){
						$('.cap40').show();
					}else if (currentIndex ===40){
						$('.cap41').show();
					}else if (currentIndex ===41){
						$('.cap42').show();
					}else if (currentIndex ===42){
						$('.cap43').show();
					}


				
				});
				



			}





	// CloseVid, go back to Videos

	$('.closegal').click(function(){
		$('.gallery1, .gallery2, .gallery3, .gallery4, .gallery5').hide();     // Hide Current and all vids
		$('footer').css("visibility","visible");


		$('.years').animate({
		opacity: 1
		}, 700 );
		
		$('.win-bg').animate({
		opacity: 1
		}, 700
		);






	});

}


$(document).on('mouseover', '.2008, .2009, .2010, .2011, .2012', function() {        // Can't manage to .animate

		$(this).stop().css({"font-size":"1.3em", "line-height":"10%"});
	});


$(document).on('mouseout', '.2008, .2009, .2010, .2011, .2012', function() {
		$(this).stop().css({"font-size":"1em", "line-height":"50%"});
	});



//////////////////////////////////////////////////////////////////////////////////////	D  E  S  I  G  N  E  R  S
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Section 1

	$(document).on('mouseover', '.dsection1', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg1').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection2, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7').css("width","11.8%");

    	  	    $(".desiginfo1").stop().delay("300").stop().slideToggle('fast');

	});

//Section 2

	$(document).on('mouseover', '.dsection2', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg2').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7').css("width","11.8%");

    			$(".desiginfo2").stop().delay("300").stop().slideToggle('fast');
	});

//Section 3

	$(document).on('mouseover', '.dsection3', function() {
    	$(this).css("width","27.4%");
        $('.desigimg3').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection2, .dsection4, .dsection5, .dsection6, .dsection7').css("width","11.8%");

    	    	$(".desiginfo3").stop().delay("300").stop().slideToggle('fast');
	});

//Section 4

	$(document).on('mouseover', '.dsection4', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg4').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection2, .dsection3, .dsection5, .dsection6, .dsection7').css("width","11.8%");

    	    	$(".desiginfo4").stop().delay("300").stop().slideToggle('fast');
	});

//Section 5

	$(document).on('mouseover', '.dsection5', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg5').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection2, .dsection3, .dsection4, .dsection6, .dsection7').css("width","11.8%");

    	    	$(".desiginfo5").stop().delay("300").stop().slideToggle('fast');
	});

//Section 6

	$(document).on('mouseover', '.dsection6', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg6').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection2, .dsection3, .dsection4, .dsection5, .dsection7').css("width","11.8%");

    	    	$(".desiginfo6").stop().delay("300").stop().slideToggle('fast');
	});

//Section 7

	$(document).on('mouseover', '.dsection7', function() {
    	$(this).css("width","27.4%");
    	$('.desigimg7').css({"width":"90%", "margin-top":"4%"});
    	$('.dsection1, .dsection2, .dsection3, .dsection4, .dsection5, .dsection6').css("width","11.8%");

    	    	$(".desiginfo7").stop().delay("300").stop().slideToggle('fast');
	});




	$(document).on('mouseout', '.dsection1, .dsection2, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7', function() {
    	$('.dsection1, .dsection2, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7').css("width","14.08%");
    	$('.desigimg1, .desigimg2, .desigimg3, .desigimg4, .desigimg5, .desigimg6, .desigimg7').css({"width":"180%", "margin-top":"0"});

    	
	});



	$(document).on('mouseout', '.dsection1', function() {

    	$(".desiginfo1").stop().slideToggle('fast', function(){
    		$(".desiginfo1").css("visibility","visible"); 
    	});
	});
		$(document).on('mouseout', '.dsection2', function() {
    	
    	$(".desiginfo2").stop().slideToggle('fast', function(){
    		$(".desiginfo2").css("visibility","visible"); 
    	});
	});
			$(document).on('mouseout', '.dsection3', function() {
    	
    	$(".desiginfo3").stop().slideToggle('fast', function(){
    		$(".desiginfo3").css("visibility","visible"); 
    	});
	});
				$(document).on('mouseout', '.dsection4', function() {
    	
    	$(".desiginfo4").stop().slideToggle('fast', function(){
    		$(".desiginfo4").css("visibility","visible"); 
    	});
	});
					$(document).on('mouseout', '.dsection5', function() {
    	
    	$(".desiginfo5").stop().slideToggle('fast', function(){
    		$(".desiginfo5").css("visibility","visible"); 
    	});
	});
						$(document).on('mouseout', '.dsection6', function() {
    	
    	$(".desiginfo6").stop().slideToggle('fast', function(){
    		$(".desiginfo6").css("visibility","visible"); 
    	});
	});
							$(document).on('mouseout', '.dsection7', function() {
    	
    	$(".desiginfo7").stop().slideToggle('fast', function(){
    		$(".desiginfo7").css("visibility","visible"); 
    	});
	});



	$(document).on('click', '.desiginfo1', function() {
    	
    $(this).css("visibility","hidden");
	});
		$(document).on('click', '.desiginfo2', function() {
    	
    $(this).css("visibility","hidden");
	});
			$(document).on('click', '.desiginfo3', function() {
    	
    $(this).css("visibility","hidden");
	});
				$(document).on('click', '.desiginfo4', function() {
    	
    $(this).css("visibility","hidden");
	});
					$(document).on('click', '.desiginfo5', function() {
    	
    $(this).css("visibility","hidden");
	});
						$(document).on('click', '.desiginfo6', function() {
    	
    $(this).css("visibility","hidden");
	});
							$(document).on('click', '.desiginfo7', function() {
    	
    $(this).css("visibility","hidden");
	});

							
///////////////////////////////////////////////////////////////////////////////////////////////  O N .C L I C K >>>>>>>>   For Ipads and Phones


/*
//Section 1

	$(document).on('click', '.dsection1', function() {
		if($(this).hasClass('dsection'))
    {        
        $(this).removeClass('dsection');     
        $(this).addClass("dsectionchosen");

        $('.desigimg1').removeClass('desigimg');
        $('.desigimg1').addClass('desigimg99');

        $('.dsection2, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7').addClass("dsectionnotchosen");
           

    }else if ($(this).hasClass('dsectionchosen')) 

    {
        $(this).removeClass('dsectionchosen');     
        $(this).addClass("dsection");

        $('.desigimg1').addClass('desigimg');
        $('.desigimg1').removeClass('desigimg99');


		$('.dsection2, .dsection3, .dsection4, .dsection5, .dsection6, .dsection7').removeClass("dsectionnotchosen");
  
    }

	
	});


// Still to do: sections 2,3,4,5,6,7 plus desiginfo slide


//stop it when viewing from a laptop or desktop
////////////////////////////////////////////// p

*/


	$main.on("click", ".enter", function(){

		var pageId = $(this).attr("href");                                   
		loadContent(pageId);


	});
	$main.on("click", ".why", function(){

		var pageId = $(this).attr("href");
		loadContent(pageId);

	

	});
	$main.on("click", ".started", function(){
		
		var pageId = $(this).attr("href");
		loadContent(pageId);

		
 
	
	});
	$main.on("click", ".process", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);

		
  
		
	});
	$main.on("click", ".precios", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);

		
  
		
	});
	$main.on("click", ".tips", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);

		
  
		
	});
	$main.on("click", ".garment", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);

	

		
	});




//////////////////////////////////////////////////////////////////////////////////////	V   I   D   E   O   S
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	


$(document).on('mouseover', '.vid1', function() {       

		$('.vidname1').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid1', function() {       


		$('.vidname1').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/

$(document).on('mouseover', '.vid2', function() {       

		$('.vidname2').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid2', function() {       


		$('.vidname2').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/

$(document).on('mouseover', '.vid3', function() {       

		$('.vidname3').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid3', function() {       


		$('.vidname3').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/

$(document).on('mouseover', '.vid4', function() {       

		$('.vidname4').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid4', function() {       


		$('.vidname4').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/

$(document).on('mouseover', '.vid5', function() {       

		$('.vidname5').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid5', function() {       


		$('.vidname5').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/

$(document).on('mouseover', '.vid6', function() {       

		$('.vidname6').stop().animate({
		bottom: 15
		}, 400 );

	});


$(document).on('mouseout', '.vid6', function() {       


		$('.vidname6').stop().animate({
		bottom: -40
		}, 400 );

	});

/*************************************************/



// //////    ///////////////          ////////////////////               ///////////////   (repeat with click for ipads..etc)



	function videoFunctionality(){



	$('.davideo').hide();
	$('.daloadingvideo').hide();
	$('.davideo1, .davideo2, .davideo3, .davideo4, .davideo5, .davideo6').css("display","none");

	$('.closevid').css("opacity","0");



	// Asign "davideo" the value of whatever thumbnail was cliked

	var vidNumber = 0;

	$('.vid1').click(function(){          // Why do I need to clik twice!
		vidNumber = 1;

		setNumber();	
	});

	$('.vid2').click(function(){
		vidNumber = 2;	

		setNumber();
	});

	$('.vid3').click(function(){
		vidNumber = 3;	

		setNumber();
	});

	$('.vid4').click(function(){
		vidNumber = 4;	

		setNumber();
	});

	$('.vid5').click(function(){
		vidNumber = 5;	

		setNumber();
	});

	$('.vid6').click(function(){
		vidNumber = 6;	

		setNumber();
	});




	// Click on whatever Vid to reveal it (function)

	function setNumber(){

	


		$('.daloadingvideo').fadeIn('fast');

		$('.vid').animate({
		opacity: 0
		}, 700 );
		
		$('.vid-bg').animate({
		opacity: 0.2
		}, 700, function(){
			$('.davideo').fadeIn('fast', function(){




				$('.davideo'+ vidNumber).css("display","block");
				$('.closevid').animate({
				opacity: 1
				}, 2700 );
				$('footer').css("visibility","hidden");
				$('.daloadingvideo').hide();
			});
		} );

	

}




	// CloseVid, go back to Videos

	$('.closevid').click(function(){
		$('.davideo, .davideo1, .davideo2, .davideo3, .davideo4, .davideo5, .davideo6').hide();     // Hide Current and all vids
		$('footer').css("visibility","visible");


		$('.vid').animate({
		opacity: 1
		}, 700 );
		
		$('.vid-bg').animate({
		opacity: 1
		}, 700
		);

	});

}



//////////////////////////////////////////////////////////////////////////////////////	T   I   C   K   E   T   S
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$main.on("click", ".travel", function(){

		var pageId = $(this).attr("href");                                    
		loadContent(pageId);
	

	});
	$main.on("click", ".vip", function(){

		var pageId = $(this).attr("href");
		loadContent(pageId);
  

	});

	$main.on("click", ".faq", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);
  
		
	});
	$main.on("click", ".book", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);
  
		
	});
	
	$main.on("click", ".register", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);
  
		
	});


	$main.on("click", ".contact", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);
  
		
	});

	$main.on("click", ".termsconditions", function(){
			   
		var pageId = $(this).attr("href");
		loadContent(pageId);
  
		
	});


});//end ready()


