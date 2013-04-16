$(function(){

	$("#slider-stage").change(function(){
    switch($(this).val()){
	    case "0":
	      $("#text-stage").text("Early Stage");
	      break;
	    case "1":
	      $("#text-stage").text("Series A");
	      break;
	    case "2":
	      $("#text-stage").text("Series B");
	      break;
 	    case "3":
	      $("#text-stage").text("Series C or higher");

      }
	}).change();


	$("#slider-money").change(function(){
			text = parseInt($(this).val()) * 10000;
			// console.log(text);
    	$("#text-money").text(text);
      
	}).change();

});