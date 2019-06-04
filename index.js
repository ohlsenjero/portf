///////////////////   OK LISTEN UP
//////////////////// 
//////////////////////  Rotational photoes only on intro...   
///////////////////////// they take attention from appearing Text, which is the main thing, and its too much for no good reason

//////////////////////////////    instead of TimeOut, have them rotate on click... so as to give the user something to do before jumping in

var currentLoc = 0;

var menuArr = ["#about", "#experiments", "#site1", "#site2", "#contact"];



var keysPressed = []; 

var keyDown={isDown:false, whatKey:null};

//prevents problem: pressed+hold >> goes round over menu like crazy and contact page wont show up anymore
//prevent press+hold  <<<   /// ON KEY UP MAKE  var false, on DOWN true, only do this click ONCE >> $('.nav ul li:nth-child('+(currentLoc+1)+')').find('a').click();
// ACTUALLY NEEDS TIMER...
var pressed=true;

document.addEventListener("keydown", function(e) {

  checkKey(e, true); 

      
}, false);

document.addEventListener("keyup", function(e) {

  keysPressed = [];
    keyDown.isDown=false; 
    setTimeout(function(){ 
    pressed=true;
  }, 800); 

}, false);


function checkKey(e, value) {

  keyDown.isDown=true;

        // e = e || event; 
  keysPressed[e.keyCode] = e.type;

  if(pressed){

    if(e.keyCode==39){
      //alert("PRESSED RIGHT");
      currentLoc++;

    }else if(e.keyCode==37){
      //alert("PRESSED LEFT");
      currentLoc--;
    }

    if(currentLoc== -1){
      currentLoc=menuArr.length-1;
    }else if(currentLoc==5){
      currentLoc=0;
    }

    $(document).ready(function(){
      $('.nav ul li:nth-child('+(currentLoc+1)+')').find('a').click();
    });

    pressed=false;
  }
  // window.location = menuArr[currentLoc];

}

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

    ////////////////////////////////////////////////   FAILING to properly check some times

    if($message.val()==" "){
      //alert($message.val());
      alert("Please enter a message");

    }else if($name.val()==" "){
      
        alert("Please enter your name");
 
    }else if($email.val()==" "){
      
        alert("Please enter your e-mail address");
      
    }
    // else if(!isValidEmail($email.val())){
      
    //     alert("Please enter a valid e-mail address");
      
    // }
    else if(!$spam.val()==" "){
      
        setStatusMessage("Spam Attack!!");

    }else{
      
        //serialize all the form field values as a string
      var formData = $(this).serialize();
        
      //alert(formData);
      
      //send serialized data string to the send mail php via POST method
      
      $.post("send-mail.php", formData, function(sent){
         
        if(sent=="error"){ 
         
          alert("ERROR");
           
        } else if(sent=="success"){

          alert("Thanks for getting in touch. I'll get back to you soon!");
          $('input').css('background-color','black');
            
          //clear form fields
          $formFields.val("");
            
        }//end if else
       
      },"html");

      //alert("Thanks for getting in touch!");
      

      
    }//end else

   });//end submit


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



$('textarea').on( "focus", function(){
  $('label').css('color','white');
  $('.messlabel').css('color','#e62046');
});


$('input').on( "focus", function(){
  // console.log($(this).attr('id'));
  $('label').css('color','white');
  $('.'+$(this).attr('id')).css('color','#e62046');  
});


  


//start in the middle
//window.location.href +="#experiments";

//alert($('.divo').length);
var navHeight = 66;          /// down from 66 to 65: 1 pixel is off for some reason


$('input[type=submit]').hover(function(){

  $(this).css({'right':window.innerWidth/2-$(this).width()/2-2+'px','bottom':'74px'});
  $(this).removeClass('unselected').addClass('selected');
  }, function(){
    $(this).css({'right':window.innerWidth/2-$(this).width()/2+'px','bottom':'78px'});
    $(this).removeClass('selected').addClass('unselected');
}); 

$('.gotosite, .divosite, .aboutsite').hover(function(){

  $(this).css({'right':window.innerWidth/2-$(this).width()/2-2+'px','bottom':'74px'})

}, function(){
    $(this).css({'right':window.innerWidth/2-$(this).width()/2+'px','bottom':'78px'})

}); 
//changing background

$('.inner img').hide();

function anim() {

    // inner has to be an ID as it HAS to be unique to each (otherwise gets confused and goes nuts)
    $(".inner img").first().appendTo('.inner').fadeOut(500);
    $(".inner img").first().fadeIn(500);    

    // For #experiments..  if/else here, depending on whether its been clicked or not.. then go back to if/else "pause"
    setTimeout(anim, 6032);
}
anim();


$('.pattern-bg').click(function(){
  // alert('y?');

  
});



//////////////////////////////////
/////////////////// CONVERTIR 66 + -  en una variable. >>> depende de Nav
var interval;
function initText(text, id, type){

  var loop = 0;

    //initial speed
  var speed = 600;
var semic = false;
var br = false;
var aLinkStart=false;


  var intero = function(){
    //alert(text[loop]);
    //alert(stop);
    interval = setInterval(function(){
      
    //console.log("speed?= "+speed);
    //could be randomly generated number
    if(text[loop]===","){
          speed=130;
          clearInterval(interval);
          
    }else if(text[loop]==="."){
          speed=260;
          clearInterval(interval);
          
    }else if(text[loop]===":"){
          speed=400;
          clearInterval(interval);
          
    }else if(text[loop]!==","){
          speed=15;
          clearInterval(interval);

          
    }else if(loop >= text.length){
          clearInterval(interval);
    }
    
    if(!semic){

    id.innerHTML += "<span class='innertext nopad'>"+text[loop]+"</span>";
    } else{
    id.innerHTML += "<span class='innertext'>"+text[loop]+"</span>";
    }
    

    //console.log(id.innerHTML);
    if(br){
    id.innerHTML += "<br />";
    br=false;
    } 


    if(aLinkStart){
      id.innerHTML += "<span class=\"innertext\"><a href=\"https://github.com/ohlsenjero/gameJS\"  target=\"_blank\">here</a></span>";
      aLinkStart=false;
    }
    

if(text[loop]===":"){
         semic = true; 
    }

    //console.log(text[loop]);
    loop++;


      if(type==0){

        if (loop >= text.length){
          clearInterval(interval);
        }else{
          //Check if still there
          if(idol[1]=="clicked"){
            intero();
          }else{
            clearInterval(interval); 
          } 
        }

        // if(text[loop]==="."){
        //   br = true; 
        // }

        if(text[loop]==="@"){
          aLinkStart = true; 
        }


      }else if(type==2){
if (loop >= text.length){

          clearInterval(interval);
        }else{
        //alert(idol[1]);       
          if(edol[0]=="clicked"){

            intero();
          }else{
            clearInterval(interval); 
          } 
          
        }
        if(text[loop]==="."){
          br = true; 
        }




      }else{
        if (loop >= text.length){

          clearInterval(interval);
        }else{
        //alert(idol[1]);       
          if(edol[0]=="clicked"){
            intero();
          }else{
            clearInterval(interval); 
          } 
          
        }
      }

  }, speed);

  }
  
  intero();

}




//if/else  depende de donde se cliqueo: initText("text correspondiente");


////  CHECK for Screen size, and adjust accordingly
////////////////// when too small, simply go down like normal >> position relative, width:100%;, name & description already on, link directly

// or better yet, add overflow:auto only on "Bio"


// $('.divo').css({"position":"absolute"});
    
var innerWrapperMargin=70;
var experimentsSize = function(){

//
////////////////////////////////////////////////////////////////////////////  PHONE SIZE CORRECTIONS

  $('#about, #experiments, #site1, #site2, #contact').css('min-width',window.innerWidth+'px');
  $('#about, #experiments, #site1, #site2, #contact').css('min-height',window.innerHeight+'px');
  $('#about').css('left',(window.innerWidth)*0+'px');
  $('#experiments').css('left',(window.innerWidth)*1+'px');
  $('#site1').css('left',(window.innerWidth)*2+'px');
  $('#site2').css('left',(window.innerWidth)*3+'px');
  $('#contact').css('left',(window.innerWidth)*4+'px');
  ////////////////////////////////////////////////////////////////// IMPORTANT
/////////////
/////////////////////////////////////   preguntar si Divo ha sido clickeado, y segun eso dejar "ese" div grande o no

  $('input[type=submit]').css('right',window.innerWidth/2-$('input[type=submit]').width()/2+'px'); 
  $('.aboutsite').css('right',window.innerWidth/2-$('.aboutsite').width()/2+'px');
  $('.gotosite').css('right',window.innerWidth/2-$('.gotosite').width()/2+'px'); 
  $('.divosite').css('right',window.innerWidth/2-$('.divosite').width()/2+'px'); 
  $('.inner-wrapper').css('min-height',window.innerHeight-innerWrapperMargin+'px');





     for (var i=0; i < $('#inner-wrapper').children().length; i++) {
      //alert(i);
        //alert(document.getElementById("container").children[i].className);
        // alert(Math.round($(this).offset().left));
          document.getElementById("inner-wrapper").children[i].style.left=100/$('#inner-wrapper').children().length*i+'%';

          document.getElementById("inner-wrapper").children[i].style.width=100/$('#inner-wrapper').children().length+'%';

            
    }//for



    // $('.divo').css('height',divoHeight);
    // $('.divo').css('width', (window.innerWidth)/2+"px");
    // $('.divo').css('z-index',0);
}

experimentsSize();

window.onload = function(){

//window.location.href = "https://raw.githack.com/ohlsenjero/portf/master/index.html#about";
$(document).ready(function(){

$('.nav ul li:first-child  a').click();

});
experimentsSize();
// location="file:///C:/Users/ASIMOV/Desktop/sliding%20divs-master/index.html#about";
location="#about";
////  no need for the whole address >>> gets added to the end


  initText('Hi, and welcome: Here you will find some examples of what I\'ve done in the past.  The first section contains a few experiments and side projects, while the next ones have official websites I\'ve worked on as a front-end developer. You can also visit my github below, to view current projects ', abouttext, 2);




}


    var divo1 = document.getElementById("divo1");
      var divo2 = document.getElementById("divo2");
       var divo3 = document.getElementById("divo3");




////// put vars in array. RE-ARRANGE  on resize >> check array value again
//maybe it fixes the "overflow:auto" problem after resize

//also, give them ALL position absolute from the onset, here, so they don't have to dissapear
// or come back to "positionL relative"


var idol = [];
idol[1] = "not-clicked";


var edol = [];
edol[0] = "not-clicked";


  if(edol[0]== "not-clicked"){
    edol[0] = "clicked";
  }

////  ON LOAD
  setTimeout(function(){ abouttext.innerHTML = "";  }, 599);
  site2text.innerHTML = "";
  site1text.innerHTML = "";
  abouttext.innerHTML = "";


/// and now ABOUT BUTTON BECOMES >> VISIT GIT  >>> and also ON menu CLICK


//only if not clicked before >> idol[1]="clicked, not clicked..."
$('.divo').click(function() {   /// algo raro pasa aqui



     for (var i=0; i < $('#inner-wrapper').children().length; i++) {
      
          document.getElementById("inner-wrapper").children[i].style.left=100/$('#inner-wrapper').children().length*i+'%';

          document.getElementById("inner-wrapper").children[i].style.width=100/$('#inner-wrapper').children().length+'%';

            
    }//for

        $(this).animate({
            'left': 0,
            'width': 100+"%"
        }, 500);
        $(this).css('z-index','2');




    /// BRING UP A BLOCKING TRANSPARENT div
    /////////// so as to prevent user from cliking another DIV while this one is still expanding
    if(idol[1]== "not-clicked"){
       $('.divosite').css({'right':window.innerWidth/2-$('.divosite').width()/2+'px','bottom':'78px'});

       /// IF RELOAD from here:   BUG!


    idol[1] = "clicked";
    //// >>>>>>>>>>>>>>> var expanded = true;     this inside if(!expanded){expanded=true}else{ do nothing.. link in an independent button}
    setTimeout(function(){     
     setTimeout(function(){   $('.b').fadeIn(400);}, 800); 
      $('.divosite').fadeIn(100);

    $('.divosite').hover(function(){

      $(this).css({'right':window.innerWidth/2-$(this).width()/2-2+'px','bottom':'74px'});

    }, function(){
        $(this).css({'right':window.innerWidth/2-$(this).width()/2+'px','bottom':'78px'});

    }); 

    }, 500); 



    idol[0] = $( this ).attr('id');
    
    //alert(testDiv.offsetLeft);


    //alert($( this ).attr('id'));
   // $('.divo').hide();
   //  $(this).show();

   $('.divo:hover').css('cursor','default');
    //alert(idol[0]);

    if(idol[0]=='divo1'){    

      initText('013-015 Portfolio: An experiment for what would be the "end of the year" project at Media Design School. Developed using HTML-canvas and JS, and combined with my background in digital filmmaking, it features animations which simulate a round space, instead of the classic magazine/scroll-down approach of other websites ', divo1text, 0);

      //alert(divo1.offsetLeft);
    }else  if(idol[0]=='divo2'){

      initText("JS API: Single-page site where the HTML is dynamically populated based on JSON data", divo2text, "0");

    
      
    }else  if(idol[0]=='divo3'){
      initText('World of Wearable Art: Ficticious site created for educational purposes. As an intrinsically visual undertaking, it was my introduction to loading content with AJAX, to avoid breaking the atmosphere when navigating the site ', divo3text, "0");

    }
    // var x = $(this).offset();
    // alert(" Left: " + x.left);


    }// if not clicked

  });// DIVO CLICKED

// $('.b').hover(
//   function() {
//     clearInterval(l);
//     $('.b').fadeIn(800);
//   }, function() {
    
//   });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.b').click(function(){
$('.divosite').fadeOut(100);
 setTimeout(function(){  
$('.divosite').fadeOut(100);
  }, 400);
  });

$('.b, .nav li').click(


  ////////////////////////////////////////////////////////////// GET RIGHT IMAGES FOR EACH
function() {


  divo1.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo1text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/portf/master/DMlive-site/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";
  divo2.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo2text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/github-upload/master/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";
  divo3.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo3text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/portf/master/wow/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";


  setTimeout(function(){     



  divo1.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo1text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/portf/master/DMlive-site/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";
  divo2.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo2text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/github-upload/master/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";
  divo3.innerHTML = "<div class=\"innertext-wrapper\"><div id=\"divo3text\"></div></div><div class=\"pattern-bg\"><div class=\"divosite\"><a href=\"https://raw.githack.com/ohlsenjero/portf/master/wow/index.html\" target=\"_blank\">VIEW SITE</a></div></div>";


  //anim2();

  }, 400);

  setTimeout(function(){   $('.b').fadeOut(100);  }, 700);

    //////   CAN'T do it programmatically!!

            $('#divo1').animate({
              'left': 100/$('#inner-wrapper').children().length*0+'%',
              'width':100/$('#inner-wrapper').children().length+'%'
            }, 500);
           
            $('#divo2').animate({
              'left': 100/$('#inner-wrapper').children().length*1+'%',
              'width':100/$('#inner-wrapper').children().length+'%'
            }, 500);
            $('#divo3').animate({
              'left': 100/$('#inner-wrapper').children().length*2+'%',
              'width':100/$('#inner-wrapper').children().length+'%'
            }, 500); 
           


  //idol = $( this ).attr('id');
  // array
  idol[1] = "not-clicked";

  $('.b').css('display','none');
     


    setTimeout(function(){     

      $('.divo').css({"z-index":"1"});  /// 0 is taken
         $('.divo').hover(function(){
  $('.divo').css('cursor','pointer');
});
        
    }, 500);

  });

// Pre-Load bg images
// Important so first time Contact is clicked, the background-images don't blink (as they would only then start loading)

var pic = new Image();
var pic2 = new Image();
var pic3 = new Image();
var pic4 = new Image();
var pic5 = new Image();
var pic6 = new Image();
var pic7 = new Image();
    pic.src="img/1.png";
    pic2.src="img/2.png";
    pic3.src="img/3.png";
    pic4.src="img/4.png";
    pic5.src="img/5.png";
    pic6.src="img/6.png";
    pic7.src="img/7.png";




(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

/*  NEEDED FOR ALL OF THE CODE BELOW TO WORK  */

(function() {
  // http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
  var scrollElement = 'html, body';
  var $scrollElement;

  $(function() {
    $('html, body').each(function () {
      var initScrollLeft = $(this).attr('scrollLeft');
      
      $(this).attr('scrollLeft', initScrollLeft + 1);
      if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
        scrollElement = this.nodeName.toLowerCase();
        $(this).attr('scrollLeft', initScrollLeft);
        return false;
      }    
    });
    $scrollElement = $(scrollElement);

  });


var lastHash = [];



 $('.nav ul li a').click(function(){
  //alert('clicked');
  $('.nav ul li a').removeClass('selected').addClass('unselected');
 });

  $(function() {
    var $panels = $('.panel');

    $panels.each(function() {
      var $panel = $(this);
      var hash = '#' + this.id;



      //alert(window.location.hash);
      
        $('a[href="' + hash + '"]').stop().click(function(event) {

          $('#name,#email, #subject, #message').val(" ");
          $('label').css('color','white');
          $('.gotosite, .aboutsite').fadeOut(180);
          setTimeout(function(){  $('.gotosite, .aboutsite').fadeIn(300); }, 500)

        
          $('.wrapper-top').css('background-color','transparent');


          $('.nav ul li a').removeClass('selected').addClass('unselected');
          

          $(this).removeClass('unselected').addClass('selected');
          //$('.selected').css('color', 'red');


         // console.log(this);
        // alert(hash);
         currentHash(hash);

         function currentHash(hasho){
          var thisHash = hasho;
          if(thisHash=="#about"){
            currentLoc=0;
          }else if(thisHash=="#experiments"){
            currentLoc=1;
          }else if(thisHash=="#site1"){
            currentLoc=2;
          }else if(thisHash=="#site2"){
            currentLoc=3;
          }else if(thisHash=="#contact"){
            currentLoc=4;
          }
         }

          if(hash!= "#contact"){
            $('.wrapper-top').css('position', 'absolute');
            
          clearInterval(interval);
            if(hash=="#site2"){
              $('.linkexperiments').text("u");  
              if(edol[0]== "not-clicked"){
                edol[0] = "clicked";
              }
              setTimeout(function(){ site2text.innerHTML = "";  }, 599);
              site2text.innerHTML = "";
              site1text.innerHTML = "";
              abouttext.innerHTML = "";
              initText('Gillies Hospital: Developed on DNN, this site had me involved in the whole process, from pen and paper wireframing, to the final upload into the server, while making sure it was responsive and accessible ', site2text, 1);
              
              setTimeout(function(){ site1text.innerHTML = "";  }, 600);
              setTimeout(function(){ abouttext.innerHTML = "";  }, 600);

            }else if (hash=="#site1"){
              $('.linkexperiments').text("t");  
              if(edol[0]== "not-clicked"){
                edol[0] = "clicked";
              }
              setTimeout(function(){ site1text.innerHTML = "";  }, 599);
              site2text.innerHTML = "";
              site1text.innerHTML = "";
              abouttext.innerHTML = "";
              initText('Storm Kimonos: One of the earlier major client web sites I have worked on. Although changed since first implemented, it was developed by Fourthmedia using DNN. I was in charge of providing a reponsive CSS environment, while taking care of the JS interaction and cross-device issues ', site1text, 1);

              
              setTimeout(function(){ site2text.innerHTML = "";  }, 600);
              setTimeout(function(){ abouttext.innerHTML = "";  }, 600);
            }else if (hash=="#experiments"){

              site2text.innerHTML = "";
              site1text.innerHTML = "";
              abouttext.innerHTML = "";
              setTimeout(function(){ site2text.innerHTML = "";  }, 600);
              setTimeout(function(){ site1text.innerHTML = "";  }, 600);
              setTimeout(function(){ abouttext.innerHTML = "";  }, 600);
              $('.linkexperiments').text("s"); 
            }else if (hash=="#about"){
              $('.linkexperiments').text("v");  
              if(edol[0]== "not-clicked"){
                edol[0] = "clicked";
              }
              setTimeout(function(){ abouttext.innerHTML = "";  }, 599);
              site2text.innerHTML = "";
              site1text.innerHTML = "";
              abouttext.innerHTML = "";
              //initText(': If you see anything you like, do not hesitate getting in touch. I will get back to you as soon as possible :', abouttext, 2);

              
              setTimeout(function(){ site2text.innerHTML = "";  }, 600);
              setTimeout(function(){ site1text.innerHTML = "";  }, 600);

                



              // if(edol[0]== "not-clicked"){
              //   edol[0] = "clicked";
              // }
              // edol[0] = "clicked";
              //  setTimeout(function(){ abouttext.innerHTML = "";  }, 599);
              // site2text.innerHTML = "";
              // site1text.innerHTML = "";
              // abouttext.innerHTML = "";
              //   initText('Storm Kimonos: The first', abouttext, 1);
            }else{
              
               $('.linkexperiments').text("v");
              edol[0]="not-clicked";
              site2text.innerHTML = "";
              site1text.innerHTML = "";
              abouttext.innerHTML = "";
                setTimeout(function(){ site1text.innerHTML = "";  }, 600);
                site2text.innerHTML = "";
              setTimeout(function(){ site2text.innerHTML = "";  }, 600);
              setTimeout(function(){ abouttext.innerHTML = "";  }, 600);
            }
          


            if(window.location.hash=="#contact"){


              //alert(lastHash[0]);
              var i = 7;
              lastHash[0]="no";
                function nextFrame() {
                  setTimeout(function(){window.location.hash =hash; }, 100);   //// Or it might load the backgroung image of that hash before loading the one on wrapper-top

                  if(i >0) {
                    $('.contactdiv').fadeOut(500);
                    $('.wrapper-top').css('z-index','2');
                    $('.wrapper-top').css('background-color','transparent');
                    $('.wrapper-top').css('display','block');
                   
                    $('.wrapper-top').css('background-image','url(img/'+i+'.png)');
                    // $('#f0, #f1, #f0').css('display','block');
                    //   window.location.hash = "f"+i; 
                      i--;
                      // Continue the loop in 3s
                      setTimeout(nextFrame, 50);
                  }else{
                    $('.wrapper-top').css('z-index','1');  
                    $('.wrapper-top').css('display','none');  
                    
                    // $('#f0, #f1, #f0').css('display','none');
                    // //hasho = hash;
                    // window.location.hash =hash; 
                  }
              }
              // Start the loop
              setTimeout(nextFrame, 0);


            }else{



              //$('.panel').css('overflow-y','hidden');
              $scrollElement.stop().animate({
                scrollLeft: $panel.offset().left
              }, 500, 'swing', function() {
                window.location.hash = hash;
              //$('.panel').delay(500).css('overflow-y','auto');
              });

            }
            
            // if(hasho == "#contact"){
            //    hasho="loperdimo";
            //   alert('hurra'+ hasho);
            //alert(lastHash[0]);

            //}
          }else{
            
           $('.linkexperiments').text("v"); 
            //////////////////////  if(hash == "#contact")
            ///////////////////////////////////////////////////////////////////// C O N T A C T 

            if(hash!= "#contact"){
            $('.contactdiv').hide();
            site1text.innerHTML = "";
            setTimeout(function(){ site1text.innerHTML = "";  }, 600);
            site2text.innerHTML = "";
            setTimeout(function(){ site2text.innerHTML = "";  }, 600);

            //MAKE VAR TO PREVENT DOUBLE CLICK< just like before
          }

            if(edol[0]=="clicked"){
              edol[0]="not-clicked";
            }

            var i = 2;

           
            
            if(lastHash[0] !="yeah"){

              
              abouttext.innerHTML = "";
              setTimeout(function(){ abouttext.innerHTML = "";  }, 600);
             
              function nextFrame() {
                //$('.f0, .f1, .f0').css('display','block');  
                

                  if(i < 8) {                                         //////////////////   any BG after 6 starts   BLINKING bug!!!!!!!!!!!!!!                    
                    $('.wrapper-top').css('background-color','none');

                    $('.wrapper-top').css('z-index','2');
                    $('.wrapper-top').css('display','block');
                    
                    // var e = i-1;
                    // $('.wrapper-top').css('background-image','url(img/'+e+'.png)');
                    $('.wrapper-top').css('background-image','url(img/'+i+'.png)');

                    //history.replaceState({}, null, "/index.html");

                    // $('#f0, #f1, #f0').css('display','block');
                    //   window.location.hash = "f"+i; 
                      i++;
                      // Continue the loop in 3s
                      setTimeout(nextFrame, 50);
                  }else{
                    $('.wrapper-top').css('position','relative');  ////////    way back in l:832     antes no lo necesitaba.. que sucede?
                    $('.wrapper-top').css('z-index','1');
                    $('.wrapper-top').css('background-image','none');
                    $('.contactdiv').fadeTo(1000, 1);
                    window.location.hash =hash;
                   
             
                    // $('#f0, #f1, #f0').css('display','none');
                    // //hasho = hash;
                    // window.location.hash =hash; 
                  }
              }
              // Start the loop
              setTimeout(nextFrame, 0);

               lastHash[0] = "yeah";
            }

              event.preventDefault();

            //   if(hasho == "#contact"){
            //   alert('hurra'+ hasho);

            // }
          }

          event.preventDefault();
        });
      
  


      
    });
  });



  /* FORCES PANEL TO FIX TO WINDOW's WIDTH ON WINDOW RESIZE  */

  $(function() {
    var $window = $(window);
    var timer;

    $window.resize(function() {



    experimentsSize();


      window.clearTimeout(timer);
      timer = window.setTimeout(function() {
        var hash = window.location.hash ? window.location.hash : '#about';
 
        
        $scrollElement.stop().animate({
          scrollLeft: $(hash).offset().left
        }, 200);
      }, 100);

       $('.panel').css('overflow-y','hidden');
       $('#bio').css('overflow-y','auto');

        // $('.nav').css("width", "100%");
        // $('.nav li').css("width",window.innerWidth/5- (window.innerWidth/5)/5 -1+"px" );



        // $('.divo').css('height',divoHeight);
        // $('.divo').css('width', (window.innerWidth)/3+"px");

      // if($('.panel').hasScrollBar()){

        
      //   // $('.nav').css("width", window.innerWidth-getScrollbarWidth()+"px");
      //   // $('.nav li').css("width",window.innerWidth/5- (window.innerWidth/5)/5 -1-getScrollbarWidth()/5+"px" );

      //   // $('.divo').css('height',divoHeight);
      //   // $('.divo').css('width', (window.innerWidth-getScrollbarWidth())/3+"px");
      // }else{
      //   $('.nav').css("width", "100%");
      //   $('.nav li').css("width",window.innerWidth/5- (window.innerWidth/5)/5 -1+"px" );

      //   $('.divo').css('height',divoHeight);
      //   $('.divo').css('width', (window.innerWidth)/3+"px");
      // }


      //$('.panel').css({"width": window.innerWidth+"px", "height": window.innerHeight+"px"});

      scrollVuelve();

    });
  });


  var scrollVuelve = function(){
     setTimeout(function(){
      //$('.panel').delay(500).css('overflow-y','auto');
    }, 370);
  }

  /* CENTERING ABOUT & SHORTCUT PANELS

  ALSO MAKES THE "FIX TO WINDOW" CODE WORK */

  $(function() {
    var $window = $(window);
    var $centered = $('#about .inner, #shortcuts-examples .inner')

    var center = function() {
      var winHeight = $.waypoints('viewportHeight');

      $centered.each(function() {
        var $el = $(this);
        var top = (winHeight - $el.height()) / 2;

        top = top > 60 ? top : 60;
        $el.css('top', top);
      })
    };

    center();

    $window.load(center).resize(center);
  });
})();



