var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasNotes = document.getElementById("canvasNotes"),
    ctxNotes = canvasNotes.getContext("2d");


///guitar neck's dimensions = 24 frets, 6 strings

//fret width-height
var fWidth=50;
var fHeight=40;

var frets_string = 24;  // frets per string

var string_fret = []; // where was the click >> numbers it withing string and fret from which name, color, etc is derived
/// string_fret[x][0] >> string | string_fret[x][2] >> fret


//// so, make as wide as the screen
ctxBg.canvas.width  = fWidth*frets_string;
ctxBg.canvas.height = fHeight*6;

ctxNotes.canvas.width  = fWidth*frets_string;
ctxNotes.canvas.height = fHeight*6;

// $(document).ready(function(){
// alert(document.getElementById("head").innerHeight);
// });


var headerHeight = 100; ////// fcking does't work!! document.getElementById("head").innerHeight; /// as in the css
/// to put a header I have to draw everything from the Xpoint 0 + that header's height

var marginLeft=0; /// as in the css

var oneColor = false;

var currentOneColor = "black";

var originalColors = false;

var colorHex;
var colorVal;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawGuitar(){

    ctxBg.fillStyle = 'grey';
    ctxBg.fillRect(0,0,ctxBg.canvas.width,ctxBg.canvas.height); 

    restyle();

    $(document).ready(function(){
            //alert('mierda');
        $('#onecolorchoose').click();
        //$('#onecolor').click();/// and again to close  >> but should be diff button to chose color(#onecolor)... and to actually activate oneColor

        $('option:first-child').click(); /// so it only does it once, not once per child
       
    });



}



var note = new Notes(); /// the ideal of a note... any note


var noteValues = [{note:"C", color: "cyan"},{note:"C#", color: "cyan"},{note:"D", color: "green"}, "D#", {note:"E", color: "yellow"}, {note:"F", color: "orange"}, "F#", {note:"G", color: "red"}, "G#", {note:"A", color: "purple"}, "A#", {note:"B", color: "blue"}]; 

//alert(noteValues.findIndex(x => x.note=="E"));


///Strings tuning

//gets note number rather 
        //// to calculate the rest of the notes in that string, relative to their distance from one another 
                            /// .... in any and/or every scale:for example, from C (as in noteValues array)
function getNotes(string){

        /// this returns a number with which to calculate every succesive note in the neck
        if(string==1){
            return noteValues.findIndex(x => x.note=="E");
        }else if(string==2){
            return noteValues.findIndex(x => x.note=="B");
        }else if(string==3){
            return noteValues.findIndex(x => x.note=="G");
        }else if(string==4){
            return noteValues.findIndex(x => x.note=="D");
        }else if(string==5){
            return noteValues.findIndex(x => x.note=="A");
        }else if(string==6){
            return noteValues.findIndex(x => x.note=="E");
        }

}


setNoteSpace();/// and values >> in extension of the first function

drawGuitar();// the environment we are in (before and after clicks)



function setNoteSpace(){
    
    /// first give them coordinates of string and fret
    for (var i=0; i<6; i++) {

        for (var j=0; j<frets_string; j++) {  

            string_fret.push([(i+1), j]); /// alocates a space in string_fret array for every string/fret combination in the guitar neck           

        }; 

        setNoteValues(i+1);
    };
    

    function setNoteValues(string){/// adds values associated with that location in the neck (according to tuning), into string_fret array

    //console.log(frets_string*(string-1)+frets_string);
        for (var k=(string-1)*frets_string; k< string*frets_string; k++){

                                            
                // lower...
                if(k>=frets_string*(string-1)&&k<frets_string*(string-1)+frets_string/2){


                    ////  ahi estaba.. el k + 11 (numero) < toda la suma del currentRange  

                    if(k+getNotes(string)<=frets_string*(string-1)+11){  ////////func(string) return  > number
                        string_fret[k][2]=noteValues[k-frets_string*(string-1)+getNotes(string)];    ////////func(string) return  > number

                        //console.log("i es"+string+string_fret[k][2]);
                    }else{
                        string_fret[k][2]=noteValues[k-frets_string*(string-1)-Math.abs(getNotes(string)-12)];       ////////func(string) return  > counterNumber (number-12 plused)
                        //console.log("i es"+string+string_fret[k][2]);
                    }

                // ... and upper half of the neck
                }else if(k>=frets_string*(string-1)+frets_string/2&&k<frets_string*(string-1)+frets_string){

                    if(k+getNotes(string)<=(frets_string*(string-1)+frets_string/2)+11){   
                        
                       string_fret[k][2]=noteValues[k-frets_string*(string-1)-frets_string/2+getNotes(string)]; 
                       ///// -frets_string/2 since the noteValues goes to 12 only.. we've gone over the part of the neck were the notes start repeating
                        
                       //console.log("i es"+string+string_fret[k][2]);
                           
                    }else{
                       string_fret[k][2]=noteValues[k-frets_string*(string-1)-12-Math.abs(getNotes(string)-12)]; /// -12 => -half the neck
                      // console.log("i es"+string+string_fret[k][2]);
                      
                    }         
                }
            
        }///for

    }//get func

}


/////////          CLICK on NOTE behaviour

//// get MOUSE when clicking canvasNotes >> overlay (over Neck)
document.getElementById('canvasNotes').addEventListener('click',function(evt){

   note.locate(evt);

},false);


// the Note object only keeps track of a Note that has been "clicked" in the guitar, and which has string and fret coordinates.
// the whole construct of what that should mean is not up to the "Luthier"
function Notes(){
    //notes in the sense of "location in the neck".. 
    this.string;
    this.fret;
}


Notes.prototype.locate = function (evt, from) {

    //alert(evt.clientX + ',' + evt.clientY);

    for(var i=0; i<frets_string; i++){
        if(evt.clientX-marginLeft>=(fWidth)*i && evt.clientX-marginLeft < (fWidth)*(i+1)){
            this.fret=i;
        }
    }

    for(var j=0; j<6; j++){
        if(evt.clientY-headerHeight>=(fHeight)*j && evt.clientY-headerHeight < (fHeight)*(j+1)){
            this.string=j;
        }
    } 

    this.draw(this.string, this.fret);
}



Notes.prototype.draw = function (string, fret, redraw, originalColors) {

    //// acording to string & fret >>> function that return NOTE  >> then gets color 
    /// looks for the value set initially to that fret (in the guitar, and according to current tuning)

    
    if(!originalColors){
        if(!oneColor){
            
            ctxNotes.fillStyle = getColor(string_fret[fret+frets_string*(string)][2].note); 
            
            //alert(getColor(string_fret[fret+frets_string*(string)][2].note));
        }else{
            ctxNotes.fillStyle = currentOneColor;  ////   or the color to which oneColor is set <<< so not a var, but array  instead[true, color]
        }
        ///getColor >>> also getText or whatever.. or all inside getColor << getWhatever associated to that note
    }else{
        console.log(string_fret[fret+frets_string*(string)][4]);
        ctxNotes.fillStyle = string_fret[fret+frets_string*(string)][4];
    }
    ///else    get  string_fret[fret+frets_string*(string)][4]  for color ...


    if(!redraw){

        if(string_fret[fret+frets_string*(string)][3]!="drawn"){
        
            ctxNotes.fillRect(fWidth*fret,fHeight*string,fWidth,fHeight); 
            string_fret[fret+frets_string*(string)][3]="drawn"; 
            
            string_fret[fret+frets_string*(string)][4]= ctxNotes.fillStyle; 
            ////// solo hacer aca, asi literalmente recuerda solo el color de la primera vez que dibuja la nota
                     

        }else{
            //alert(fWidth*fret);
            ctxNotes.clearRect(fWidth*fret,fHeight*string,fWidth,fHeight);
            string_fret[fret+frets_string*(string)][3]="erased";
        }
    }else{
         ctxNotes.fillRect(fWidth*fret,fHeight*string,fWidth,fHeight); 
            string_fret[fret+frets_string*(string)][3]="drawn"; 

    }

}


function redraw(){

    clearCtx(ctxNotes);    

    for (var i=0; i < string_fret.length; i++) {
        //alert(string_fret[i][3]); ///  [0] = string, [1] = fret, [2] = {note,color}, [3] = "drawn"

        if(string_fret[i][3]=="drawn"){

            if(originalColors){
                note.draw(string_fret[i][0]-1, string_fret[i][1], true, true);
            }else{
                note.draw(string_fret[i][0]-1, string_fret[i][1], true, false);
            }


        }
       
       /// this loop inside   note.draw(string, fret, ONECOLOR) >>> if one color ON >> draw all that color, or draw all accroding to note's colors
       //
       //   
    };

}

function restyle(){

    var x = document.getElementById("select").selectedIndex;
           
    if(document.getElementsByTagName("option")[x].value==colorVal){
        $(document.getElementsByTagName("option")[x]).css('backgroundColor', '#' + colorHex);
    }

    $('#select').children('option').each(function () {
        //alert(this.value);
        for (var i=0; i < noteValues.length; i++) {

            if(noteValues[i].note==this.value){
                $(this).css('backgroundColor', noteValues[i].color);
            }
        }//for
    });
}



function getColor(note){

// if not black switch on.. eles return 'black' (or whatever  color the switch is set one >>>  one color switch)
    
    if(typeof note!="undefined"){
        for (var i=0; i<noteValues.length; i++) {
            if(noteValues[i].note==note){
                return noteValues[i].color;
                // alert(noteValues[i].color);
            }
        }//for loop
    }
}





function clearCtx(ctx) {
   ctx.clearRect(0, 0, 1000, 1500);
}




/////////////////////////////////////////////
//////////////////////////////////
///////////////////                                     BUTTONS 

document.getElementById('onecolor').addEventListener('click',function(){

    //if not on, else.... turn off..............                  //////////////////   USAR BOTON DISTINTO PARA ACTIVAR DESACTIVAR
    if(oneColor){
        oneColor=false;
       
    }else{
        oneColor =true;   //// press again >> untrue

    }

  
    /// end else   
});

document.getElementById('onecolorchoose').addEventListener('click',function(){

        oneColorChoose();
  
});

document.getElementById('drawreset').addEventListener('click',function(){

    redraw();
});

// & erase


document.getElementById('originalcolors').addEventListener('click',function(){
    
    if(originalColors){
       originalColors =false;
       
    }else{
       originalColors =true;

    }
   console.log(originalColors);
});



function oneColorChoose(){


    $('#onecolorchoose').ColorPicker({
        color: '#000000',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);

            currentOneColor = "#"+colorHex;

            return false;
        },
        onChange: function (hsb, hex, rgb) {

            colorHex = hex;

        }   
    });
}

//////////

/// select NOTE to change color  << from dropDown
$('option').click(function(){
     

    changeColor(this.value)


});

////  GOOD, only first try not working!!

function changeColor(val){

//needs to remember val, otherwise it will lose it after going through.ColorPicker
//alert(colorVal);
colorVal=val;


/// loop through dropdown> #select - children values >>> 
///                                     loop noteValues,,, if(noteValues[j].note== i) this child.background-color: noteValues[j].color''
/// then.......
$('#onecolordrop').trigger('click');

    $('#onecolordrop').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);

            for (var i=0; i < noteValues.length; i++) {

                if(noteValues[i].note==colorVal){
                    //alert(colorVal);
                    noteValues[i].color="#"+colorHex;     
                    //alert(noteValues[i].color);
                }
            }///for

            restyle();

            /// ....... redraw >> which should now grab the new color values  << when getColor inside note.draw...
            redraw();

            return false;
        },
        onChange: function (hsb, hex, rgb) {

            colorHex = hex;

        }   
    });
}



/// -------------------------------------------------------------------------------------------------------------------------------------------

/// color cue on buttons, style  yyy estamos!!
//
//   y erase button...
//
/// in time.. ability to save, etc (save to node.js too) ......................................................................................