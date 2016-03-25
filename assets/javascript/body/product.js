$(document).ready(function() {
  $("body.mw_product").each(function() {
    $('.ProductThumbImage').removeAttr('style');
  	var selector1 = $('.ProductThumbImage').find('#a_tag');
  	selector1.removeAttr('onclick');
    var selector = $('.ProductContainer').find('#showproductThumbImage');

    for (var i = 0; i < selector.length; i++) {
   // 	   selector.eq(i).attr("onclick", "showProductThumbImage("+ i +", this)");

    	   selector.removeAttr('onclick');
        // selector.removeAttr('style');
        // selector.removeAttr('onmouseover');
    }

   // 	var anchor_tag = document.getElementById('a_tag');
   //  var url = anchor_tag.getAttribute("href");
   //  console.log("href: "+url);


 //   	console.log(selector.attr("onclick"));
	// if(selector.attr("onclick") === "showProductThumbImage(0, this)"){
	//    	console.log("0");
	   		
	// }
	// else if(selector.attr("onclick") === "showProductThumbImage(1, this)"){
	//    	console.log("1");
	   		
	// }
	   // else if (selector.eq(i).attr("onclick") == "showProductThumbImage(1, this)"){
	   // 		console.log("1");
	   // 		console.log(selector.attr("onclick"));
	   // }


   // for (var i = 0; i < selector.length; i++) {
   // 		selector.removeAttr('onclick');

   // 		//	selector.attr("onmouseover").name = "onclick";

   // 		selector.attr("onclick", "showProductThumbImage("+ i +", this)");
   // 		//  console.log(selector.attr("onclick", "showProductThumbImage("+ i +", this)"));
   // 		console.log(i);

   // 		//selector.removeAttr('onmouseover');
   // }

    
  });
});