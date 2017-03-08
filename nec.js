/* c Necdet_Yazilimlari
#-Icindekiler-#
Title
Style
get(ad)
encode64(input)
decode64(input)
encodeHex(str)
decodeHex(str)
ch(box,div,deger)
necalfi(a)
necalfo(a)
second()
minute()
hour()
day()
month()
year()
signicin()
sign()
img(a)
wri(txt)
msg(mess)
getid(ID)
rnd(num)
qn(question,qu)
yn(question)
ulet(txt)
dlet(txt)
len(txt)
factorial(fac)
rndcolor()
rndsym(deger)
reload()
perc1(x,y)
perc2(a,b)
nzaman()
nwin(link,en,boy)
hr(link)
nwri(metin,en,boy)
src(jsname)
contact()
imgbtn(is,resid,metn)
split(katar,ayrac,sayi)
msa(a,b)
msanohide(a)
msac(a)
msac2(a)
thisfile()
create(a,b,c)
str_html(str)
html_str(str)
*/

document.title+=" Necdet_Yazilimlari";

(function(){
   document.$_GET = [];
   var urlHalves = String(document.location).split('?');
   if(urlHalves[1]){
      var urlVars = urlHalves[1].split('&');
      for(var i=0; i<=(urlVars.length); i++){
         if(urlVars[i]){
            var urlVarPair = urlVars[i].split('=');
            document.$_GET[urlVarPair[0]] = urlVarPair[1];
         }
      }
   }
})();
/* ---------------- */
function get(ad) {return document.$_GET[ad];}
/* ---------------- */
var keyStr = "ABCDEFGHIJKLMNOP" +
                "QRSTUVWXYZabcdef" +
                "ghijklmnopqrstuv" +
                "wxyz0123456789+/" +
                "=";

   function encode64(input) {
      var output = "";
      var chr1, chr2, chr3 = "";
      var enc1, enc2, enc3, enc4 = "";
      var i = 0;

      do {
         chr1 = input.charCodeAt(i++);
         chr2 = input.charCodeAt(i++);
         chr3 = input.charCodeAt(i++);

         enc1 = chr1 >> 2;
         enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
         enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
         enc4 = chr3 & 63;

         if (isNaN(chr2)) {
            enc3 = enc4 = 64;
         } else if (isNaN(chr3)) {
            enc4 = 64;
         }

         output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
         chr1 = chr2 = chr3 = "";
         enc1 = enc2 = enc3 = enc4 = "";
      } while (i < input.length);

      return output;
   }

   function decode64(input) {
      var output = "";
      var chr1, chr2, chr3 = "";
      var enc1, enc2, enc3, enc4 = "";
      var i = 0;

     
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
         alert("There were invalid base64 characters in the input text.\n" +
               "Valid base64 characters are A-Z, a-z, 0-9, '+', '/', and '='\n" +
               "Expect errors in decoding.");
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      do {
         enc1 = keyStr.indexOf(input.charAt(i++));
         enc2 = keyStr.indexOf(input.charAt(i++));
         enc3 = keyStr.indexOf(input.charAt(i++));
         enc4 = keyStr.indexOf(input.charAt(i++));

         chr1 = (enc1 << 2) | (enc2 >> 4);
         chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
         chr3 = ((enc3 & 3) << 6) | enc4;

         output = output + String.fromCharCode(chr1);

         if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
         }
         if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
         }

         chr1 = chr2 = chr3 = "";
         enc1 = enc2 = enc3 = enc4 = "";

      } while (i < input.length);

      return output;
   }
/* ---------------- */
function ntos(n){
    n=n.toString(16);
    if (n.length == 1) n="0"+n;
    n="%"+n;
    return unescape(n);
}
var digitArray = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
function toHex(n){
    var result = ''
    var start = true;
    for (var i=32; i>0;){
        i-=4;
        var digit = (n>>i) & 0xf;
        if (!start || digit != 0){
            start = false;
            result += digitArray[digit];
        }
    }
    return (result==''?'0':result);
}
function pad(str, len, pad){
    var result = str;
    for (var i=str.length; i<len; i++){
        result = pad + result;
    }
    return result;
}

function encodeHex(str){
    var result = "";
    for (var i=0; i<str.length; i++){
        result += pad(toHex(str.charCodeAt(i)&0xff),2,'0');
    }
    return result;
}
var hexv = {
  "00":0,"01":1,"02":2,"03":3,"04":4,"05":5,"06":6,"07":7,"08":8,"09":9,"0A":10,"0B":11,"0C":12,"0D":13,"0E":14,"0F":15,
  "10":16,"11":17,"12":18,"13":19,"14":20,"15":21,"16":22,"17":23,"18":24,"19":25,"1A":26,"1B":27,"1C":28,"1D":29,"1E":30,"1F":31,
  "20":32,"21":33,"22":34,"23":35,"24":36,"25":37,"26":38,"27":39,"28":40,"29":41,"2A":42,"2B":43,"2C":44,"2D":45,"2E":46,"2F":47,
  "30":48,"31":49,"32":50,"33":51,"34":52,"35":53,"36":54,"37":55,"38":56,"39":57,"3A":58,"3B":59,"3C":60,"3D":61,"3E":62,"3F":63,
  "40":64,"41":65,"42":66,"43":67,"44":68,"45":69,"46":70,"47":71,"48":72,"49":73,"4A":74,"4B":75,"4C":76,"4D":77,"4E":78,"4F":79,
  "50":80,"51":81,"52":82,"53":83,"54":84,"55":85,"56":86,"57":87,"58":88,"59":89,"5A":90,"5B":91,"5C":92,"5D":93,"5E":94,"5F":95,
  "60":96,"61":97,"62":98,"63":99,"64":100,"65":101,"66":102,"67":103,"68":104,"69":105,"6A":106,"6B":107,"6C":108,"6D":109,"6E":110,"6F":111,
  "70":112,"71":113,"72":114,"73":115,"74":116,"75":117,"76":118,"77":119,"78":120,"79":121,"7A":122,"7B":123,"7C":124,"7D":125,"7E":126,"7F":127,
  "80":128,"81":129,"82":130,"83":131,"84":132,"85":133,"86":134,"87":135,"88":136,"89":137,"8A":138,"8B":139,"8C":140,"8D":141,"8E":142,"8F":143,
  "90":144,"91":145,"92":146,"93":147,"94":148,"95":149,"96":150,"97":151,"98":152,"99":153,"9A":154,"9B":155,"9C":156,"9D":157,"9E":158,"9F":159,
  "A0":160,"A1":161,"A2":162,"A3":163,"A4":164,"A5":165,"A6":166,"A7":167,"A8":168,"A9":169,"AA":170,"AB":171,"AC":172,"AD":173,"AE":174,"AF":175,
  "B0":176,"B1":177,"B2":178,"B3":179,"B4":180,"B5":181,"B6":182,"B7":183,"B8":184,"B9":185,"BA":186,"BB":187,"BC":188,"BD":189,"BE":190,"BF":191,
  "C0":192,"C1":193,"C2":194,"C3":195,"C4":196,"C5":197,"C6":198,"C7":199,"C8":200,"C9":201,"CA":202,"CB":203,"CC":204,"CD":205,"CE":206,"CF":207,
  "D0":208,"D1":209,"D2":210,"D3":211,"D4":212,"D5":213,"D6":214,"D7":215,"D8":216,"D9":217,"DA":218,"DB":219,"DC":220,"DD":221,"DE":222,"DF":223,
  "E0":224,"E1":225,"E2":226,"E3":227,"E4":228,"E5":229,"E6":230,"E7":231,"E8":232,"E9":233,"EA":234,"EB":235,"EC":236,"ED":237,"EE":238,"EF":239,
  "F0":240,"F1":241,"F2":242,"F3":243,"F4":244,"F5":245,"F6":246,"F7":247,"F8":248,"F9":249,"FA":250,"FB":251,"FC":252,"FD":253,"FE":254,"FF":255
};
function decodeHex(str){
    str = str.toUpperCase().replace(new RegExp("s/[^0-9A-Z]//g"));
    var result = "";
    var nextchar = "";
    for (var i=0; i<str.length; i++){
        nextchar += str.charAt(i);
        if (nextchar.length == 2){
            result += ntos(hexv[nextchar]);
            nextchar = "";
        }
    }
    return result;
}
/* ---------------- */
function ch(box,div,deger)
{
if(document.getElementById(box).checked==true)
{
document.getElementById(box).checked=false;
document.getElementById(div).style.backgroundColor='#000';
document.getElementById(div).style.color='#0f0';
}
else
{
document.getElementById(box).checked=true;
document.getElementById(div).style.backgroundColor='#0f0';
document.getElementById(div).style.color='#000';
}
}
/* ---------------- */
function necalfi(a){
var mtn=ulet(a);
var ksp=mtn.split('');
var i=0;
var yksp="";
while(i<=ksp.length-1){
if(ksp[i]=="0"){yksp+="/11111"}
if(ksp[i]=="1"){yksp+="/01111"}
if(ksp[i]=="2"){yksp+="/00111"}
if(ksp[i]=="3"){yksp+="/00011"}
if(ksp[i]=="4"){yksp+="/00001"}
if(ksp[i]=="5"){yksp+="/00000"}
if(ksp[i]=="6"){yksp+="/10000"}
if(ksp[i]=="7"){yksp+="/11000"}
if(ksp[i]=="8"){yksp+="/11100"}
if(ksp[i]=="9"){yksp+="/11110"}
if(ksp[i]=="A"){yksp+="/01"}
if(ksp[i]=="B"){yksp+="/1000"}
if(ksp[i]=="C"){yksp+="/1010"}
if(ksp[i]=="D"){yksp+="/100"}
if(ksp[i]=="E"){yksp+="/0"}
if(ksp[i]=="F"){yksp+="/0010"}
if(ksp[i]=="G"){yksp+="/110"}
if(ksp[i]=="H"){yksp+="/0000"}
if(ksp[i]=="I"){yksp+="/00"}
if(ksp[i]=="J"){yksp+="/0111"}
if(ksp[i]=="K"){yksp+="/101"}
if(ksp[i]=="L"){yksp+="/0100"}
if(ksp[i]=="M"){yksp+="/11"}
if(ksp[i]=="N"){yksp+="/10"}
if(ksp[i]=="O"){yksp+="/111"}
if(ksp[i]=="P"){yksp+="/0110"}
if(ksp[i]=="Q"){yksp+="/1101"}
if(ksp[i]=="R"){yksp+="/010"}
if(ksp[i]=="S"){yksp+="/000"}
if(ksp[i]=="T"){yksp+="/1"}
if(ksp[i]=="U"){yksp+="/001"}
if(ksp[i]=="V"){yksp+="/0001"}
if(ksp[i]=="W"){yksp+="/011"}
if(ksp[i]=="X"){yksp+="/1001"}
if(ksp[i]=="Y"){yksp+="/1011"}
if(ksp[i]=="Z"){yksp+="/1100"}
if(ksp[i]=="."){yksp+="/010101"}
if(ksp[i]==","){yksp+="/110011"}
if(ksp[i]=="!"){yksp+="/00110"}
if(ksp[i]=="?"){yksp+="/001100"}
if(ksp[i]==" "){yksp+="/ "}
i++;
}
return(yksp);
}
/****/
function necalfo(a){
var mtn=ulet(a);
var ksp=mtn.split('/');
var i=0;
var yksp="";
while(i<=ksp.length-1){
if(ksp[i]=="11111"){yksp+="0"}
if(ksp[i]=="01111"){yksp+="1"}
if(ksp[i]=="00111"){yksp+="2"}
if(ksp[i]=="00011"){yksp+="3"}
if(ksp[i]=="00001"){yksp+="4"}
if(ksp[i]=="00000"){yksp+="5"}
if(ksp[i]=="10000"){yksp+="6"}
if(ksp[i]=="11000"){yksp+="7"}
if(ksp[i]=="11100"){yksp+="8"}
if(ksp[i]=="11110"){yksp+="9"}
if(ksp[i]=="01"){yksp+="A"}
if(ksp[i]=="1000"){yksp+="B"}
if(ksp[i]=="1010"){yksp+="C"}
if(ksp[i]=="100"){yksp+="D"}
if(ksp[i]=="0"){yksp+="E"}
if(ksp[i]=="0010"){yksp+="F"}
if(ksp[i]=="110"){yksp+="G"}
if(ksp[i]=="0000"){yksp+="H"}
if(ksp[i]=="00"){yksp+="I"}
if(ksp[i]=="0111"){yksp+="J"}
if(ksp[i]=="101"){yksp+="K"}
if(ksp[i]=="0100"){yksp+="L"}
if(ksp[i]=="11"){yksp+="M"}
if(ksp[i]=="10"){yksp+="N"}
if(ksp[i]=="111"){yksp+="O"}
if(ksp[i]=="0110"){yksp+="P"}
if(ksp[i]=="1101"){yksp+="Q"}
if(ksp[i]=="010"){yksp+="R"}
if(ksp[i]=="000"){yksp+="S"}
if(ksp[i]=="1"){yksp+="T"}
if(ksp[i]=="001"){yksp+="U"}
if(ksp[i]=="0001"){yksp+="V"}
if(ksp[i]=="011"){yksp+="W"}
if(ksp[i]=="1001"){yksp+="X"}
if(ksp[i]=="1011"){yksp+="Y"}
if(ksp[i]=="1100"){yksp+="Z"}
if(ksp[i]=="010101"){yksp+="."}
if(ksp[i]=="110011"){yksp+=","}
if(ksp[i]=="00110"){yksp+="!"}
if(ksp[i]=="001100"){yksp+="?"}
if(ksp[i]==" "){yksp+=" "}
i++;
}
return(yksp);
}
/* ---------------- */
function second()
{
var d=new Date();
var saniye=d.getSeconds();
return saniye;
}
function minute()
{
var d=new Date();
var dakika=d.getMinutes();
return dakika;
}
function hour()
{
var d=new Date();
var saat=d.getHours();
return saat;
}
function day()
{
var d=new Date();
var gun=d.getDate();
return gun;
}
function month()
{
var month=new Array();
month[0]="1";
month[1]="2";
month[2]="3";
month[3]="4";
month[4]="5";
month[5]="6";
month[6]="7";
month[7]="8";
month[8]="9";
month[9]="10";
month[10]="11";
month[11]="12";
var d = new Date();
var aysayi = month[d.getMonth()];
return aysayi;
}
function year()
{
var d=new Date();
var yil=d.getFullYear();
return yil;
}
/* ---------------- */
function signicin(){return('<center><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAoCAIAAABo2KMqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZrNmeMgDIbTcbaErWEbSCebw5y2ApfhEmYAgRCSQGA743iHPHMYm/+XT0IouX3MzwiBm6v868/f+ddDwLGKvG7zYxFwQCcvCxIpn7wGYLmqOq/f3R/XRXddX3Fsdu9Xu8qrZ6qwfpMCVjBr9gx6bp0Wr8/mB0mZFBq87s81D7I8OAsoXp/3UBCe0sM4tsfi+pJjkI7cAM3ylj26Mtd9bVZQtE9fYflkfvw5EUJGL+Zl8zyTl1t8kEpSGOjGzZnuMBBaV3hZ8MrKJIojcsW36d2yUH3x5lpLTSyGPdZUtltfUfp+moFFAlWaRCT0BIqZFyFHVKH9m2uGUgFeb1439rN4PZYgADdd5pBiAcw4rRbEiGsvhIYr1uyJ1sRyvbmfi+HfuuxR9WKmvliQAcsnJ8OQvu4e3Pp8JH9fnBLhvEg0uT+naNA/qs3D3p3KC0Wtno8D/it5Nu/Ighx1x79NX9n0voUX6EjaO31ZiSdwv2Nr/sw8PPgfMF8CTHdliunq/ktv/iL/1YiBOnihg0oRWCX+KsIvdHcRH/rw7O9id6k3/XzUmqd3rRhsu7+XwSzFZ/mvBuq3LtoY38s1NYJb6cjeGklzclvuj4gGJYZhmnn3vi4pmPlwfgLRsJXTCOPqUBrzH8t/gRdvR2RtiV0d5S59MZdvsjAzGWYPp1fY5b/o7OVxKWn+CF5ykSqa9s7/N97N1lePKMxgYvLKafvaCcCs1T2W9+10ufH1ILTuzp3KnETX5S/MqL+mVnm7vmhyleqr5shKXnHeQAiuLN20yEYMLR7abWhCBjR40eCAeagaL9WRafYIlNxljdyEc76V6I3c9WLGpaGvULQui+87bELIAvHe4IpIEztpt6C9z4T4xv94jud4fXXzSlYYFhPvuH4FceZCB7CSlNyBJhVwJIsRu869FWlDOVaxeVKMp/LCDWYZgSyobKOoxsKmKrwkBpaXzgPyscptEpt2Li/hTaKFoHTKby3wybRH+AaOrFbhpY91EC8ZVez2X4r3VdPtuPIstiN4VcY6gpeaRGW8ascivufno3ZaEaOjEUZhi0fZY2Ws3bxqgXvnl7W0uRL6cgeRj6z8fWF5PnpffoS+6PFIvpvcysvMZCGvnppYp0b/Ku/H8jlXWdXr5jl5jbGdvHbw6vm166wTf7868nvqn173CxWYrRLSxTK8AAAAAElFTkSuQmCC" /></center>');}
/* ---------------- */
function sign(){document.write("<br><br>"+signicin());}
/* ---------------- */
function img(a){
if(a==242)return('data:image/png;base64,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');
if(a==32)return('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEXSURBVFhH3VfRDsMgCOyn++fdMLOhBDlAui028WGzzOO8A3Yc//C01s7MIuyZuBFz5U5fvD+E1iemA/DG8ndHfAcxNk7nQwc+BgBlQxj3BzCy1Nj4CgPbANAsOliduoBeqGJAWtRlwwgAVlDUWvAoAGRXZtULXBkDs3olQaU0gIrhLHNLN1qMKkJEKz+EA+W6iTSnWzNCgRFxlnd43qzQFaBE+P4SA5pW0BXy/WUNyMOQeKVmTACzIcM6xJu9bGa3gUTUafekE7FgCQAhJLN3aFfFB5oUA3IckwwgPZgApI2sKuax508YsARZpgG6u/0ZmNUDJMKSK7CmHQ0AUn6oEqKqlvlXpA0roWak2LOLcGWVt+3MD74AdFgZkLhbNp0AAAAASUVORK5CYII%3D');}
/* ---------------- */
function wri(txt){return document.write(txt);}
/* ---------------- */
function msg(mess){return alert(mess);}
/* ---------------- */
function getid(ID){return document.getElementById(ID);}
/* ---------------- */
function rnd(num){return Math.round(Math.random()*parseFloat(num));}
/* ---------------- */
function qn(question,qu){return prompt(question,qu);}
/* ---------------- */
function yn(question){return confirm(question);}
/* ---------------- */
function ulet(txt){return txt.toUpperCase();}
/* ---------------- */
function dlet(txt){return txt.toLowerCase();}
/* ---------------- */
function len(txt){return txt.length;}
/* ---------------- */
function factorial(fac){var i=parseFloat(fac);if(i==0){return 1;}else{var sayi=1;while(1<=i){sayi=i*sayi;i--;}return sayi;}}
/* ---------------- */
function rndcolor(){
var i=1;
var boya='#';
while(i<=6){
boya+=rnd(15).toString(16);
i++;}
return boya;
}
/* ---------------- */
function rndsym(deger){
var sonuc="";
var harsay='ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxyz0123456789';
var i=1;
while(i<=deger){sonuc+=split(harsay,'',rnd(len(harsay)-1));i++;}
return sonuc;
}
/* ---------------- */
function reload(){return window.location.reload();}
/* ---------------- */
function perc1(x,y){a = parseFloat(x)/100;b = a*parseFloat(y);return b;}
/* ---------------- */
function perc2(a,b){c = parseFloat(a)/parseFloat(b);d = c*100;return d;}
/* ---------------- */
function nzaman(){getid("nzaman").innerHTML=hour()+":"+minute()+":"+second()+"<br>"+day()+"."+month()+"."+year();var timer=setTimeout("nzaman()",500);}
/* ---------------- */
function nwin(link,en,boy){window.open(link, "", "centerscreen=no, resizable=no, scrollbars=yes, dependent=no, dialog=no, minimizable=no, menubar=no, toolbar=no, location=no, personalbar=no, status=no, titlebar=no, left=4, top=4, height="+boy+", width="+en+",");}
/* ---------------- */
function hr(link){return window.location.href=link;}
/* ---------------- */
function nwri(metin,en,boy) {
var pencere=window.open("", "", "centerscreen=no, resizable=no, scrollbars=no, dependent=no, dialog=no, minimizable=no, menubar=no, toolbar=no, location=no, personalbar=no, status=no, titlebar=no, left=4, top=4, height="+boy+", width="+en+",");
pencere.document.open("text/html");
var basina="<script src=\"nec.js\"></script><table width=100%><tr><td>";
var sonuna="</td></tr><tr><td style=\"z-index:100;position:fixed;padding:4;width:100%;bottom:0;border-top:1px solid;background:#ffffff;\" align=right>Necdet_Yazilimlari&#0160;&#0160;<input type=button value=Kapat onclick=window.close(); />&#0160;&#0160;</td></tr></table>";
pencere.document.writeln(basina+metin+sonuna);
}
/* ---------------- */
function src(jsname) {
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}
/* ---------------- */
function contact() {
wri("<table class=\"btn b1\"><tr><td>Iletisim: </td><td><a href=\"javascript:nwin('https://mail.google.com/mail/?extsrc=mailto&url=mailto:necdetyazilimlari@gmail.com',800,600);\">NecdetYazilimlari@Gmail.com</a></td></tr></table>");
}
/* ---------------- */
function imgbtn(is,resid,metn){var reid=(32*parseFloat(resid));wri("<div class=btn><a onclick='"+is+"'><table><tr><td><div style=\"width:32px;background-image:url('tango.png');height:32px;background-position:0 -"+reid+"px\"></div></td><td>"+metn+"</td></tr></table></a></div>");}
/* ---------------- */
function split(katar,ayrac,sayi){var dizi = katar.split(ayrac);return(dizi[sayi]);}
/* ---------------- */
var yeninesne=document.createElement("div");
yeninesne.setAttribute('id','msa');
yeninesne.setAttribute('style','display:none;background-color:#000;padding:4px;width:100%;border:0;border-bottom:1px solid #0f0;position:fixed;top:0;left:0;z-index:999;font-family:arial;cursor:default;color:#0f0;');
document.getElementsByTagName('html')[0].appendChild(yeninesne);
/* ---------------- */
var msatm;
function msahde(){getid("msa").innerHTML="";getid("msa").style.display="none";msac("#000");}
function msa(a,b){clearTimeout(msatm);msatm=setTimeout("msahde()",parseFloat(b));getid('msa').style.display='block';getid('msa').innerHTML=a;}
function msanohide(a){getid('msa').style.display='block';getid('msa').innerHTML=a;}
function msac(a){getid("msa").style.backgroundColor=a;}
function msac2(a){getid("msa").style.color=a;}
/* ---------------- */
function wriln(a){return document.writeln(a);}
/* ---------------- */
function thisfile(){return window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);}
/* ---------------- */
function create(a,b,c){
var yeninesne=document.createElement(a);
yeninesne.setAttribute(b,c);
document.getElementsByTagName('html')[0].appendChild(yeninesne);
}
/* ---------------- */
wri('<link rel="stylesheet" type="text/css" href="nec.css" />');
wri('<link rel="stylesheet" type="text/css" href="../nec.css" />');
/* ---------------- */
var str_in;
var str_out = ""; 
var num_in;
var num_out = "";
var e = "Empty...";function str_html(str)
{
if (str=="")
alert(e);
i=0;
ret_str="";
while(i< str.length)
{
ret_str+="&#"+str.charCodeAt(i)+";";
i++;
}
return ret_str;
}function html_str(str)
{
if (str=="")
alert(e);
arr_ = str.split(";")
ret_str="";
for ( i =0; i< arr_.length; i++)
{
if (arr_[i]!="")
{
arr_[i] = arr_[i].replace(/&#/gi,'');
ret_str+=String.fromCharCode(arr_[i]);
}
}
return ret_str;
}function ascii_code()
{
if (document.code_only.karakter.value ==""){
alert(e);
return
}
alert(document.code_only.karakter.value.charCodeAt(0));
}function str_to_num(form) {
num_out = "";
if(form.input.value == "") alert(e);
else {
str_in = escape(form.input.value);
for(i = 0; i < str_in.length; i++) {
num_out += str_in.charCodeAt(i) - 23;
}
form.output.value = num_out;
form.input.value = "";
 }
}function num_to_str(form) {
str_out = "";
if(form.output.value == "") alert(e)
else {
num_out = form.output.value;
for(i = 0; i < num_out.length; i += 2) {
num_in = parseInt(num_out.substr(i,[2])) + 23;
num_in = unescape('%' + num_in.toString(16));
str_out += num_in;
}
form.input.value = unescape(str_out);
form.output.value = "";
 }
}
/* ---------------- */
function w(a){document.writeln(a);}
/* ---------------- */

/* ---------------- */
