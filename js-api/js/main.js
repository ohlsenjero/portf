// defining sets of images (galleries)
var images = {};

var imago = {};

$(document).ready(function(){ // on document ready

// $.getJSON("http://api.open-notify.org/astros.json"),
//     function(result){
//         alert("fetched"+result.data.length + "items");
//     });
//////////  JSON data

/// set = type >>>> the one with subtype in array:  "typeVids" : [ ["NAME", "http//:dfsfdsf", "subtype"], ], "typeWhatever:[]"
// var data=$.getJSON("http://api.open-notify.org/astros.json", gotData);

// function gotData(){
//    // alert(data);
// }


    // $.each(data, function(key, value) { 

// var data=$.getJSON("https://raw.githubusercontent.com/ohlsenjero/JS-api/master/data.json", gotData);



// $.getJSON("https://ohlsenjero.github.io/JS-api/data.json", function (data) {
//      console.log(data);
//      var output = "";
//         for (var entry in data) {
//           output += "key: " + entry + " | value: " + data[entry] + "\n";
//         }
//         //console.log(output);

//         imago = data;

//     });


// function test(callback) {
//   $.getJSON("https://ohlsenjero.github.io/JS-api/data.json", function (data) {
//     callback(data);
//   });
// }

// test(function (data) {
//   console.log(data);
// });
//////////    works, but only inside the callback..

 // $.ajax({ 
 //        type: "GET",
 //        datatype: "jsonp",  
 //        url: "https://github.com/ohlsenjero/JS-api/data.json", 
 //        data: { get_param: "value" }, 
 //        success: function (data) { 
 //            var names = data
 //            alert(names);
 //        }
 //    });

    // });
// $.getJSON("http://api.open-notify.org/astros.json", function (json) {
//    alert(json);

// });


////////////////////  from JSON  >>>  set1 ==>  data[0 1 2]...

// add date field, so you can get newest ones on "home"
images = {

    "Albums" : [
    //[  index 0 >> data
    [
        "vid"
    ], [
        ["Toon Time Raw!","Jerry Paper","Toon-Time-Raw.png", "https://www.youtube.com/embed/dPw8oUmxA-Y","rock"],
        ["Floral Shoppe","Macintosh Plus","Floral-Shoppe.png", "https://www.youtube.com/embed/YcsYSJwewWk","vaporwave"], 
        ["Sales","Sales","Sales.png", "https://www.youtube.com/embed/OpxnPFWkrp0","rock"],
        ["Giant steps","John Coltrane", "Giant-steps.png", "https://www.youtube.com/embed/xr0Tfng9SP0","jazz"],
        ["Bonus Cups","Descendents", "Bonus-Cups.png","https://www.youtube.com/embed/7ba0mo7ijOc","rock"], 
        ["Post Civilization Muzak","Wolf Eyes", "Post-Civilization-Muzak.png","https://www.youtube.com/embed/B6-HrnEGa0E","noise"], 
        ["I Thought I Was An Alien","Soko","I-Thought-I-Was-An-Alien.png", "https://www.youtube.com/embed/GGSVNBIs5Wc","rock"], 
        ["Killing Time","Massacre","Killing-Time.png", "https://www.youtube.com/embed/b1kPa1PTajU","rock"], /// DOUBLE GENRE!!! dropdown[][][].split(" "......
        ["Mm.. Food","MF Doom","Mm-Food.png", "https://www.youtube.com/embed/FbpEnkDQnhk","hip-hop"]
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],"Study" : [
    //[  index 0 >> data
    [
        "vid"
    ], [
        ["Javascript Game Tutorial","Tig","Javascript-Game-Tutorial.png", "https://www.youtube.com/embed/VLpjfr7mgT0","coding"],
        ["Lesson 7","Bireli Lagrene","Lesson-7.png", "https://www.youtube.com/embed/SzkOBNKl1Iw","guitar_tech"], 
        ["Strings!","Pat Martino","Strings.png","https://www.youtube.com/embed/diS1vMkN8SY","guitar_transcribe"],
        ["Lesson Part 3","Pat Martino","Lesson-Part-3.png","https://www.youtube.com/embed/gXQYEr1oKJg","guitar_transcribe"]
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],"Various" : [
    //[  index 0 >> data
    [
        "vid"
    ], [
        ["Richie Jackson","Death Skateboards","Death-Skateboards.png", "https://www.youtube.com/embed/8gXpZmQ7j70","skate"],
        ["Evan Smith","Best of 2016","Best-of-2016.png", "https://www.youtube.com/embed/KOUarLd_tJ8","skate"], 
        ["Dylan Rieder","The True Blue","The-True-Blue.png","https://www.youtube.com/embed/xtCKZWleUNs","skate"],
        ["Aaron 'jaws' Homoki","Jaws vs the Lyon 25","Jaws-vs-the-Lyon.png","https://www.youtube.com/embed/4GFIXrybfKg","skate"],
        ["Lightning Bolt","The Metal East","The-Metal-East.png","https://www.youtube.com/embed/h9T0ICrAzqU","musicvid"],
        ["Pavement","Gold Soundz","Gold-Soundz.png","https://www.youtube.com/embed/lPvhKV3Yg2k","musicvid"],
        ["Raffalli _ Garcia","Four","Four.png","https://www.youtube.com/embed/lPvhKV3Yg2k","guitar-masters"],
        ["Postmortem","Diablo","Diablo.png","https://www.youtube.com/embed/VscdPA6sUkc","coding"],
        ["AGDQ 2015","Battletoads Co_Up Speed Run","Battletoads-Co_Up.png","https://www.youtube.com/embed/pvnsZeDQ8GE","games"]
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],
    // "Art" : [

        
        
    //         ["multi","uno","pic1.jpg", "photo"], 
    //         ["multi","dos","pic2.jpg", "photo"],
    //         ["multi","nameextrano","pic1.jpg", "photo"]
       
        

    // ],
    "Art" : [
    [
        "mono"
    ],
        [
            ["1","1.jpg", "photo"], 
            ["2","2.jpg", "photo"],
            ["4","3.jpg", "photo"], 
            ["6","4.jpg", "photo"],
            ["ty","5.jpg", "photo"], 
            ["gh","6.jpg"],
            ["4dd","7.jpg"], 
            ["12","8.jpg"], 
            ["32","9.jpg"],
            ["42","10.jpg"], 
            ["62","11.jpg"], 
            ["4dd23","12.jpg"],
            ["32","13.jpg"],
            ["42","14.jpg"], 
            ["62","15.jpg"], 
            ["4dd23","16.jpg"]
        ]
    ]
};//// end images


/// just like images = {} >>>>   artists = {}  so when click on artist"s name >>> opens this on a div on top (WHERE ARTIST = ARTIST)
artists = {
     "mojon" : [
    //[  index 0 >> data
    
        ["1","artist1","dsjfhdkfhjkhfs fjkdhfsjkdhf jkfhkjfh kjfhkjfhkjhfkjfkjf kkhf fjhfkj hf kjh ","rock"], 
        ["12","artist11","https://www.youtube.com/embed/Su5AnFlEt9g","jazz"],
        ["123","artist2","https://www.youtube.com/embed/7ba0mo7ijOc","regueton"], 
        ["Soko","artist2","https://www.youtube.com/embed/GGSVNBIs5Wc","ragamufin"], 
        ["12df","artist2", "https://www.youtube.com/embed/spaEV6jCosQ","rock"]
    
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ]

}


fotos = {

    "toalafoto":[
            ["14","dos","pic6.jpg"],        ////////  si el name de este coincide con whatGal  entonces lo abre, si no, no
            ["13","uno","pic1.jpg"], 
            ["12","uno","pic2.jpg"],
            ["0","dos","pic6.jpg"],        ////////  si el name de este coincide con whatGal  entonces lo abre, si no, no
            ["1","uno","pic12.jpg"], 
            ["2","uno","pic3.jpg"], 
            ["3","nameextrano","pic4.jpg"],
            ["4","dos","pic9.jpg"],
            ["5","dos","pic7.jpg"],
            ["6","dos","pic11.jpg"],
            ["7","dos","pic12.jpg"],
            ["8","dos","pic9.jpg"],
            ["9","dos","pic7.jpg"],
            ["10","dos","pic11.jpg"],
            ["15","dos","1.jpg"],
            ["16","dos","2.jpg"],
            ["11","dos","pic12.jpg"]

    ]
}




$("#photo, #thumbs").hide();
$("#gallery").gallery();
//$("#photo, #thumbs").show();

///maintain minimum height for gallery (so iframe looks right when the vids are filter to less than 3>> half screenHeight)
if($("#gallery").height()<window.innerHeight){
    $("#gallery").css("height", window.innerHeight+"px");   //// tb lo hace cuando ya es gigante
}else{
     $("#gallery").css("height", window.innerHeight+"px"); /// screen, not window
}


});






////  so just like I though, do artist, then think of loading images (galleries) the same way, in a relationship with an external object


