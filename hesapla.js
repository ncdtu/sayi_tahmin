var a=0;var b=0;var c=0;var d=0;var e=0;var f=0;var g=0;var h=0;function bul(){if(getid('ch1').checked==true){a=1;}else{a=0;}if(getid('ch2').checked==true){b=2;}else{b=0;}if(getid('ch3').checked==true){c=4;}else{c=0;}if(getid('ch4').checked==true){d=8;}else{d=0;}if(getid('ch5').checked==true){e=16;}else{e=0;}if(getid('ch6').checked==true){f=32;}else{f=0;}if(getid('ch7').checked==true){g=64;}else{g=0;}h = a+b+c+d+e+f+g;if(h>85)msa("Hatali secim, tekrar deneyiniz",3333);else msanohide("<center><h1>"+h+"</h1></center>");}w('<style>body,table,tr,td,div{cursor:default;}.chDiv{display:block;font-size:14px;}.cont{max-width:400px;}#oyun{display:none;}</style>');