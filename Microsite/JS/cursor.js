// ENTER TEXT BELOW. CAN *NOT* INCLUDE NORMAL HTML CODE.
var text='SERENDIPITY';
var delay=40; // SPEED OF TRAIL
var Xoff=0; // PIXEL COUNT FROM THE LEFT OF THE CURSOR (- VALUES GO TO LEFT)
var Yoff=-30; // PIXEL COUNT FROM THE TOP OF THE CURSOR (- VALUES GO UP)
var txtw=14; // AMOUNT OF PIXEL SPACE EACH CHARACTER OCCUPIES
var beghtml='<font color="red";<b>'; // OPTIONAL HTML CODE THAT EFFECTS WHOLE TEXT STRING SUCH AS FONT COLOR, SIZE, ETC.
var endhtml='</b></font>'; // END HTML CODE. MOSTLY USED IF ABOVE SETTING IS USED.
//********** NO NEED TO EDIT BELOW HERE **********\\
ns4 = (navigator.appName.indexOf("Netscape")>=0 && document.layers)? true : false;
ie4 = (document.all && !document.getElementById)? true : false;
ie5 = (document.all && document.getElementById)? true : false;
ns6 = (document.getElementById && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var txtA=new Array();
text=text.split('');
var x1=0;
var y1=-1000;
var t='';
for(i=1;i<=text.length;i++){
t+=(ns4)? '<layer name="txt'+i+'" top="-100" left="0" width="'+txtw+'" height="1">' : '<div id="txt'+i+'" style="position:absolute; top:-100px; left:0px; height:1px; width:'+txtw+'; visibility:visible>';
t+=beghtml+text[i-1]+endhtml;
t+=(ns4)? '</layer>' : '</div>';
}
document.write(t);
function moveid(id,x,y){
if(ns4)id.moveTo(x,y);
else{
id.style.left=x+'px';
id.style.top=y+'px';
}}
function animate(evt){
x1=Xoff+((ie4||ie5)?event.clientX+document.body.scrollLeft:evt.pageX);
y1=Yoff+((ie4||ie5)?event.clientY+document.body.scrollTop:evt.pageY);
}
function getidleft(id){
if(ns4)return id.left;
else return parseInt(id.style.left);
}
function getidtop(id){
if(ns4)return id.top;
else return parseInt(id.style.top);
}
function getwindowwidth(){
if(ie4||ie5)return document.body.clientWidth+document.body.scrollLeft;
else return window.innerWidth+pageXOffset;
}
function movetxts(){
for(i=text.length;i>1;i=i-1){
if(getidleft(txtA[i-1])+txtw*2>=getwindowwidth()){
moveid(txtA[i-1],0,-1000);
moveid(txtA[i],0,-1000);
}else moveid(txtA[i], getidleft(txtA[i-1])+txtw, getidtop(txtA[i-1]));
}
moveid(txtA[1],x1,y1);
}
window.onload=function(){
for(i=1;i<=text.length;i++)txtA[i]=(ns4)?document.layers['txt'+i]:(ie4)?document.all['txt'+i]:document.getElementById('txt'+i);
if(ns4)document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=animate;
setInterval('movetxts()',delay);
}