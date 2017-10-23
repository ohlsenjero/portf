(function($){

	$.fn.extend({

		intro:function(e){

var f=$(this);
var g=[' ','4','t','5','c','o','d','b','0','e','f','.','/','1','i','l','a','n','p','r','k','t'];

var h=0;
var i=items2=e.length;
function pad(a,b){return a+new Array(b-a.length+1).join(' ')}$(this).empty();

while(i--)

	if(e[i].length>h)h=e[i].length;

		while(items2--)e[items2]=pad(e[items2],h);
		
			spans=h;

		while(spans--)$(this).prepend("<span class='c"+spans+"'></span>");

			function testChar(a,b,c,d){

				if(c>=e.length)setTimeout(function(){

					testChar(0)},2);

				else if(d>=h)setTimeout(function(){
					
					testChar(0,0,c+1,0)},1);

	else{

		$(f).find('.c'+a).html((g[b]==" ")?"&nbsp;":g[b]);

		setTimeout(function(){

			if(b>g.length)testChar(a+1,0,c,d+1);

			else if(g[b]!=e[c].substring(d,d+1).toLowerCase())testChar(a,b+1,c,d);

			else testChar(a+1,0,c,d+1)},1)}}testChar(0,0,0,0)
	}//intro

	})//$.fn.extend

})(jQuery);


