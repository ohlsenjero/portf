

if ($.browser.msie  && parseInt($.browser.version, 10) === 9) {
  alert('You are using Internet Explorer 9. We are working to fix the rendering of the canvas-tag (and therefore the whole navigation). Until then, please try viewing this site using a modern browser such as: http://www.mozilla.org, or Google Chrome: https://www.google.com'); 
}



var scroll$peed = 500;
var webClick = $('.webClick');
var notwebClick = $('.notwebClick');
var contactClick = $('.contactClick');
var homeClick = $('.homeClick');
var pages = $(".page");
var currPage = ".home";
var homies;
var pyramid = $('.pyramid');
// var beyondnback = $('.beyondandback');
var beyondCliked=false;
var web;
var notweb;
var contact;
var firstClick;
var x;
var y;
var yyxx;
var w = window.innerWidth;
var introDone;
var handShake = false;
var rewinding;
var rewindReady=false;
var outClicked=false;
var fin=false;
var lastbg2=false;
var lastbg3=false;
var lastbg4=false;
var lastbg5=false;
var lastbg6=false;


$('.lastbg').hide();
$('.lastbg2').hide();
  //set variables references for all the various form elements;
  var $contactForm = $(".contact-form"),
  $name = $("#name"),
  $email = $("#email"),
  $subject = $("#subject"),
  $message = $("#message"),
  $spam = $("#spam"),
  $formFields = $("input:text, textarea"),
  $status = $("#status"),
  $resetBtn = $("input:reset");
  
  //initialise
  $status.hide();
  
  /*submit handler for contact form*/
  $contactForm.submit(function(e) { 
      
    //prevent default form submit action
    e.preventDefault();
    
    //clear all error borders from form fields
    $formFields.removeClass("error-focus");
    
    //check required fields are not empty and that the email address is valid

    if($message.val()==""){
      
        $('.mesimg').css('opacity',1);

    }else if($subject.val()==""){
      
        $('.subimg').css('opacity',1);
      
    }else if($name.val()==""){
      
        $('.namimg').css('opacity',1);

    }else if($email.val()==""){
      
        $('.emaimg').css('opacity',1);
      
    }else if(!isValidEmail($email.val())){
      
        $('.emaimg').css('opacity',1);
      
    }else if(!$spam.val()==""){
      
        setStatusMessage("Spam Attack!!");

    }else{
      
        //serialize all the form field values as a string
        var formData = $(this).serialize();
        
        //alert(formData);
      
      //send serialized data string to the send mail php via POST method
      
      $.post("send-mail.php", formData, function(sent){
        
        if(sent=="error"){ 
         
           $('.mesimg').css('opacity',1);
           $('.subimg').css('opacity',1);
           $('.emaimg').css('opacity',1);
           $('.namimg').css('opacity',1);
           
          } else if(sent=="success"){
            
            clearInterval(floaterVal);

              homeClick.click();
              rewindReady=true;
              

              var scalerVal = setInterval( function(){

                $('#canvas').animate({
                  scale: 1.3
                }, 500 );
                $('#canvas').animate({
                  scale: 1
                }, 500 );

                }, 100);
            
            //clear form fields
            $formFields.val("");
            
          }//end if else
       
      },"html");
      

      
    }//end else

   });//end submit


$(window).resize(function(){
var w = window.innerWidth;
  if(w<666){
    $('.footerpcont').hide();
  }else if(w>600){
    $('.footerpcont').show();
  }
});

  
  //click handler for reset button
  $resetBtn.click(function(){
      $status.slideUp("fast");
      $formFields.removeClass("error-focus");                           
  });
  
  //helper functions
  function setStatusMessage(message){
    $status.html(message).slideDown("fast");
  }
  
  $.fn.setFocus = function(){
    return this.focus().addClass("error-focus");
  }
  
  function isValidEmail(email) {
    var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return  emailRx.test(email);
  }



// $('.handshake').click(function(){  //  .final ?
//               homeClick.click();
//               rewindReady=true;
              


//               clearInterval(floaterVal);

//               var scalerVal = setInterval( function(){

//                 $('#canvas').animate({
//                   scale: 1.01
//                 }, 500 );
//                 $('#canvas').animate({
//                   scale: 1
//                 }, 500 );

//                 }, 100);
// });









// beyondnback.hide();
pyramid.hide();
// $('.beyondandback2').hide();

$('.footerp, .footerpvids, .footerpcont').hide();



$('#testDiv').slimscroll({
  size: '10px',
  distance: '1%'
});

// $('#testDiv2').slimscroll({
//   size: '10px',
//   distance: '0',
//   color: '#fff',
//   opacity : .2,        
//   railVisible : true,
//   railColor : 'purple',
//   railOpacity : .1,
// });




$('.playeroff, .pyramid').click(function(){
  $('.vidplayer, .vidplayer2, .vidplayer3, .vidplayer4, .vidplayer5, .vidplayer6, .vidplayer7').hide();
  
});


//Vids functionality
$('.vid8 img').click(function(){
  $('.vidplayer').show();
});

$('.vidreel img').click(function(){
  $('.vidplayer2').show();
});

$('.vid5 img').click(function(){
  $('.vidplayer3').show();
});

$('.vid2 img').click(function(){
  $('.vidplayer4').show();
});

$('.vid9 img').click(function(){
  $('.vidplayer5').show();
});

$('.vid3 img').click(function(){
  $('.vidplayer6').show();
});

$('.vid7 img').click(function(){
  $('.vidplayer7').show();
});

// $('section').niceScroll({cursoropacitymax:0.8,cursorwidth:8});





// $('.beyondandback').click(function(){
// 	$('.vidplayer, vidplayer2').fadeOut(1000);
//     $('.beyondandback2').show().css('opacity','0.2'); 
//     $('.beyondandback').hide(); 
     
//     $('.pyramid').fadeTo(300, 0);
//     $('.pyramid').hide();
//     $('.notwebpper').fadeOut(1000);
//  	$('.footerpvids').fadeOut(500);  

//     dibusAppear();

// }); 

// $('.beyondandback2').click(function(){
//   	$('.footerpvids').delay(250).fadeIn(500); 
// 	$('.beyondandback2').hide(); 
//     $('.beyondandback').show().css('opacity','0.1'); 
//     $('.dibuspper').hide();
//     $('.remotedibuspper').hide();
//     $('.notwebpper').fadeIn(600);
//     $('.pyramid').fadeTo(300, 1);
//     $('.pyramid').show();
// });





function dibusAppear(){
setTimeout( function(){
    $('.dibuspper').show();
    beyondCliked=true;
}, 1000);
}






////////  _/|     | \\\\\\    / |||  ////// //////  /////\ \\\\\\\
/////   _-_/| -  / |    || |   ||||  ||     ||      \\  //  \\    
//    -_ -/|  -   |     ||  | ||  |  ||      ///     \\//\\  \\\\\\\
//   - _-\ \-   \ |    ||  / ||   |  ||     ||        \\  \\       \\
//      -_ |||||//////// /  ///////  ||      \\\\\\\\\\\\  \\\\\\\\\\\



var floaterVal = setInterval( function(){

$('#canvas').animate({
  marginTop: 10.3+'%'
}, 500 );
$('#canvas').animate({
  marginTop: 10+'%'
}, 500 );

}, 1000);

var neonSiteFrame = setInterval( function(){

$('.sitesframe').animate({
  opacity: 0.4
}, 500 );
$('.sitesframe').animate({
  opacity:0.7
}, 900 );

}, 900);

var nexVal = setInterval( function(){

$('.next-btn').animate({
  opacity:1
}, 380 );
$('.next-btn').animate({
  opacity:0.7
}, 920 );

}, 500);

var preVal = setInterval( function(){

$('.prev-btn').animate({
  opacity:1
}, 400 );
$('.prev-btn').animate({
  opacity:0.7
}, 900 );

}, 490);


setTimeout( function(){
var neonFrame2 = setInterval( function(){

$('.neonframe2').animate({
  opacity:1
}, 300 );
$('.neonframe2').animate({
  opacity:0.4
}, 600 );

}, 200);
}, 500);

setTimeout( function(){
var neonFrame3 = setInterval( function(){

$('.neonframe3').animate({
  opacity:1
}, 300 );
$('.neonframe3').animate({
  opacity:0.4
}, 700 );

}, 300);
}, 490);

setTimeout( function(){
var neonFrame5 = setInterval( function(){

$('.neonframe5').animate({
  opacity:1
}, 280 );
$('.neonframe5').animate({
  opacity:0.4
}, 610 );

}, 270);
}, 300);


var neonFrame7 = setInterval( function(){

$('.neonframe7').animate({
  opacity:1
}, 280 );
$('.neonframe7').animate({
  opacity:0.4
}, 600 );

}, 315);


setTimeout( function(){
var neonFrame8 = setInterval( function(){

$('.neonframe8').animate({
  opacity:1
}, 160 );
$('.neonframe8').animate({
  opacity:0.4
}, 580 );

}, 350);
}, 260);


var neonFrame9 = setInterval( function(){

$('.neonframe9').animate({
  opacity:1
}, 280 );
$('.neonframe9').animate({
  opacity:0.4
}, 570 );

}, 305);



var neonFrameReel = setInterval( function(){

$('.neonframereel').animate({
  opacity:1
}, 400 );
$('.neonframereel').animate({
  opacity:0.4
}, 620 );

}, 300);



setTimeout( function(){
var messageVal = setInterval( function(){

$('.mesimg').animate({
  opacity: 0.4
}, 637 );
$('.mesimg').animate({
  opacity: 0.2
}, 500 );

}, 800);
}, 1000);

var subjectVal = setInterval( function(){

$('.subimg').animate({
  opacity: 0.4
}, 480 );
$('.subimg').animate({
  opacity: 0.2
}, 600 );

}, 400);


var nameVal = setInterval( function(){

$('.namimg').animate({
  opacity: 0.4
}, 450 );
$('.namimg').animate({
  opacity: 0.2
}, 420 );

}, 600);


setTimeout( function(){
var emailVal = setInterval( function(){

$('.emaimg').animate({
  opacity: 0.4
}, 399 );
$('.emaimg').animate({
  opacity: 0.2
}, 555 );

}, 444);
}, 430);


var sendoVal = setInterval( function(){

$('.sendoimg').animate({
  opacity: 0.4
}, 600 );
$('.sendoimg').animate({
  opacity: 0.2
}, 455 );

}, 444);


var playeroffScalerVal = setInterval( function(){

$('.pfdown').animate({
  opacity: 1
}, 800 );
$('.pfdown').animate({
  opacity: 0.5
}, 700 );

}, 200);



var fotFloaterVal = setInterval( function(){

$('.fot img').animate({
  marginTop: -3.3+'%'
}, 570 );
$('.fot img').animate({
  marginTop: -3+'%'
}, 400 );

}, 200);



////////////////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////


sizing();


function sizing(){
  setSiteSize();
    
  $(window).resize(function(){
    setSiteSize();
});

function setSiteSize(){
      
  pages.width($(window).width());
  pages.height($(window).height());
        
  var scrollEndSide = $(currPage).offset().left;
  var scrollEndTop = $(currPage).offset().top;
  
  $("html, body").scrollLeft(scrollEndSide);
  $("html, body").scrollTop(scrollEndTop);               
};
}

function sAcrolling(){
  //scroll to page top and left
  var scrollEnd =$(currPage).offset().top;
  var scrollEndSide = $(currPage).offset().left;
    
  $("html, body").stop().animate({scrollTop: scrollEnd, scrollLeft:scrollEndSide},scroll$peed);

        
  setTimeout( function(){
    $(currPage).css('overflowY', 'hidden');
  }, scroll$peed);


  if(currPage===".home"){
    homies=true;
    pyramid.hide(); 
    // beyondnback.hide();
  }else {  
    pyramid.delay(500).fadeTo(1500, 1);
    // beyondnback.delay(500).fadeTo(1000, 0.1);
  }

} 



$(".vid2").stop().animate({ skewY: '-20deg', scaleY:'0.4', scaleX:'0.4'}, 1);
$(".vid3").stop().animate({ skewY: '10deg', scaleY:'0.3', scaleX:'0.3'}, 1);
$(".vid5").animate({ skewY: '20deg', scaleY:'0.0001', scaleX:'0.0001'}, 1);
$(".vid8").animate({ skewY: '40deg', scaleY:'0.1', scaleX:'0.1'}, 1);
$(".vid9").animate({ skewY: '-20deg', scaleY:'0.07', scaleX:'0.07'}, 1);
$(".vid7").animate({ skewY: '30deg', scaleY:'0.01', scaleX:'0.01'}, 1);

$(".vidreel").stop().animate({ skewY: '30deg', scaleY:'0.0006', scaleX:'0.0006'}, 1);


$(".gallery").stop().animate({ skewY: '-70deg', scaleY:'0.0001', scaleX:'0.0001'}, 1);


$(".messageo").animate({width:67+'%', skewY: '30deg', skewX: '-45deg', scaleY:'0.07', scaleX:'0.07'}, 1);
$(".subjecto").animate({ skewY: '20deg', scaleY:'0.4', scaleX:'0.4'}, 1);
$(".namo").animate({ skewX: '-35deg', scaleY:'0.04', scaleX:'0.04'}, 1);
$(".emailo").animate({ skewY: '-75deg', scaleY:'0.004', scaleX:'0.004'}, 1);
$(".handshake").animate({width:5+'%'}, 1);
$(".resegna").animate({skewX: '-15deg', scaleY:'0.3', scaleX:'0.3'}, 1);
$(".fot").animate({skewX: '-35deg', scaleY:'0.3', scaleX:'0.3'}, 1);


$(".form textarea[id=message]").animate({skewX: '17deg'}, 1);//if else around it according to screen size


    //////////////////////////////////////////////////  
   ///     N A V    F U N C T I O N A L I T Y     ///
  //////////////////////////////////////////////////



// $('section').niceScroll({cursoropacitymax:0.8,cursorwidth:8});


$(homeClick).click(function(e){
  e.preventDefault();
 
  $('body').css('cursor','default');  
  pyramid.hide();
  // beyondnback.hide();
  setTimeout( function(){
  $('.notwebpper').hide();
  $('.webpper').hide();
  $('.dibuspper').hide();
  }, scroll$peed);
  $('.footerp, .footerpvids, .footerpcont').hide();
               
  currPage = $(this).attr("href");

  //scroll to page top and left
  sAcrolling();

  if(notweb){
    $(".vid2").stop().animate({ skewY: '-20deg', scaleY:'0.4', scaleX:'0.4'}, scroll$peed);
    $(".vid3").stop().animate({ skewY: '10deg', scaleY:'0.3', scaleX:'0.3'}, scroll$peed);
    $(".vid5").animate({ skewY: '20deg', scaleY:'0.0001', scaleX:'0.0001'}, scroll$peed);
    $(".vid8").animate({ skewY: '40deg', scaleY:'0.1', scaleX:'0.1'}, scroll$peed);
    $(".vid9").animate({ skewY: '-20deg', scaleY:'0.07', scaleX:'0.07'}, scroll$peed);
    $(".vid7").animate({ skewY: '30deg', scaleY:'0.01', scaleX:'0.01'}, scroll$peed);
    $(".vidreel").stop().animate({ skewY: '30deg', scaleY:'0.0006', scaleX:'0.0006'}, scroll$peed);
  }
  if(web){
     $(".gallery").stop().animate({ skewY: '-70deg', scaleY:'0.0001', scaleX:'0.0001'}, scroll$peed);
  }
  if(contact){
    $(".messageo").animate({width:67+'%', skewY: '30deg', skewX: '-45deg', scaleY:'0.07', scaleX:'0.07'}, scroll$peed);
    $(".subjecto").animate({ skewY: '20deg', scaleY:'0.1', scaleX:'0.1'}, scroll$peed);
    $(".namo").animate({ skewX: '-35deg', scaleY:'0.04', scaleX:'0.04'}, scroll$peed);
    $(".emailo").animate({ skewY: '-75deg', scaleY:'0.004', scaleX:'0.004'}, scroll$peed);
    $(".handshake").animate({width:5+'%'}, scroll$peed);
    $(".resegna").animate({skewX: '-15deg', scaleY:'0.3', scaleX:'0.3'}, scroll$peed);
    $(".fot").animate({skewX: '-35deg', scaleY:'0.3', scaleX:'0.3'}, scroll$peed);
  }

});

 

// $('.beyondandback').click(function(){
//   $('.slimScrollDiv').css('marginLeft','0');
// });
$('.homeClick').click(function(){
  $('.slimScrollDiv').css('marginLeft','5%');  
});



$(webClick).click(function(e){
  e.preventDefault();

  $('body').css('cursor','default');  
  $('.webpper').show();  
  $('.footerp').delay(150).fadeIn(1500); 
               
  currPage = $(this).attr("href");

  //scroll to page top and left
  sAcrolling();

$(".gallery").stop().animate({ skewY: '70deg', scaleY:'1', scaleX:'1'}, scroll$peed);


});
   

$(notwebClick).click(function(e){
  e.preventDefault();

  $('body').css('cursor','default');   
  $('.notwebpper').show();
  $('.footerpvids').delay(250).fadeIn(1500); 


               
  currPage = $(this).attr("href");

  //scroll to page top and left
  sAcrolling();

$(".vid2").stop().delay(270).animate({ skewY: '20deg', scaleY:'1', scaleX:'1'}, scroll$peed);
$(".vid3").stop().delay(220).animate({ skewY: '-10deg', scaleY:'1', scaleX:'1'}, scroll$peed);
$(".vid5").stop().delay(90).animate({ skewY: '-20deg', scaleY:'1', scaleX:'1'}, scroll$peed);
$(".vid8").delay(130).animate({ skewY: '-40deg', scaleY:'1', scaleX:'1'}, scroll$peed);
$(".vid9").animate({ skewY: '20deg', scaleY:'1', scaleX:'1'}, scroll$peed);
$(".vid7").animate({ skewY: '-30deg', scaleY:'1', scaleX:'1'}, scroll$peed);

$(".vidreel").stop().delay(110).animate({ skewY: '-30deg', scaleY:'1', scaleX:'1'}, scroll$peed);





});
   

$(contactClick).click(function(e){
  e.preventDefault();

  $('body').css('cursor','default'); 

  if(w>666){
  $('.footerpcont').fadeIn(1500); 
  } 

               
  currPage = $(this).attr("href");

  //scroll to page top and left
  sAcrolling();





  if(w>666){
  $(".messageo").delay(40).animate({width:100+'%', skewY: '-30deg', skewX: '35deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  $(".subjecto").delay(80).animate({ skewY: '-20deg', scaleY:'1', scaleX:'1'}, scroll$peed);    
  $(".namo").delay(133).animate({ skewX: '0deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  $(".emailo").delay(150).animate({ skewY: '75deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  }else if(w<666){
  $(".messageo").delay(40).animate({width:100+'%', skewY: '-30deg', skewX: '35deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  $(".subjecto").delay(80).animate({ skewY: '-20deg', scaleY:'1', scaleX:'1'}, scroll$peed);    
  $(".namo").delay(133).animate({ skewX: '0deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  $(".emailo").delay(150).animate({ skewY: '75deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  }

   if(w>666){
  $(".handshake").delay(140).animate({width:20+'%'}, scroll$peed);

  $(".resegna").delay(88).animate({skewX: '0deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  }else if(w<666&&w>380){
  $(".handshake").delay(140).animate({width:20+'%'}, scroll$peed);
  $(".resegna").delay(88).animate({skewX: '0deg', scaleY:'1', scaleX:'1'}, scroll$peed);
  }else if(w<380){
  $(".handshake").delay(140).animate({width:20+'%'}, scroll$peed);
  $(".resegna").delay(88).animate({scaleY:'1', scaleX:'1'}, scroll$peed);
  }
    $(".fot").delay(178).animate({skewX: '0deg', scaleY:'1', scaleX:'1'}, scroll$peed);

});



////////////////////////////////////////////////////
///   C A N V A S    C O O R D I N A T E S           
//                                      

// function writeMessage(canvas, message) {
//   var ctx = canvas.getContext( '2d' );
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.font = '18pt Calibri';
//   ctx.fillStyle = 'black';
//   ctx.fillText(message, 10, 25);
// }

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext( '2d' );


//if(w<DesktopScreenResolution){canvas.addEventListener('mouseDOWN', function(evt)}
canvas.addEventListener('mousemove', function(evt) {
var mousePos = getMousePos(canvas, evt);


// var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
// writeMessage(canvas, message);



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////
////   P Y R A M I D    K E Y    P O I N T S           
///   
//


if(!handShake&&introDone){
  if(mousePos.x<60||mousePos.x>260||mousePos.y>265||mousePos.y<95){
    yyxx=0;
    $('body').css('cursor','default');
  } else if (mousePos.x>145&&mousePos.x<175&&mousePos.y>125&&mousePos.y<225){
    yyxx=0;
    $('body').css('cursor','default');
  } else if(mousePos.x>85&&mousePos.x<145&&mousePos.y>180&&mousePos.y<225){
    yyxx=1;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>110&&mousePos.x<145&&mousePos.y>125&&mousePos.y<180){
    yyxx=2;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>175&&mousePos.x<235&&mousePos.y>180&&mousePos.y<225){
    yyxx=3;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>175&&mousePos.x<210&&mousePos.y>125&&mousePos.y<180){
    yyxx=4;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>110&&mousePos.x<210&&mousePos.y>225&&mousePos.y<245){
    yyxx=5;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>110&&mousePos.x<210&&mousePos.y>245&&mousePos.y<265){
    yyxx=6;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>60&&mousePos.x<110&&mousePos.y>225&&mousePos.y<265){
    yyxx=7;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>145&&mousePos.x<175&&mousePos.y>95&&mousePos.y<125){
    yyxx=8;
    $('body').css('cursor','pointer');
  } else if(mousePos.x>210&&mousePos.x<260&&mousePos.y>225&&mousePos.y<265){
    yyxx=9;
    $('body').css('cursor','pointer');
  }

} else if(handShake){
    if(mousePos.x<60||mousePos.x>260||mousePos.y>265||mousePos.y<95){
    yyxx=10;
    $('body').css('cursor','default');
  } else {
    
    $('body').css('cursor','pointer');
  }


}

}, false);



//////////////////////////////////////////////////////////////
                                                           //
   //    ///  // // ///  ///    //  ////// // ////// ///  // 
  ///   //// // // //// ////   ///   //   // ////// //// //
 ////  // //// // // //// //  ////  //   // ////// // ////  
///// //  /// // //  ///  // ///// //   // ////// //  ///


  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
  function(/* function */ callback, /* DOMElement */ element){
     window.setTimeout(callback, 1000 / 60);
  };
})();



/////////////////  D A S   P R I T E  ///////////////////
/////////////////////////////////////////////////////


canvas.width = 160;
canvas.height = 200;

var triangleMenu = new Image();
triangleMenu.src = "triangle2.png";


var spriteWidth  = 160,
    spriteHeight = 200,
    pixelsLeft   = 0,//(1 frame every 160px)
    pixelsTop    = 0,
    canvasPosX   = 0,
    canvasPosY   = 0;


triangleMenu.onload = function(){
  ctx.drawImage(triangleMenu,
  pixelsLeft,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  spriteWidth,
  spriteHeight);
};  






  /////////////////////////////////////////////
 //   P Y R A M I D   K E Y   F R A M E S 
//                                       

function pyramidNeutral(){
  pixelsLeft=6240;
}
function pyramidWebLower(){
  pixelsLeft=6400;
}
function pyramidWebHigher(){
  pixelsLeft=6560;
}
function pyramidNotWebLower(){
  pixelsLeft=6720;
}
function pyramidNotWebHigher(){
  pixelsLeft=6880;
}
function pyramidContactHigher(){
  pixelsLeft=7040;
}
function pyramidContactLower(){
  pixelsLeft=7200;
}
function pyramidTop(){
  pixelsLeft=7360;
}
function pyramidBottomLeft(){
  pixelsLeft=7520;
}
function pyramidBottomRight(){
  pixelsLeft=7680;
}
function pyramidGoesWeb(){
  pixelsLeft=7840;
}
function pyramidFromWeb(){
  pixelsLeft=9440;
}
function pyramidGoesNotWeb(){
  pixelsLeft=9600;
}
function pyramidFromNotWeb(){
  pixelsLeft=11200;
}
function pyramidGoesContact(){
  pixelsLeft=11360;
}
function pyramidFromContact(){
  pixelsLeft=12960;
}



////////////////////////////////////////////////////////////////////////
//////    J  Q U E R Y     ////////////////////////////////////
//////////////////////////////////////////////////////
///  T r i a n g l e  F l o w  ///////////////
//////////////////////////////////////
//////////////////////////////
//////////////////////
///////////////
/////////
/////
//



$(function(){



var firstClick = false; 
var intrOpacity;



$('.intros').click(function(){ 
  $(this).css('z-index',-1);  //clearInterval isn't working
  $(this).hide();
  clearInterval(intrOpacity);
  introDone=true;
  animate();

// function laexpo(){

// for(var i = 0; i<=24; i++){
// var e = i+1;
//   document.getElementById('cuadros').innerHTML += '<div class="dd'+e+' dd">'+'<img src="img/drw/'+i+'.jpg"  alt="" />';
//   document.getElementById('testDiv2').innerHTML += '</div>'+'<div class="drwng d'+e+'">'+'<img src="img/drw/'+i+'.jpg"  alt="" />'+'</div>';
// //console.log(i);
// }


// if(w>1023){
//   $('.drwng').css('opacity',0);
// } else if(w<1023) {
//   $('.drwng').css('opacity',0.1);
// }

// $('.dibuspper').hide();
// $('.remotedibuspper').hide();



// $('.remotedibuspper').click(function(){
//   $(this).hide();
//   $('.dd img').hide();  
// });


// $('.drwng').mouseout(function(){
//     $(this).stop().fadeTo(700, 0);    
// });



// $('.drwng').mouseenter(function(){
//   $(this).stop().fadeTo(400, 1);




//   $('.d1').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd1 img').show();
//   });
//   $('.d2').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd2 img').show();
//   });
//   $('.d3').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd3 img').show();
//   });
//   $('.d4').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd4 img').show();
//   });
//   $('.d5').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd5 img').show();
//   });
//   $('.d6').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd6 img').show();
//   });
//   $('.d7').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd7 img').show();
//   });
//   $('.d8').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd8 img').show();
//   });
//   $('.d9').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd9 img').show();
//   });
//   $('.d10').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd10 img').show();
//   });
//   $('.d11').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd11 img').show();
//   });
//   $('.d12').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd12 img').show();
//   });
//   $('.d13').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd13 img').show();
//   });
//   $('.d14').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd14 img').show();
//   });
//   $('.d15').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd15 img').show();
//   });
//   $('.d16').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd16 img').show();
//   });
//   $('.d17').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd17 img').show();
//   });
//   $('.d18').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd18 img').show();
//   });
//   $('.d19').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd19 img').show();
//   });
//   $('.d20').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd20 img').show();
//   });
//   $('.d21').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd21 img').show();
//   });
//   $('.d22').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd22 img').show();
//   });
//   $('.d23').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd23 img').show();
//   });
//   $('.d24').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd24 img').show();
//   });
//   $('.d25').click(function(){
//     $('.remotedibuspper').show();
//     $('.dd25 img').show();
//   });
  
// });

// }

// setTimeout(laexpo,1600);

}); 



$('#outrisima, .outros').click(function(){ 
  $('.outros').css('z-index',-1);  //clearInterval isn't working
  $('.outros').hide();

  outClicked=true;

}); 


$('.intros').hover(function(){
$('.intros').stop().fadeTo('700',0.4);

}, function(){
  $('.intros').stop().fadeTo('700',1);
});
$('.outros').hover(function(){
$('.outros').stop().fadeTo('700',0.4);

}, function(){
  $('.outros').stop().fadeTo('700',1);
});



function animate() {

  setTimeout(function(){
    requestAnimFrame( animate );
  },40);

  draw();

if(firstClick === false){
    pixelsLeft+=160;
}


//////////////////////////////////////////////////////
//// Opening & BG lightshow

if(pixelsLeft>160&&firstClick===false){
  $('section').css('backgroundColor','#4a4a4a');
}
if(pixelsLeft>500&&firstClick===false){
  $('section').css('backgroundColor','#7e7e7e');      
}
if(pixelsLeft>700&&firstClick===false){
  $('section').css('backgroundColor','#bebebe');   
}
if(pixelsLeft>1000&&firstClick===false){
  $('section').css('backgroundColor','#f5f5f5');   
}
if(pixelsLeft>1250&&firstClick===false){
  $('section').css('backgroundColor','#d0d0d0'); 
}
if(pixelsLeft>1500&&firstClick===false){
  $('section').css('backgroundColor','#898989'); 
}
if(pixelsLeft>1900&&firstClick===false){
  $('section').css('backgroundColor','#616161'); 
}
if(pixelsLeft>2000&&firstClick===false){
  $('section').css('backgroundColor','#424242');   
}
if(pixelsLeft>2250&&firstClick===false){
  $('section').css('backgroundColor','#212121');      
}
if(pixelsLeft>2500&&firstClick===false){
  $('section').css('backgroundColor','#505050');      
}
if(pixelsLeft>2900&&firstClick===false){
  $('section').css('backgroundColor','#3c3c3c');      
}
if(pixelsLeft>3000&&firstClick===false){
  $('section').css('backgroundColor','#212121');      
}
if(pixelsLeft>3250&&firstClick===false){   
  $('section').css('backgroundColor','#111111');                           
}
if(pixelsLeft>2500&&firstClick===false){
  $('section').css('backgroundColor','#0d0d0d');      
}
if(pixelsLeft>2750&&firstClick===false){
  $('section').css('backgroundColor','#070707');      
}
if(pixelsLeft>3900&&firstClick===false){
  $('section').css('backgroundColor','#020202');      
}            
if(pixelsLeft>4000&&firstClick===false){
  $('section').css('backgroundColor','#000');
  // $('body, html').css('backgroundColor','orange');        
}
if(pixelsLeft>5920&&firstClick===false){   

  pyramidNeutral();

  firstClick = true;
}





// console.log(firstClick);
if(firstClick === true){



                            ///////////////////////////////////////////////
                           //        P Y R A M I D   S T A N C E        //   
                          //                                           //
    
                                if(yyxx===0&&!web&&!notweb&&!contact){
                                 pyramidNeutral();
                      } else if (yyxx===1&&!web&&!notweb&&!contact){
                               pyramidWebLower();
                    } else if (yyxx===2&&!web&&!notweb&&!contact){
                             pyramidWebHigher();
                  } else if(yyxx===3&&!web&&!notweb&&!contact){
                           pyramidNotWebLower();
                } else if(yyxx===4&&!web&&!notweb&&!contact){
                         pyramidNotWebHigher();
              } else if(yyxx===5&&!web&&!notweb&&!contact){
                       pyramidContactHigher();
            } else if(yyxx===6&&!web&&!notweb&&!contact){
                     pyramidContactLower();
          } else if(yyxx===7&&!web&&!notweb&&!contact){
                   pyramidTop();
        } else if(yyxx===8&&!web&&!notweb&&!contact){
               pyramidBottomLeft();
      } else if(yyxx===9&&!web&&!notweb&&!contact){
             pyramidBottomRight();
    } 

  //                                           //
 //       P Y R A M I D   C L I C K S         //
///////////////////////////////////////////////

  

canvas.onclick = function(){

  if(yyxx===1){

    web=true  
    pyramidGoesWeb();
    sizing();
    webClick.click();
    $('body').css('cursor','default');
  } else if(yyxx===2){

    web=true  
    pyramidGoesWeb();
    sizing();
    webClick.click();
    $('body').css('cursor','default');
  } else  if(yyxx===3){
    

    notweb=true;
    pyramidGoesNotWeb();
    sizing();
    $('body').css('cursor','default');
    notwebClick.click();
    
  } else  if(yyxx===4){

    notweb=true;
    pyramidGoesNotWeb();
    sizing();       
    $('body').css('cursor','default');       
    notwebClick.click();
    

  } else if(yyxx===5){

    contact=true; 
    pyramidGoesContact();
    sizing();               
    contactClick.click();
    $('body').css('cursor','default');
  } else if(yyxx===6){

    contact=true; 
    pyramidGoesContact();
    sizing();               
    contactClick.click();
    $('body').css('cursor','default');
  } else if (yyxx===10){
    rewinding=true;
    pixelsLeft=6240;

  setTimeout( function(){
  $('.outros').css('display','block'); 
  $('#outrisima').intro(['////////////','  ///////////    ']); //front+end
  }, 2700);

  }


}// end canvas on click


}//end if firstClick


}//end animate



////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/// //\\/// 
///\\\     D   R   A   W                      \\\ \\//\\\
///////////////////////////////////////////////// //\\///


function draw() {

if(introDone){
clearInterval(intrOpacity);
}

///////////////////////////////// Going Web ||||

if(web&&!homies){

  pixelsLeft+=160;
    
  if(pixelsLeft>=9440){
    pyramidFromWeb();
      
  }

} else if(web&&homies){

  //make $peed not more than 400 or 500
  //else this below here happens too soon and therefore off screen
  pixelsLeft-=160;
        
  if(pixelsLeft<=7680){
      pyramidNeutral();
      web=false;
      homies=false;      
  }

}

///////////////////////////// Going NotWeb ||||

if(notweb&&!homies){

  pixelsLeft+=160;
    
  if(pixelsLeft>=11200){
    pyramidFromNotWeb();
      
  }

} else if(notweb&&homies){

  //make $peed not more than 400 or 500
  //else this below here happens too soon and therefore off screen
  pixelsLeft-=160;
        
  if(pixelsLeft<=9440){
      pyramidNeutral();
      notweb=false;
      homies=false;      
  }

}

//////////////////////////// Going Contact ||||

if(contact&&!homies){

  pixelsLeft+=160;
    
  if(pixelsLeft>=12860){
    pyramidFromContact();
      
  }

} else if(contact&&homies&&!rewindReady){

  //make $peed not more than 400 or 500
  //else this below here happens too soon and therefore off screen
  pixelsLeft-=160;
        
  if(pixelsLeft<=11200){
      pyramidNeutral();
      contact=false;
      homies=false;      
  }

} else if(contact&&homies&&rewindReady){


  //make $peed not more than 400 or 500
  //else this below here happens too soon and therefore off screen
  pixelsLeft-=160;
        
  if(pixelsLeft<=11200){
      pixelsLeft=13120;



      contact=false;
      homies=false;     
  }



}

/////////////////////////////////


if(rewinding){



  pixelsLeft-=160;


if(pixelsLeft<8000){
  $('section').css('backgroundColor','#020202');
     
}
if(pixelsLeft<7900){
  $('section').css('backgroundColor','#040404');      
}  
if(pixelsLeft<7500){
  $('section').css('backgroundColor','#070707');      
}
if(pixelsLeft<7000){
  $('section').css('backgroundColor','#0d0d0d');      
}
if(pixelsLeft<6500){   
  $('section').css('backgroundColor','#111111');                           
}
if(pixelsLeft<6000){
  $('section').css('backgroundColor','#212121');      
}
if(pixelsLeft<5500){
  $('section').css('backgroundColor','#3c3c3c');      
}
if(pixelsLeft<5000){
  $('section').css('backgroundColor','#505050');      
}
if(pixelsLeft<4500){
  $('section').css('backgroundColor','#212121');      
}
if(pixelsLeft<4000){
  $('section').css('backgroundColor','#424242');   
}
if(pixelsLeft<3500){
  $('section').css('backgroundColor','#616161'); 
}
if(pixelsLeft<3000){
  $('section').css('backgroundColor','#898989'); 
}
if(pixelsLeft<2500){
  $('section').css('backgroundColor','#d0d0d0'); 
}
if(pixelsLeft<2000){
  $('section').css('backgroundColor','#f5f5f5');   
}
if(pixelsLeft<1500){
  $('section').css('backgroundColor','#bebebe');   
}
if(pixelsLeft<1000){
  $('section').css('backgroundColor','#7e7e7e');      
}
if(pixelsLeft<500){
  $('section').css('backgroundColor','#fff');      
}
if(pixelsLeft<=0){
  pixelsLeft=0;  
}


if(outClicked&&!lastbg2){
  $('.lastbg3').show();  
  lastbg2=true;
}else if(lastbg2&&!lastbg3){
  $('.lastbg4').show();  
  lastbg3=true;
}else if(lastbg3&&!lastbg4){
  $('.lastbg5').show();  
  lastbg4=true;
}else if(lastbg4&&!lastbg5){
  $('.lastbg6').show();  

  $('#home').dblclick(function(){
    location.href = "http://www.google.com";
  });

}



if(pixelsLeft<=0){

    $('#canvas').hide();
    $('body').css('cursor','default');
  }


}//end rewinding 


if(handShake){
if(!rewinding){
  ctx.clearRect(0,0,160,200);
  ctx.drawImage(triangleMenu,
  13280,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  spriteWidth,
  spriteHeight);
}else if(rewinding){
  ctx.clearRect(0,0,160,200);
  ctx.drawImage(triangleMenu,
  pixelsLeft,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  spriteWidth,
  spriteHeight);
}
} else {
  
  ctx.clearRect(0,0,160,200);
  ctx.drawImage(triangleMenu,
  pixelsLeft,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  spriteWidth,
  spriteHeight);

  if(pixelsLeft===13120){
    handShake=true; 
  }


}//end if(handShake)



}//end of draw                                    
//                                                 \
//                                                  \    
//                                                *  \
//                                              *   * \
//                                                *    \                                             
//                                           //////////|\ 
});// end $(function(){});
////////////////////////
/////////////////////
//////////////////
///////////////
////////////
/////////
//////
////
//  

                       