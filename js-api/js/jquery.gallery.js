
(function($){

$.fn.gallery = function() {

     $("#photo").css('visibility', 'hidden');
    $('#gallery ul#thumbs').css('bottom','60%');
    var self = this;
    var setimgs;

    var allPics = []; 
    var currentPic;
    var currentPicName;  /// to distinguish when pic is the same
    var currentVidFilter = [];

    var currentVidFilterButton=[];

    var dropdown = [];

    var rememberWich; /// which class of li a setClicked (dropdown)

    var x=0;

    var  setsHover =[];

    this.each(function() {
        var thes = this;


$('.iframe-close').hide();

var keys=[];

        var set;
        var globSet;
        // el = where im loading from in the HTML


        var setClicked=false;


        var whatGal;

        var loaded= false;


        var forcedLink=false;


        thes.load_sets = function(el) { // function - load sets of images
            // $.each(images, function(key, value) { 
            //     $(el).append('<li><a class="'+key+'" href="#" title="'+key+'">'+key+'</a></li>');

var jsonData;


// function postProcessing(data) {
//       jsonData=data;
//      }


//     console.log(getValues());

//         function getValues(){
//              $.ajax({
//                 url: 'https://ohlsenjero.github.io/JS-api/data.json',
//                 type: 'get',
//                 dataType: 'json',
//                 cache: false,
//                 success: postProcessing,
//                 async:true,
//                 });
//         };


$.ajax({
async: false,
url: "https://ohlsenjero.github.io/JS-api/data.json",
success: function(data) {
console.log(data);
position = { lon: data.lon, lat: data.lat };
jsonData= data;
}
});                      /////////////////   DEPRECATED... but it works..



console.log(jsonData);

    $.each(jsonData, function(key, value) { 

        //alert(key);

        $('#gallery').find('#sets').append('<li class="'+key.replace(" ", "")+'"><a class="'+key+'" href="#" title="'+key+'">'+key+'</a></li>');


                 // loop through images[key].length  >> n
                /// get the one corresponding to filters, that is, the last one>>  images[key][n].length  (if any, unlike photos)


               // alert(key);

                keys.push(key);
        /// push into diff dropdown categories, accoding to the key and its values, without these being repeated
       // if(key=="set uno"){
        //alert(images[key][1].length);


                for(var n=0; n<images[key][1].length; n++){    

                //alert('este'+images[key][0].length)
                   //alert  ( images[key][n][images[key][n].lengthh-1]); 


                   ///replace needed for when set's name has spaces <<< at which point it cuts the name

                    //if(key=="set uno"){ //   here limits to videos only
                        if(typeof dropdown[0]=="undefined"){

                            //alert('RR'+value[1][n][images[key][1][n].length-1]);
                            //alert(value[n][images[key][n].length-1]);
                            //// put into array...
                            dropdown.push([key,value[1][n][value[1][n].length-1]]);   //// -2 >>> filter is second to last value
                         }else{
                
                            ///...to check that it isnt one with that name already!
                            //alert(images[key][n][images[key][n].length-1]);

                            if(!matcho(key, value[1][n][value[1][n].length-1])){
                                    dropdown.push([key,value[1][n][value[1][n].length-1]]);
                            }
                            

                        }
                    //}//if(key=="set uno")

                }  
          //  }

                ///dropdown generator... 

                for (var x =0 ;x<dropdown.length; x++) {
                    if(dropdown[x][0]==key){      ///////////////  and key != photos!!
                       // alert(dropdown[x][0]);
                       $('#gallery').find('#sets li.'+key.replace(" ", "")+"'").append('<a class="'+dropdown[x][1]+'" href="#" title="'+'mono'+'">'+dropdown[x][1]+'</a>'); 
                    }

                }

    });


    var sets = $(el).find('li a');



    $(sets).click(function(){ 

        $('#gallery .photo-frame #photo').hide();
        $('#gallery .photo-frame #photo').attr('src',"images/trans.png");  
                                             //// >>>>just put a transparent image here, so it doesnt show that ugly "no-image" icon
                                                ///  >> there you go

        forcedLink=false;
                    

        if(!setClicked){
            /*alert('click');*/

            //alert($(this).attr('class'));
            //alert(keys.length);

                


            x=0;
            currentVidFilter = [];
            currentVidFilterButton = [];
            setsHover = [];


            rememberWich = $(this).attr('class');


                        /// for each key... for dropdown >> if dropdown[w][0]== key  >>   if(dropdown[w][1]==$(this).attr('class')  BOOM)
                                                                   
                        // if($(this).attr('class')=='jazz'){          //donde  $(this).attr('id')  vendria a ser  el parametro (o (this).attr('class'))
                        //     $('#vid-thumbs li').show();
                        //     $('#vid-thumbs li').hide();

                        // $('#vid-thumbs').find('li.'+$(this).attr('class')+'"').show();
                        // //alert("MIERDA");
                        //     return;
                        // }



            //alert(chick[1]);
               
            $('#photo, #thumbs').show();
            $('#iframe').hide();
            $('html').css('overflow','visible');


                

            set = $(this).parent().attr('class');

                

            for (var y=0; y<dropdown.length; y++) {
                if(dropdown[y][0].replace(" ", "")== set ){
                    set = dropdown[y][0];
                }
            }

            allPics=[];

                    //alert(set);

                    ///  if SET1 muestra fotos.. /// else set2 muestra iframes!!
                    //alert(set);
            thes.setimgs = images[set];  //// data[set]
                    
                    //  func () gets  images[set];
                     /// loops to find different currentVidFilterButton[m]


                $(thes).find('#iframe').html('');
                $(thes).find('#vid-thumbs').html('');
                $(thes).find('#thumbs').html('');
                $(thes).find('#gal-thumbs').html('');

                        
    

            if(images[set][0]!="vid"){

                        //// trabalenguas
                        //alert(images[set][0][images[set][0].length-1]);
                    if(images[set][0][images[set][0].length-1]!="mono"){ 

                                                   
                        //// FIRST LOAD GALLERIES.. >> thes.load_thumbs($(thes).find('#thumbs')[0], 0);  ON CLICK (on one of those galleries)
                        /// get the format right on gallaries (1 more dimension)

                ///desision:
                  ////// intra filters in music for artist filtering ([2]or sm)  and in 'shows', to see all available ones (selec bar)
                  /////////////////////////////////////////////////////////////////  all available==== array with diff names ([2]or sm)

                        for(var b = 0; b<keys.length; b++){
                          
                                  
                            if(typeof images[keys[b]]!= "undefined"){
              

                                

                                if(images[keys[b]][0]=='vid'){ ////////if this set (in data) has type vid..  

                                    setsHover.push(keys[b].replace(" ", ""));
                                    
                                }
                            }

                        }
                          

                        thes.load_thumbs($(thes).find('#gal-thumbs')[0], 0, 'gallery');
                        /////  ELSE  PHOTO GALLERY THUMBS

                }else{


                        thes.load_thumbs($(thes).find('#thumbs')[0], 0, 'normal');
                }


            }else{



                thes.load_thumbs($(thes).find('#vid-thumbs')[0], 0, 'normal');
            }


                    //// this below generates the nav's dropdowns
                    for(var b = 0; b<keys.length; b++){
                                                
                        if(typeof images[keys[b]]!= "undefined"){
                             

                             ///fine tune this! (not vid but not)


                            if(images[keys[b]][0]=='vid'){ ////////if this set (in data) has type vid..  

                                setsHover.push(keys[b].replace(" ", ""));
                            }
                         }
                    }


            $(thes).find('#loading').html('Loading <strong>1</strong> of '+thes.setimgs.length+' images');

            // $('#sets li').find('a').not(':first').hide();
            $('#sets li a').hide();

            $('#sets li a:first-child').show();   
        }
                setClicked=true;
    });///// sets.click
            

            ///works fine here, but only after clicking... 
            /// before click has to be read outside

            // for(var n=0; n<sets.length; n++){
            //     alert($('#sets:nth-child('+n+')').find('a').attr('class'));
            // }
            
            sets[sets.length-1].click(); //sets.length-1


            
            $('.iframe-close').hide();




        }//thes.load_sets       



        // function readSets(el, key){
        //     var sets = $(el).find('li a');
        //     // for(var n=0; n<sets.length; n++){
        //     //     alert($('#sets:nth-child('+(n)+')').find('a').attr('class'));
        //     // }

        //     var keys = key;
          

        //        //alert(images[0]);
        //        alert(images.keys);
            
        //     alert(keys);
        // }

            



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     ///                 M I N I M U M   H E I G T H  !!!!!!!!!|////////////////////////////////

         

        thes.load_thumbs = function(el, index, type) { // function - load thumbs of set      
            //////////    A THRclass PARAMETER IF TRIGGERED BY ARROWS >>  TRUE...
// alert('LL '+setsHover.length);
            /// THEN IF TRUE GET PICS


////////////////////////
////////////////////////
/////////////////
/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////
////////////         LOAD GROUPS AT A TIME (according to screen, resize) >> SCOLL BOTTOM >> LOAD GROUP*2 > 3> 4 (counter many times scroll botom)
//////////////////

           

            setClicked=false;


            var loadType = type;
           
            //// set photos - thumbs normal

            currentVidFilter = [];

            $('.filter').hide();

            $('#gallery ul#thumbs').css('bottom','60%');
            $('#iframe').hide();
            $('html').css('overflow','visible');
            $('.iframe-close').hide();
            $('.insidegal-close').hide();
            // $('.left-arrow').show();
            // $('.right-arrow').show();      

            

            if(images[set][0]!="vid"){   ///////////// if(set!="set uno"){ images[set][0][images[set][0].length-1]
                                                                       


                if(loadType=='gallery'){
                    // alert(thes.setimgs[1][1][1]);
                   // alert(thes.setimgs[0][0][0]);
                   //alert(images[set][0][0]);
                    if(images[set][0][0]=="multi"){

                     
                        //alert(thes.setimgs[0][index][1]);    


                    //// entonces aca puede estar la alternativa de traer fotos desde otro objeto y dejar images como el refeterente para el link


                        $(el).append('<li><img class="' + thes.setimgs[index][1] + ' '+thes.setimgs[index][2]+ '" src="images/' + thes.setimgs[index][2] + '" /></li>');



                        var tn = new Image();

                        $(thes).find('#photo').hide();



                        $(tn).load(function() {

                            var a = $($(el).find('li')[index]).find('img')[0];
                            $(a).append(this).addClass('vid');



                            var o = thes.setimgs[index][4];

                            currentVidFilter.push(o);


                            $(a).click(function() { // binding onclick to thumbs
                                var i = $(this).attr('class').split(" ")[0];

                                /// en vez de abrir las iframes, simplement crear un boton uqe al ser clicekado triggers click set2 (ESTE set)
                                 //// try triggering this (insideGallry) from outside set-dos ay el boton triggers THAT SET

                                //// tambien tiene que acordarse del offtet en el que estaba para cuando vuelva ponerlo ahi


                                whatGal = $(this).attr('class').split(" ")[0];


                               loadInsideGalleryTransition(name, $('#gallery ul#thumbs'), 0);   ////  tumbs specificly, or else would go to gal-thumb
                                                                                                /// as specified for thumbs when load type > gallery

                                $('#iframe').css('height',$('#gallery').height()+'px');

                               
                                $('.insidegal-close').show();


                                return false;
                            });



                            if ((index + 1) < thes.setimgs.length) {
                                thes.load_thumbs(el, (index + 1), 'gallery');
                                $(thes).find('#loading strong').html(index + 2);
                               
                            } else {
                                $(thes).find('#loading').html('Finished loading <strong>' + thes.setimgs.length + '</strong> images');
                                $( "#sets li" ).show();    
                                loading= false;

                            }/// else // if(index + 1) < thes.setimgs.length




                            //// so it is working
                            if(forcedLink){
                               $("#gal-thumbs li").find('.dos')[0].click();


                            ////  put .dos into var >>>  .dos is whatever was clicked on the other side >>> line 1052  (the actual link's class == galleryName)

                            }



                        });//// (tn).load(function()



                        tn.src = 'images/' + thes.setimgs[index][2]; // thumb_


                    }else{


                     ///// en vez de 3 >> length-1
                            //////    + d 1 filtro:  loop thes.setimgs[index].length  if n > 2
                              ///////                     && n < thes.setimgs[index].length  -1
                                     /////////                      \keeps last spot for type, vid or phot
                                            //////// this (hunt down) every time you find [3]...
                                                                                    
                        $(el).append('<li><img class="' + thes.setimgs[1][index][0] + ' '+thes.setimgs[1][index][1]+ '" src="images/' + thes.setimgs[1][index][1] + '" /></li>');  // thumb_

                        //alert(thes.setimgs[1][index][0]);

                        var tn = new Image();
                        $(tn).load(function() {
                            

                            
                            allPics.push([thes.setimgs[1][index][0],thes.setimgs[1][index][1]]);   /////////////   push ALSO THE NAME, to compare!!!  (and get rid of newI....)

                            var a = $($(el).find('li')[index]).find('img')[0];
                            $(a).append(this);
                            $(a).click(function() { // binding onclick to thumbs

                                var e = $(this).attr('class').split(" ")[0]; //$(this).parent().attr('class'); >> li
                                var i = $(this).attr('class').split(" ")[1];

                                $(thes).find('#photo').attr('src', 'images/'+i);

                                currentPic = [];
                                currentPic.push(i);
                                
                                currentPicName = [];
                                currentPicName.push(e);
                                


                                return false;
                            });

                            //alert("L ="+thes.setimgs[0].length);
                            if ((index + 1) < thes.setimgs[1].length) {


                                thes.load_thumbs(el, (index + 1), 'gallery');
                                $(thes).find('#loading strong').html(index + 2);
                                $("#photo").css('visibility', 'hidden');

                                $('#gallery ul#thumbs').css('left',window.innerWidth/2-($('#gallery ul#thumbs').width()/2)+'px');
                                $('#gallery ul#thumbs').css('bottom','60%'); // window.innerHeight/2+'px'
                                

                                //$('#gallery ul#thumbs').css('bottom',(window.innerHeight/2)*2+'px');
                                ////  while still loading, pull thumbs css.top lower, so its in the middle, like that loading text
                            } else {
                                $(thes).find('#loading').html('Finished loading <strong>' + thes.setimgs[1].length + '</strong> images');
                                $($(thes).find('#thumbs li img')[0]).click();
                                  $("#photo").css('visibility', 'visible');
                                   $('#gallery ul#thumbs').css('bottom',0);
                                   $( "#sets li" ).show();
                                   loading=false;
                               // $('#gallery ul#thumbs').css('bottom','0');
                               //alert($('#gallery ul#thumbs').width());



                            }
                        });
                    
                        tn.src = 'images/' + thes.setimgs[1][index][1];  // thumb_

                    }//else multi mono

                    $('.insidegal-close').click(function(){


                        var clickIndex;
      
                        for (var i = 0; i <keys.length; i++) {
                        //alert(sets[i][0]);
                           if(rememberWich==$('#sets').find('li:nth-child('+(i+1)+') a').attr('class')){
                                //clickHere=$('#sets').find('li:nth-child('+(i+1)+') a');


                                clickIndex=i;
                              
                               //alert( $("'."+$('#sets').find('li:nth-child('+(i+1)+') a').attr('class')+"'").parent().attr('class'));   

                               
                            }
                        }
                        

                        $('#sets li:nth-child('+(clickIndex+1)+')').find('a')[0].click();

                        //// funciona, pero repite esta operacion por cada elemento en los thumbs (o cada galeria) 


                    //$('#sets li a').click();

                       // sets[0].click();
                    });


                    function loadInsideGalleryTransition(name, el, index){
                        
                        ///transition necessary for this step not to empty out new thumbs or the ones in "choose gallery mode"
                        $("#gal-thumbs").empty();


                        loadInsideGallery(name, el, index);


                    }

                   

                    function loadInsideGallery(name, el, index){


                        $('.insidegal-close').show();
                        $('#gallery ul#thumbs').css('bottom','60%');

                        $.each(fotos, function(key, value) { 

                            

                        if(fotos[key][index][1]==whatGal){
                            $(thes).find('#photo').attr('src', '');/// take it off first, as the new calculated src may take a while

                            $(el).append('<li><img class="' + fotos[key][index][1] + ' '+fotos[key][index][2]+' '+ fotos[key][index][0]+'" src="images/' + fotos[key][index][2] + '" /></li>'); // thumb_


                            allPics.push([fotos[key][index][0],fotos[key][index][2]]);   /////////////   push ALSO THE NAME, to compare!!!  (and get rid of newI....)

                                //alert(allPics.length);

                            //var tn = new Image();

                            // $(tn).load(function() {
                            
                                
                            //     ///////////////   ONLY WHERE THE NAME IS RIGHT

                            //     allPics.push([fotos[key][index][1],fotos[key][index][2]]);   /////////////   push ALSO THE NAME, to compare!!!  (and get rid of newI....)

                            //     var a = $($(el).find('li')[index]).find('img')[0];
                                 
                                
                            //     $(a).append(this);

                            //     $(a).click(function() { // binding onclick to thumbs
                            //         var e = $(this).attr('class').split(" ")[0]; //$(this).parent().attr('class'); >> li
                            //         var i = $(this).attr('class').split(" ")[1];

                            //         //alert("YAS");

                            //         $(thes).find('#photo').attr('src', 'images/'+i);

                            //         currentPic = [];
                            //         //alert(e);

                            //        //alert("CLICK");
                                   
                            //         currentPic.push(i);
                                    
                            //         currentPicName = [];
                            //         currentPicName.push(e);
                                        
                                        

                            //         return false;
                            //     });
                            //     //tn.src = 'images/thumb_' + fotos[key][index][2];  
                            // });  
                                
                            // $('#thumbs li').click(function(){

                                
                            //     //alert($(this).find('img').attr('class').split(" ")[0]);

                            //     //$(this).find('.dos')[0].click();
                            //     var i = $(this).find('img').attr('class').split(" ")[1];
                            //     $(thes).find('#photo').attr('src', 'images/'+i);

                            //     $(this).find('img')[0].click();
                            // });




                            $('#thumbs li').click(function(){
                                

                                    
                                //var a = $($(el).find('li')[index]).find('img')[0];
                                    var ii = $(this).find('img').attr('class').split(" ")[1];
                  
                                    var e = $(this).find('img').attr('class').split(" ")[2]; //$(this).parent().attr('class'); >> li
                                    var i = $(this).find('img').attr('class').split(" ")[1];

                                    //alert(ii);

                                    //$(thes).find('#photo').attr('src', 'images/'+i);

                                    currentPic = [];
                                    //alert(e);

                                   //alert("CLICK");
                                   
                                    currentPic.push(i);
                                    
                                    currentPicName = [];
                                    currentPicName.push(e);




                                
                                //alert($(this).find('img').attr('class').split(" ")[0]);

                                //$(this).find('.dos')[0].click();
                                
                                $(thes).find('#photo').attr('src', 'images/'+ii);

                                $(this).find('img')[0].click();


                            });













                                if ((index + 1) < fotos[key].length) {

                                    
                                    
                                    
                                    $(thes).find('#loading strong').html(index + 2);
                                    $("#photo").css('visibility', 'hidden');

                                    $('#gallery ul#thumbs li').css('left',window.innerWidth/2-($('#gallery ul#thumbs li').width()/2)+'px');
                                    $('#gallery ul#thumbs li').css('bottom','60%'); // window.innerHeight/2+'px'
                                   // thes.load_thumbs(el, (index + 1), 'gallery');
                                   /// addding this line does it, but it doesn't come back to get the photo/url going

                                    loadInsideGallery(name, el, (index + 1));

                                } else {

                                    $(thes).find('#loading').html('Finished loading <strong>' + fotos[key].length + '</strong> images');

                                    //$($(thes).find('#thumbs li .'+whatGal)[0]).click(); ////opens first
                                        $("#thumbs li").find('.'+whatGal)[0].click();

                                      $("#photo").css('visibility', 'visible');
                                      $("#photo").css('display', 'block');

                                      $('#gallery ul#thumbs').css('bottom',0);
                                      $( "#sets li" ).show();
                                      loading=false;
                                      
                                }



                        }else{
                             if ((index + 1) < fotos[key].length) {

                                    
                                
                                   
                                    $(thes).find('#loading strong').html(index + 2);
                                    $("#photo").css('visibility', 'hidden');

                                    $('#gallery ul#thumbs li').css('left',window.innerWidth/2-($('#gallery ul#thumbs li').width()/2)+'px');
                                    $('#gallery ul#thumbs li').css('bottom','60%'); // window.innerHeight/2+'px'
                                   // thes.load_thumbs(el, (index + 1), 'gallery');
                                   /// addding this line does it, but it doesn't come back to get the photo/url going

                                     loadInsideGallery(name, el, (index + 1));

                                } else {

                                    $(thes).find('#loading').html('Finished loading <strong>' + fotos[key].length + '</strong> images');

                                        // alert("LLL"+$(thes).find('#thumbs li img').attr('class').split(" ")[0]);

                                        // alert($(thes));

                               
                                        //alert(whatGal);
                                   // $($(thes).find('#thumbs li .'+whatGal)[0]).click(); ////opens first
                                   $("#thumbs li").find('.'+whatGal)[0].click();
                                    
                                      $("#photo").css('visibility', 'visible');
                                      $("#photo").css('display', 'block');

                                      $('#gallery ul#thumbs').css('bottom',0);
                                     $('#iframe').css('height',$('#gallery').height()+'px');
                                     $( "#sets li" ).show();
                                     loading=false;
                                }
                            // tn.src = 'images/thumb_' + fotos[key][index][2];     
                        


                        }////// ELSE IF  fotos[key][index][1]==whatGal



                        });//// end Each fotos

                                 
                       
                      

                    } ///// end loadinsideGal

                //end if insideGallery.type
                //
                }else if(loadType=='normal'){


                //alert(images[set][0][0]);
                loading=true;

                currentVidFilter = [];

                $('.filter').hide();

                $('#gallery ul#thumbs').css('bottom','60%');
                $('#iframe').hide();
                $('html').css('overflow','visible');
                $('.iframe-close').hide();
                $('.insidegal-close').hide();

                $('#vid-thumbs').hide();    


                                                                            
////////////////////////////////////////
///////////////////////////////                     src="http://192.***/images....
//////                                                                               ON ALL src 
//////////////////////////////////////

                $(el).append('<li><img class="' + thes.setimgs[1][index][0] + ' '+thes.setimgs[1][index][1]+ '" src="images/' + thes.setimgs[1][index][1] + '" /></li>');  // thumb_


                dropdownFunc(rememberWich, x); /// smoooth
                x++;

                $('li img')[0].click();  // yep. first

                var tn = new Image();
                $(tn).load(function() {
                    

                    
                    allPics.push([thes.setimgs[1][index][0],thes.setimgs[1][index][1]]);   /////////////   push ALSO THE NAME, to compare!!!  (and get rid of newI....)

                    var a = $($(el).find('li')[index]).find('img')[0];
                    $(a).append(this);
                    $(a).click(function() { // binding onclick to thumbs
                        var e = $(this).attr('class').split(" ")[0]; //$(this).parent().attr('class'); >> li
                        var i = $(this).attr('class').split(" ")[1];

                        $(thes).find('#photo').attr('src', 'images/'+i);


                        currentPic = [];
                        currentPic.push(i);
                        
                        currentPicName = [];
                        currentPicName.push(e);
                        


                        return false;
                    });

                    //alert("L ="+thes.setimgs[0].length);
                    if ((index + 1) < thes.setimgs[1].length) {


                        thes.load_thumbs(el, (index + 1), 'normal');
                        $(thes).find('#loading strong').html(index + 2);
                        $("#photo").css('visibility', 'hidden');

                        $('#gallery ul#thumbs').css('left',window.innerWidth/2-($('#gallery ul#thumbs').width()/2)-6+'px');  // for some reason it is 6 pixels to the right (judging by eye)

                        $('#gallery ul#thumbs').css('bottom','60%'); // window.innerHeight/2+'px'
                        

                        //$('#gallery ul#thumbs').css('bottom',(window.innerHeight/2)*2+'px');
                        ////  while still loading, pull thumbs css.top lower, so its in the middle, like that loading text
                    } else {
                        $(thes).find('#loading').html('Finished loading <strong>' + thes.setimgs[1].length + '</strong> images');
                        $('.uno').click();
                          $("#photo").css('visibility', 'visible');
                           $('#gallery ul#thumbs').css('bottom',0);
                       // $('#gallery ul#thumbs').css('bottom','0');
                       //alert($('#gallery ul#thumbs').width());

                        $('.left-arrow').fadeIn('250');
                        $('.right-arrow').fadeIn('250');

                        ////  derepente hacer lo mismo con los sets li 
                        $( "#sets li" ).show();
                        $( "#sets li" ).show();
                        loading=false;


                    }
                });
                
                tn.src = 'images/' + thes.setimgs[1][index][1];  // thumb_

                //if normal.type
                }



            }







            //// set vids - thumbs-vid
            else{

                $('.filter').show();
                $('.left-arrow').hide();
                $('.right-arrow').hide();

                $('#vid-thumbs').show();    
                ////  ALSO append names in galleries!!!  >> and style arrows


                $(el).append('<li class="'+thes.setimgs[1][index][4]+'"> <h4 class="vid-name">'+thes.setimgs[1][index][0]+'</h4> <h3 class="vid-artist">'+thes.setimgs[1][index][1]+'</h3><img class="' + thes.setimgs[1][index][3]+'" src="images/' + thes.setimgs[1][index][2] + '" />  </li>');
                
                
                dropdownFunc(rememberWich, x); /// smoooth
                x++;
                //alert('ACA');

                //when click on BUTTON look in currentVidFilter and display all the videos whos .attr('class').split(" ")[1]) 
                          ///  is equal to the BUTTON.value (or name.. whatever)

                //alert(currentVidFilter[0]);

                // alert(window.innerWidth*0.04);  //// window.innerWidth*0.04 =>>>  #vid-thumbs li_width  - 2% + 2%  padding on the sides

                $('#vid-thumbs li img').css('height',$('#vid-thumbs li').width()-window.innerWidth*0.04+'px');

                var tn = new Image();
                $(thes).find('#photo').hide();


                 $(tn).load(function() {

                    var a = $($(el).find('li')[index]).find('img')[0];
                    $(a).append(this).addClass('vid');



                    var o = thes.setimgs[1][index][4];

                
                    //$(a).parent().addClass('videazo');

                    currentVidFilter.push(o);

                    //alert(currentVidFilter[1]);

                    $(a).click(function() { // binding onclick to thumbs
                        var i = $(this).attr('class').split(" ")[0];
                        //var e = $(this).parent().attr('class');
                        //alert($(this).attr('class').split(" ")[0]);
                       //alert($(this).parent().attr('class'));
                       // console.log(Math.round($(window).scrollTop()));


                        $(thes).find('#iframe').attr('src', i);

                        $(thes).find('#iframe').css('top',Math.round($(window).scrollTop())+'px');
                        $(thes).find('.iframe-close').css('top',Math.round($(window).scrollTop())+'px');  

                        $('#iframe').css('height',$('#gallery').height()+'px');
                        $('#iframe').show();
                        $('.iframe-close').show();

                        $('html').css('overflow','hidden');

                        //alert(currentPicFilter[0]);

                        return false;
                    });


                    if ((index + 1) < thes.setimgs[1].length) {
                        thes.load_thumbs(el, (index + 1), 'normal');
                        $(thes).find('#loading strong').html(index + 2);
                       
                    } else {
                        $(thes).find('#loading').html('Finished loading <strong>' + thes.setimgs[1].length + '</strong> images');

                        $( "#sets li" ).show();
                        loading=false;
                        //  ////  get this according to [2]>> artists!!

                       //  //FILTER GENERATOR!! 
                       //  for (var i = 0; i < currentVidFilter.length; i++) {
                       
                       //  ////put into array to check that it isnt one with that name already!
                       //      if(typeof currentVidFilterButton[0]=="undefined"){

                       //          //// put into array...
                       //          currentVidFilterButton.push(currentVidFilter[i]);
                       //      }else{
                
                       //          ///...to check that it isnt one with that name already!
                       //          if(!match(i)){
                       //              //// put into array...
                       //              currentVidFilterButton.push(currentVidFilter[i]);
                       //          }

                       //      }
                       //  }

                       //  //FILTER GENERATOR!! 

                       //  $('#gallery').after('<div id="all" class="filter">all</div>');
                       //  for (var m=0; m<currentVidFilterButton.length; m++) {
                       //     $('#gallery').after('<div id="'+currentVidFilterButton[m]+'" class="filter">'+currentVidFilterButton[m]+'</div>');
                       //  }

                       // // FILTER CLICK!! 

                       //  $('.filter').click(function(){

                             
                       //      //$('#vid-thumbs li').hide();
                       //      if($(this).attr('id')=='all'){
                       //          $('#vid-thumbs li').show();
                       //      }else{
                       //          $('#vid-thumbs li').hide();
                       //      $('#vid-thumbs').find('li.'+$(this).attr('id')+'"').show();
                       //      }
    
                       //  });



 
                    }/// else // if(index + 1) < thes.setimgs.length

                });//// (tn).load(function()



                tn.src = 'images/' + thes.setimgs[1][index][2]; // thumb_


            }/// ELSE   set vids - thumbs-vid
            //alert( thes.setimgs[0][index][3]);
        

        }//thes.load_thumbs



                    function dropdownFunc(which, x){

                        //// a lot bigger if else to figure if video or photo set

                        var w = which;

                            if(set==w){  /// if the set we are in equals to the set of the vids whos droppdown we are clicking
                                                                                                    ///.... kinda confusing, but it works

                                $('#vid-thumbs li').show();

                                return;
                                 
                            }else{

                                $('#vid-thumbs li').show();
                                $('#vid-thumbs li').hide();

                                $('#vid-thumbs').find('li.'+w+'"').show();
                                  
                                return; 
                            }

                        
 

                    }

        function match(i){

            var yesMatch=false;
            var noMatch=false;

            for (var j=0; j<currentVidFilterButton.length; j++) {

                //alert(currentVidFilter[i]);
                if(currentVidFilter[i]==currentVidFilterButton[j]){
                    yesMatch =true;
                }else{
                    noMatch =true;
                }
                                        
                                        
            }

            //put into variables so it lets the for loop finish before deciding

            if(yesMatch){
                return true;
            }else if(noMatch&&!yesMatch){
                return false;
            }


        }

        function matcho(k, v){

            var value = v;
            var key = k;

            var yesMatch=false;
            var noMatch=false;

            for (var j=0; j<dropdown.length; j++) {
                //alert('dbd'+dropdown[j][1]);
            
                //alert(currentVidFilter[i]);
                if(value==dropdown[j][1]&&key==dropdown[j][0]){
                    yesMatch =true;
                }else{
                    noMatch =true;
                }
                                        
                                        
            }

            //put into variables so it lets the for loop finish before deciding

            if(yesMatch){
                return true;
            }else if(noMatch&&!yesMatch){
                return false;
            }


        }




        // oninit - load sets for gallery
        //g.load_sets($(g).find('#sets')[0]);
        thes.load_sets($(thes).find('#sets')[0]);



        ///desvincular iframe de nuestra relacion
        $('.iframe-close').click(function(){

            $('#iframe').hide().attr('src', '');
             $('.iframe-close').hide();
             $('html').css('overflow','visible');
        });


        ///desvincular iframe de nuestra relacion
        $('.linko').click(function(){

            $.each(artists, function(key, value) { 

                //alert('K ='+key);
                //alert(artists[key][1][1]);

                ///// "mojon" sera la class(var) de donde haya apretado el link
                if(key=='mojon'){
                   //alert(artists[key][0][2]);

                    ///that's essentialy IT_________
                }
                //if()

            });


        });

        $('.forced-linko').click(function(){
                var clickIndex;
        
                        for (var i = 0; i <keys.length; i++) {
                        //alert(sets[i][0]);
                           if(rememberWich==$('#sets').find('li:nth-child('+(i+1)+') a').attr('class')){
                                //clickHere=$('#sets').find('li:nth-child('+(i+1)+') a');


                                clickIndex=i;
                              
                               //alert( $("'."+$('#sets').find('li:nth-child('+(i+1)+') a').attr('class')+"'").parent().attr('class'));   

                               
                            }
                        }
                        

                        $('#sets li:nth-child('+(3)+')').find('a')[0].click();

                        forcedLink=true;

                        ///// gotta set a variable, and then if on, do this somewhere
                        //$("#thumbs li").find('img .uno')[0].click();

                        /// then hoooks to the targeted gallery
         });


        $('.left-arrow').click(function(){
            arrowClick("left");
        });
        $('.right-arrow').click(function(){
            arrowClick("right");
        });
           // alert(currentPicName);

        function arrowClick(direction){

            //alert(allPics.length);
            

            ///gor the right length now, but not finding the right photo


            for (var i = 0; i <allPics.length; i++) {

                /// make sure that even if pic is the same, 
                //// it doesn't have the same name too

                //alert(currentPic);

                ///  NOW CHECK THAT GETS THE ONE WHERE NAME IS SAME, BUT UNIQUE ID FROM THE ONE BEFORE

                ///alert(currentPicName);



                ///THERE YOU GO, its almost, almost WORKING
                

                if(allPics[i][1]==currentPic&&allPics[i][0]==currentPicName){
                    var nextIndex;
                    var nextIndexName;

                    if(direction=="left"){


                        if(typeof allPics[i-1]=="undefined"){
                            nextIndex=allPics[allPics.length-1][1];
                            nextIndexName=allPics[allPics.length-1][0];
                
                        }else{
                            nextIndex=allPics[i-1][1]; 
                            ///get i, then test aginst set to get name
                            nextIndexName=allPics[i-1][0];
                        }
                    }else if(direction=="right"){
                      
                        if(typeof allPics[i+1]=="undefined"){
                            nextIndex=allPics[0][1];
                            nextIndexName=allPics[0][0];
                
                        }else{
                            nextIndex=allPics[i+1][1]; 
                            ///get i, then test aginst set to get name
                            nextIndexName=allPics[i+1][0];
                        }
                    
                    }
                   // alert("a la izquiera tenemos: "+nextIndex);

                }

            }/// for allPics-Vids, whatever

            //alert(nextIndex);

            currentPic = [];
            currentPic.push(nextIndex);

            currentPicName = [];
            currentPicName.push(nextIndexName);
            

            $(thes).find('#photo').attr('src', 'images/'+nextIndex); ////  no necesariamente
                                                                        ///      lo que tengo que cargar es lo que seria la anterior segun allPics!


        }// arrowClick()


        $("#gallery ul#thumbs").hover(
          function() {
            if(!loading){
                $(this).stop().animate({
                    bottom: "20px"
                  }, 300 );
            }
          }, function() {

            if(!loading){
                 $(this).stop().animate({
                    bottom: "0"
                  }, 300 );
             }
          }
        );


    /// dropdown on hover automatizado

    $( "#sets li" ).hover(
        function() {
            

            //alert(setsHover.length);
            ///////////loop sets that contain videos(or articles)...so categories for filtering
            for (var c=0; c<setsHover.length; c++) {


                //alert(setsHover[c]); //// make sure the one you are hovering is one of this sets to hover on
                if($(this).attr('class')==setsHover[c]) {
                    //alert('I mean hello');
                    /// and show it
                    $( this ).find('a').show();

                    
                    var dropdownTop=100;

                    for(var i =0; i<$( this ).find('a').siblings().length-1; i++){

                        //alert(dropdownTop);                            /// each one below the last one
                        $(this ).find('a:nth-child('+(i+2)+')').css({'top':dropdownTop+'%', 'z-index':'1'});   ///  100% * amountSiblings[loop.index]

                        dropdownTop+=100;
                    }


                }
            
            }


          }, function() {
             $( this ).find('a').not(':first').hide();

           }
        );

        

    }); //this.each(function()




$('#sets li a').click(function(){

    //// if not first.. bla bla

    $('#sets li a').css('color','black');
    $(this).parent().children(":first").css('color','orange');
    $(this).css('color','orange');
});


};//$.fn.gallery 





})(jQuery);