//Javascript

var main = function(){
	
  var whatif = ["what if... my app helped conversions by..","what if...my website connected readers to...","what if...my brand experience went viral with...","what if...my operations were streamlined by...","what if...my customers could touch my products through... ","what if...users smile because..."];
  $("#whatif").autocomplete({source:whatif});
   
  $("#whatif").typed({
        stringsElement: $('#typed-strings'),
        showCursor: true,
        cursorChar: "|",
        typeSpeed: 30,
        backSpeed: -20
      });
};
 
$(document).ready(main);