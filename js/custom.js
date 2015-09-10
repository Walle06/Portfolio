$(document).ready( function(){
	// alert(":)")
 $(window).resize( function(){
 	console.log( $(window).width() );
 });


$("#galleryLayout").mouseover( function(){
	$("#description").show();
})
$("#galleryLayout").mouseout( function(){
    $("#description").hide();
})
//
$("#galleryLayout2").mouseover( function(){
	$("#description2").show();
})
$("#galleryLayout2").mouseout( function(){
    $("#description2").hide();
})
//
$("#galleryLayout3").mouseover( function(){
	$("#description3").show();
})
$("#galleryLayout3").mouseout( function(){
    $("#description3").hide();
})
//
$("#galleryLayout4").mouseover( function(){
	$("#description4").show();
})
$("#galleryLayout4").mouseout( function(){
    $("#description4").hide();
})
//
$("#galleryLayout5").mouseover( function(){
	$("#description5").show();
})
$("#galleryLayout5").mouseout( function(){
    $("#description5").hide();
})
//
$("#galleryLayout6").mouseover( function(){
	$("#description6").show();
})
$("#galleryLayout6").mouseout( function(){
    $("#description6").hide();
})
//


 $(window).ready( function(){
 	$("#introHeader").fadeIn( 3000 );
 	$("#introContent").fadeIn( 8000 );
 })
 $(window).ready( function(){
 	$("#aboutContent").slideDown( 5000 );
 })
 $(window).ready( function(){
 	$("#resumeContent").fadeIn( 4000 );
 })
 $(window).ready( function(){
 	$("#projectFooter").fadeIn( 5000 );
 })
 $(window).ready( function(){
 	$("#contactHalf2").slideDown( 3000 );
 })
})