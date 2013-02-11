$(document).ready(function(){

	function ajaxFunction() {

 var xmlhttp;
 document.getElementById("top_wrapper").innerHTML = "<p>Fetching datas...</p>";
 if (window.XMLHttpRequest) { 
   // code for IE7+, Firefox, Chrome, Opera, Safari
   xmlhttp = new XMLHttpRequest();
 } else if (window.ActiveXObject) {
   // code for IE6, IE5
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 } else {
   alert("Your browser does not support XMLHTTP!");
   return false;
 }
 xmlhttp.onreadystatechange=function() {
   if(xmlhttp.readyState==4) { 
     // Get data from the server's response
     document.getElementById("top_wrapper").innerHTML=xmlhttp.responseText;
   }
 }
 xmlhttp.open("GET","change.txt",true);
 xmlhttp.send(null);
 return true;
}

  var $nivel1 = 1;
  var $nivel2_quim1 = 1;
  var $nivel2_quim2 = 1;
  var $nivel2_quim3 = 1;
  var $nivel2_quim4 = 1;
  var $nivel2_quim5 = 1;
  var $nivel2_quim6 = 1;
  var $nivel2_quim7 = 1;
  var $nivel2_quim8 = 1;
  var $nivel2_quim9 = 1;
  var $nivel2_quim10 = 1;
  var $count = 1;

  	$("#tab1").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
			
			$("#nav").slideUp(1000, function() {
				//ajaxFunction()
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		}
	
	});

	  	$("#tab2").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
		
			$("#nav").slideUp(1000, function() {
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		
		}
	
	});
	$("#tab3").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
		
			$("#nav").slideUp(1000, function() {
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		}
	
	});
	$("#tab4").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
		
			$("#nav").slideUp(1000, function() {
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		}
	
	});
	$("#tab5").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
		
			$("#nav").slideUp(1000, function() {
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		}
	
	});
	$("#tab6").click(function(){
		var current_color = $(this).css("border-color");
		
		var previous_color = $("#nav").css("border-color");
		
		if(current_color != previous_color){
		
			$("#nav").slideUp(1000, function() {
				$("#nav").css("border-color", current_color);
				$("#nav").slideDown(1000);
				$("#nav ul").css("border-color", current_color);
			});
		}
	
	});

  $("#scroll").fadeIn(1000);
 var current_top = parseInt ($("#scroll").css("top"));

	$(window).scroll(function() {
	var top = $(window).scrollTop();
	$("#scroll").css("top", top + current_top);
	});
	
$("#tail").hide();
	$("p#next").click(function(){
		if($count%2 != 0){
			$("#head").fadeOut(0500, function(){
				$("#tail").fadeIn(0500);
			});
			$("#page2").css("background-color", "#C0C0C0");
			$("#page1").css("background-color", "#808080");	
			$("p#next").css("color", "#C0C0C0");
			$("p#prev").css("color", "#141517");
			$count = $count + 1;
		}
	});
	$("p#prev").click(function(){
	    if($count%2 == 0){
			$("#tail").fadeOut(0500, function(){
				$("#head").fadeIn(0500);
			});
			$("#page1").css("background-color", "#C0C0C0");
			$("#page2").css("background-color", "#808080");
			$("p#prev").css("color", "#C0C0C0");
			$("p#next").css("color", "#141517");
			$count = $count + 1;
		}
	});
  
  $("ul#quim1").hide();
	$("li.quim1_books").hide();
	$("li.quim1_lectures").hide();
	$("li.quim1_help").hide();
	$("li.quim1_banks").hide();

  $("p#quim1").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim1").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim1_books").click(function(){
    if($nivel2_quim1%2 != 0){
		$("li.quim1_lectures").slideUp().delay("1000");
		$("li.quim1_help").slideUp().delay("1000");
		$("li.quim1_banks").slideUp().delay("1000");
	}
	
	$("li.quim1_books").slideToggle().delay("1000");
	$nivel2_quim1 = $nivel2_quim1 + 2;
  });
$("p#quim1_lectures").click(function(){
    if($nivel2_quim1%2 != 0){
		$("li.quim1_books").slideUp().delay("1000");
		$("li.quim1_help").slideUp().delay("1000");
		$("li.quim1_banks").slideUp().delay("1000");
	}
	
	$("li.quim1_lectures").slideToggle().delay("1000");
	$nivel2_quim1 = $nivel2_quim1 + 2;
  });
$("p#quim1_help").click(function(){
    if($nivel2_quim1%2 != 0){
		$("li.quim1_lectures").slideUp().delay("1000");
		$("li.quim1_books").slideUp().delay("1000");
		$("li.quim1_banks").slideUp().delay("1000");
	}
	
	$("li.quim1_help").slideToggle().delay("1000");
	$nivel2_quim1 = $nivel2_quim1 + 2;
  });
$("p#quim1_banks").click(function(){
    if($nivel2_quim1%2 != 0){
		$("li.quim1_lectures").slideUp().delay("1000");
		$("li.quim1_help").slideUp().delay("1000");
		$("li.quim1_books").slideUp().delay("1000");
	}
	
	$("li.quim1_banks").slideToggle().delay("1000");
	$nivel2_quim1 = $nivel2_quim1 + 2;
  });

  $("ul#quim2").hide();
	$("li.quim2_books").hide();
	$("li.quim2_lectures").hide();
	$("li.quim2_help").hide();
	$("li.quim2_banks").hide();

  $("p#quim2").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim2").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim2_books").click(function(){
    if($nivel2_quim2%2 != 0){
		$("li.quim2_lectures").slideUp().delay("1000");
		$("li.quim2_help").slideUp().delay("1000");
		$("li.quim2_banks").slideUp().delay("1000");
	}
	
	$("li.quim2_books").slideToggle().delay("1000");
	$nivel2_quim2 = $nivel2_quim2 + 2;
  });
$("p#quim2_lectures").click(function(){
    if($nivel2_quim2%2 != 0){
		$("li.quim2_books").slideUp().delay("1000");
		$("li.quim2_help").slideUp().delay("1000");
		$("li.quim2_banks").slideUp().delay("1000");
	}
	
	$("li.quim2_lectures").slideToggle().delay("1000");
	$nivel2_quim2 = $nivel2_quim2 + 2;
  });
$("p#quim2_help").click(function(){
    if($nivel2_quim2%2 != 0){
		$("li.quim2_lectures").slideUp().delay("1000");
		$("li.quim2_books").slideUp().delay("1000");
		$("li.quim2_banks").slideUp().delay("1000");
	}
	
	$("li.quim2_help").slideToggle().delay("1000");
	$nivel2_quim2 = $nivel2_quim2 + 2;
  });
$("p#quim2_banks").click(function(){
    if($nivel2_quim2%2 != 0){
		$("li.quim2_lectures").slideUp().delay("1000");
		$("li.quim2_help").slideUp().delay("1000");
		$("li.quim2_books").slideUp().delay("1000");
	}
	
	$("li.quim2_banks").slideToggle().delay("1000");
	$nivel2_quim2 = $nivel2_quim2 + 2;
  });

  $("ul#quim3").hide();
	$("li.quim3_books").hide();
	$("li.quim3_lectures").hide();
	$("li.quim3_help").hide();
	$("li.quim3_banks").hide();

  $("p#quim3").click(function(){
  	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim3").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim3_books").click(function(){
    if($nivel2_quim3%2 != 0){
		$("li.quim3_lectures").slideUp().delay("1000");
		$("li.quim3_help").slideUp().delay("1000");
		$("li.quim3_banks").slideUp().delay("1000");
	}
	
	$("li.quim3_books").slideToggle().delay("1000");
	$nivel2_quim3 = $nivel2_quim3 + 2;
  });
$("p#quim3_lectures").click(function(){
    if($nivel2_quim3%2 != 0){
		$("li.quim3_books").slideUp().delay("1000");
		$("li.quim3_help").slideUp().delay("1000");
		$("li.quim3_banks").slideUp().delay("1000");
	}
	
	$("li.quim3_lectures").slideToggle().delay("1000");
	$nivel2_quim3 = $nivel2_quim3 + 2;
  });
$("p#quim3_help").click(function(){
    if($nivel2_quim3%2 != 0){
		$("li.quim3_lectures").slideUp().delay("1000");
		$("li.quim3_books").slideUp().delay("1000");
		$("li.quim3_banks").slideUp().delay("1000");
	}
	
	$("li.quim3_help").slideToggle().delay("1000");
	$nivel2_quim3 = $nivel2_quim3 + 2;
  });
$("p#quim3_banks").click(function(){
    if($nivel2_quim3%2 != 0){
		$("li.quim3_lectures").slideUp().delay("1000");
		$("li.quim3_help").slideUp().delay("1000");
		$("li.quim3_books").slideUp().delay("1000");
	}
	
	$("li.quim3_banks").slideToggle().delay("1000");
	$nivel2_quim3 = $nivel2_quim3 + 2;
  });

  $("ul#quim4").hide();
	$("li.quim4_books").hide();
	$("li.quim4_lectures").hide();
	$("li.quim4_help").hide();
	$("li.quim4_banks").hide();

  $("p#quim4").click(function(){
    if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim4").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim4_books").click(function(){
    if($nivel2_quim4%2 != 0){
		$("li.quim4_lectures").slideUp().delay("1000");
		$("li.quim4_help").slideUp().delay("1000");
		$("li.quim4_banks").slideUp().delay("1000");
	}
	
	$("li.quim4_books").slideToggle().delay("1000");
	$nivel2_quim4 = $nivel2_quim4 + 2;
  });
$("p#quim4_lectures").click(function(){
    if($nivel2_quim4%2 != 0){
		$("li.quim4_books").slideUp().delay("1000");
		$("li.quim4_help").slideUp().delay("1000");
		$("li.quim4_banks").slideUp().delay("1000");
	}
	
	$("li.quim4_lectures").slideToggle().delay("1000");
	$nivel2_quim4 = $nivel2_quim4 + 2;
  });
$("p#quim4_help").click(function(){
    if($nivel2_quim4%2 != 0){
		$("li.quim4_lectures").slideUp().delay("1000");
		$("li.quim4_books").slideUp().delay("1000");
		$("li.quim4_banks").slideUp().delay("1000");
	}
	
	$("li.quim4_help").slideToggle().delay("1000");
	$nivel2_quim4 = $nivel2_quim4 + 2;
  });
$("p#quim4_banks").click(function(){
    if($nivel2_quim4%2 != 0){
		$("li.quim4_lectures").slideUp().delay("1000");
		$("li.quim4_help").slideUp().delay("1000");
		$("li.quim4_books").slideUp().delay("1000");
	}
	
	$("li.quim4_banks").slideToggle().delay("1000");
	$nivel2_quim4 = $nivel2_quim4 + 2;
  });


  $("ul#quim5").hide();
	$("li.quim5_books").hide();
	$("li.quim5_lectures").hide();
	$("li.quim5_help").hide();
	$("li.quim5_banks").hide();

  $("p#quim5").click(function(){
     if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim5").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim5_books").click(function(){
    if($nivel2_quim5%2 != 0){
		$("li.quim5_lectures").slideUp().delay("1000");
		$("li.quim5_help").slideUp().delay("1000");
		$("li.quim5_banks").slideUp().delay("1000");
	}
	
	$("li.quim5_books").slideToggle().delay("1000");
	$nivel2_quim5 = $nivel2_quim5 + 2;
  });
$("p#quim5_lectures").click(function(){
    if($nivel2_quim5%2 != 0){
		$("li.quim5_books").slideUp().delay("1000");
		$("li.quim5_help").slideUp().delay("1000");
		$("li.quim5_banks").slideUp().delay("1000");
	}
	
	$("li.quim5_lectures").slideToggle().delay("1000");
	$nivel2_quim5 = $nivel2_quim5 + 2;
  });
$("p#quim5_help").click(function(){
    if($nivel2_quim5%2 != 0){
		$("li.quim5_lectures").slideUp().delay("1000");
		$("li.quim5_books").slideUp().delay("1000");
		$("li.quim5_banks").slideUp().delay("1000");
	}
	
	$("li.quim5_help").slideToggle().delay("1000");
	$nivel2_quim5 = $nivel2_quim5 + 2;
  });
$("p#quim5_banks").click(function(){
    if($nivel2_quim5%2 != 0){
		$("li.quim5_lectures").slideUp().delay("1000");
		$("li.quim5_help").slideUp().delay("1000");
		$("li.quim5_books").slideUp().delay("1000");
	}
	
	$("li.quim5_banks").slideToggle().delay("1000");
	$nivel2_quim5 = $nivel2_quim5 + 2;
  });

  $("ul#quim6").hide();
	$("li.quim6_books").hide();
	$("li.quim6_lectures").hide();
	$("li.quim6_help").hide();
	$("li.quim6_banks").hide();

  $("p#quim6").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim6").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim6_books").click(function(){
    if($nivel2_quim6%2 != 0){
		$("li.quim6_lectures").slideUp().delay("1000");
		$("li.quim6_help").slideUp().delay("1000");
		$("li.quim6_banks").slideUp().delay("1000");
	}
	
	$("li.quim6_books").slideToggle().delay("1000");
	$nivel2_quim6 = $nivel2_quim6 + 2;
  });
$("p#quim6_lectures").click(function(){
    if($nivel2_quim6%2 != 0){
		$("li.quim6_books").slideUp().delay("1000");
		$("li.quim6_help").slideUp().delay("1000");
		$("li.quim6_banks").slideUp().delay("1000");
	}
	
	$("li.quim6_lectures").slideToggle().delay("1000");
	$nivel2_quim6 = $nivel2_quim6 + 2;
  });
$("p#quim6_help").click(function(){
    if($nivel2_quim6%2 != 0){
		$("li.quim6_lectures").slideUp().delay("1000");
		$("li.quim6_books").slideUp().delay("1000");
		$("li.quim6_banks").slideUp().delay("1000");
	}
	
	$("li.quim6_help").slideToggle().delay("1000");
	$nivel2_quim6 = $nivel2_quim6 + 2;
  });
$("p#quim6_banks").click(function(){
    if($nivel2_quim6%2 != 0){
		$("li.quim6_lectures").slideUp().delay("1000");
		$("li.quim6_help").slideUp().delay("1000");
		$("li.quim6_books").slideUp().delay("1000");
	}
	
	$("li.quim6_banks").slideToggle().delay("1000");
	$nivel2_quim6 = $nivel2_quim6 + 2;
  });

  $("ul#quim7").hide();
	$("li.quim7_books").hide();
	$("li.quim7_lectures").hide();
	$("li.quim7_help").hide();
	$("li.quim7_banks").hide();

  $("p#quim7").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim7").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim7_books").click(function(){
    if($nivel2_quim7%2 != 0){
		$("li.quim7_lectures").slideUp().delay("1000");
		$("li.quim7_help").slideUp().delay("1000");
		$("li.quim7_banks").slideUp().delay("1000");
	}
	
	$("li.quim7_books").slideToggle().delay("1000");
	$nivel2_quim7 = $nivel2_quim7 + 2;
  });
$("p#quim7_lectures").click(function(){
    if($nivel2_quim7%2 != 0){
		$("li.quim7_books").slideUp().delay("1000");
		$("li.quim7_help").slideUp().delay("1000");
		$("li.quim7_banks").slideUp().delay("1000");
	}
	
	$("li.quim7_lectures").slideToggle().delay("1000");
	$nivel2_quim7 = $nivel2_quim7 + 2;
  });
$("p#quim7_help").click(function(){
    if($nivel2_quim7%2 != 0){
		$("li.quim7_lectures").slideUp().delay("1000");
		$("li.quim7_books").slideUp().delay("1000");
		$("li.quim7_banks").slideUp().delay("1000");
	}
	
	$("li.quim7_help").slideToggle().delay("1000");
	$nivel2_quim7 = $nivel2_quim7 + 2;
  });
$("p#quim7_banks").click(function(){
    if($nivel2_quim7%2 != 0){
		$("li.quim7_lectures").slideUp().delay("1000");
		$("li.quim7_help").slideUp().delay("1000");
		$("li.quim7_books").slideUp().delay("1000");
	}
	
	$("li.quim7_banks").slideToggle().delay("1000");
	$nivel2_quim7 = $nivel2_quim7 + 2;
  });

  $("ul#quim8").hide();
	$("li.quim8_books").hide();
	$("li.quim8_lectures").hide();
	$("li.quim8_help").hide();
	$("li.quim8_banks").hide();

  $("p#quim8").click(function(){
  	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim9").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim8").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim8_books").click(function(){
    if($nivel2_quim8%2 != 0){
		$("li.quim8_lectures").slideUp().delay("1000");
		$("li.quim8_help").slideUp().delay("1000");
		$("li.quim8_banks").slideUp().delay("1000");
	}
	
	$("li.quim8_books").slideToggle().delay("1000");
	$nivel2_quim8 = $nivel2_quim8 + 2;
  });
$("p#quim8_lectures").click(function(){
    if($nivel2_quim6%2 != 0){
		$("li.quim8_books").slideUp().delay("1000");
		$("li.quim8_help").slideUp().delay("1000");
		$("li.quim8_banks").slideUp().delay("1000");
	}
	
	$("li.quim8_lectures").slideToggle().delay("1000");
	$nivel2_quim8 = $nivel2_quim8 + 2;
  });
$("p#quim8_help").click(function(){
    if($nivel2_quim8%2 != 0){
		$("li.quim8_lectures").slideUp().delay("1000");
		$("li.quim8_books").slideUp().delay("1000");
		$("li.quim8_banks").slideUp().delay("1000");
	}
	
	$("li.quim8_help").slideToggle().delay("1000");
	$nivel2_quim8 = $nivel2_quim8 + 2;
  });
$("p#quim8_banks").click(function(){
    if($nivel2_quim8%2 != 0){
		$("li.quim8_lectures").slideUp().delay("1000");
		$("li.quim8_help").slideUp().delay("1000");
		$("li.quim8_books").slideUp().delay("1000");
	}
	
	$("li.quim8_banks").slideToggle().delay("1000");
	$nivel2_quim8 = $nivel2_quim8 + 2;
  });

  $("ul#quim9").hide();
	$("li.quim9_books").hide();
	$("li.quim9_lectures").hide();
	$("li.quim9_help").hide();
	$("li.quim9_banks").hide();

  $("p#quim9").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim9").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim9_books").click(function(){
    if($nivel2_quim9%2 != 0){
		$("li.quim9_lectures").slideUp().delay("1000");
		$("li.quim9_help").slideUp().delay("1000");
		$("li.quim9_banks").slideUp().delay("1000");
	}
	
	$("li.quim9_books").slideToggle().delay("1000");
	$nivel2_quim9 = $nivel2_quim9 + 2;
  });
$("p#quim9_lectures").click(function(){
    if($nivel2_quim9%2 != 0){
		$("li.quim9_books").slideUp().delay("1000");
		$("li.quim9_help").slideUp().delay("1000");
		$("li.quim9_banks").slideUp().delay("1000");
	}
	
	$("li.quim9_lectures").slideToggle().delay("1000");
	$nivel2_quim9 = $nivel2_quim9 + 2;
  });
$("p#quim9_help").click(function(){
    if($nivel2_quim9%2 != 0){
		$("li.quim9_lectures").slideUp().delay("1000");
		$("li.quim9_books").slideUp().delay("1000");
		$("li.quim9_banks").slideUp().delay("1000");
	}
	
	$("li.quim9_help").slideToggle().delay("1000");
	$nivel2_quim9 = $nivel2_quim9 + 2;
  });
$("p#quim9_banks").click(function(){
    if($nivel2_quim9%2 != 0){
		$("li.quim9_lectures").slideUp().delay("1000");
		$("li.quim9_help").slideUp().delay("1000");
		$("li.quim9_books").slideUp().delay("1000");
	}
	
	$("li.quim9_banks").slideToggle().delay("1000");
	$nivel2_quim9 = $nivel2_quim9 + 2;
  });

  $("ul#quim10").hide();
	$("li.quim10_books").hide();
	$("li.quim10_lectures").hide();
	$("li.quim10_help").hide();
	$("li.quim10_banks").hide();

  $("p#quim10").click(function(){
	if($nivel1%2 != 0){
		$("ul#quim1").slideUp().delay("1000");
		$("ul#quim2").slideUp().delay("1000");
		$("ul#quim3").slideUp().delay("1000");
		$("ul#quim4").slideUp().delay("1000");
		$("ul#quim5").slideUp().delay("1000");
		$("ul#quim6").slideUp().delay("1000");
		$("ul#quim7").slideUp().delay("1000");
		$("ul#quim8").slideUp().delay("1000");
		$("ul#quim10").slideUp().delay("1000");
	}
    $("ul#quim10").slideToggle().delay("1000");
	$nivel1 = $nivel1 + 2;
  });

$("p#quim10_books").click(function(){
    if($nivel2_quim10%2 != 0){
		$("li.quim10_lectures").slideUp().delay("1000");
		$("li.quim10_help").slideUp().delay("1000");
		$("li.quim10_banks").slideUp().delay("1000");
	}
	
	$("li.quim10_books").slideToggle().delay("1000");
	$nivel2_quim10 = $nivel2_quim10 + 2;
  });
$("p#quim10_lectures").click(function(){
    if($nivel2_quim10%2 != 0){
		$("li.quim10_books").slideUp().delay("1000");
		$("li.quim10_help").slideUp().delay("1000");
		$("li.quim10_banks").slideUp().delay("1000");
	}
	
	$("li.quim10_lectures").slideToggle().delay("1000");
	$nivel2_quim10 = $nivel2_quim10 + 2;
  });
$("p#quim10_help").click(function(){
    if($nivel2_quim10%2 != 0){
		$("li.quim10_lectures").slideUp().delay("1000");
		$("li.quim10_books").slideUp().delay("1000");
		$("li.quim10_banks").slideUp().delay("1000");
	}
	
	$("li.quim10_help").slideToggle().delay("1000");
	$nivel2_quim10 = $nivel2_quim10 + 2;
  });
$("p#quim10_banks").click(function(){
    if($nivel2_quim10%2 != 0){
		$("li.quim10_lectures").slideUp().delay("1000");
		$("li.quim10_help").slideUp().delay("1000");
		$("li.quim10_books").slideUp().delay("1000");
	}
	
	$("li.quim10_banks").slideToggle().delay("1000");
	$nivel2_quim10 = $nivel2_quim10 + 2;
  });
  
  

  
  
  
});
