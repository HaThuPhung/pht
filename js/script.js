$(document).ready(function(){
	var pageCounter = 1
	document.getElementById("btnHienThi1").addEventListener('click', hienThi1, true);
	document.getElementById("btnHienThi2").addEventListener('click', hienThi2, true);	
	document.getElementById("btnHienThi3").addEventListener('click', hienThi3, true);
	document.getElementById("btnHienThi4").addEventListener('click', hienThi4, false);
	document.getElementById("btnHienThi5").addEventListener('click', hienThi5, false);
});
/* Xử lý click button adidas */
function hienThi1(){
		pageCounter=2;
			var obHTTP=new XMLHttpRequest();
			url='js.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 2) {
 			 	$(".box_center_top_l").append("<a>ADIDAS</a>");
 			   $("#btnHienThi1").addClass("hide-me");
 			   $("#show").append("<p> ADIDAS </p>");
			  }
		}
function hienThi11(){
		pageCounter=11;
			var obHTTP=new XMLHttpRequest();
			url='js.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 3) {
 			 	$(".box_center_top_l").html("<a>ADIDAS</a>");
 			   $("#btnHienThi11").addClass("hide-me");
 			   $("#show").html("<p> ADIDAS </p>");
 			   $("#show2").html('<input type="button" id="btnHienThi2" value="NIKE">');
 			    $("#show3").html('<input type="button" id="btnHienThi3" value="VANS">');
 			     $("#show4").html('<input type="button" id="btnHienThi4" value="Giày Đôi">');
 			      $("#show5").html('<input type="button" id="btnHienThi5" value="Phụ Kiện">');
			  }
			  document.getElementById("btnHienThi2").addEventListener('click', hienThi2, true)
			  document.getElementById("btnHienThi3").addEventListener('click', hienThi3, true)
			  document.getElementById("btnHienThi4").addEventListener('click', hienThi4, false)
			  document.getElementById("btnHienThi5").addEventListener('click', hienThi5, false)
		}
/* Xử lý click button Nike */
function hienThi2(){
	
		pageCounter=3;
			var obHTTP=new XMLHttpRequest();
			url='../JSON/json2.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 3) {
 			 	$(".box_center_top_l").html("<a>NIKE</a>");
 			 	$("#btnHienThi1").removeClass("hide-me");
 			   $("#btnHienThi2").addClass("hide-me");
 			   $("#show").html('<input type="button" id="btnHienThi11" value="ADIDAS">');
 			   $("#show3").html('<input type="button" id="btnHienThi3" value="VANS">');
 			     $("#show4").html('<input type="button" id="btnHienThi4" value="Giày Đôi">');
 			      $("#show5").html('<input type="button" id="btnHienThi5" value="Phụ Kiện">');
 			   $("#show2").append("<p> NIKE </p>");
			  }
			 document.getElementById("btnHienThi11").addEventListener('click', hienThi11, true)
			 document.getElementById("btnHienThi3").addEventListener('click', hienThi3, true)
			  document.getElementById("btnHienThi4").addEventListener('click', hienThi4, false)
			  document.getElementById("btnHienThi5").addEventListener('click', hienThi5, false)
			  	
			
 			 	
		}
	/*Xử lý click button Vans */ 	
	function hienThi3(){
		pageCounter=4;
			var obHTTP=new XMLHttpRequest();
			url='../JSON/json3.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 4) {
 			 	$(".box_center_top_l").html("<a>Vans</a>");
 			 	$("#btnHienThi2").removeClass("hide-me");
 			   $("#btnHienThi3").addClass("hide-me");
 			   $("#show").html('<input type="button" id="btnHienThi11" value="ADIDAS">');
 			   $("#show2").html('<input type="button" id="btnHienThi2" value="NIKE">');
 			   $("#show5").html('<input type="button" id="btnHienThi5" value="Phụ Kiện">');
 			   $("#show4").html('<input type="button" id="btnHienThi4" value="Giày Đôi">');
 			   $("#show3").html("<p> VANS </p>");
			  }
			   document.getElementById("btnHienThi11").addEventListener('click', hienThi11, true)
			 	document.getElementById("btnHienThi2").addEventListener('click', hienThi2, true)
			 	document.getElementById("btnHienThi5").addEventListener('click', hienThi5, true)
			 	document.getElementById("btnHienThi4").addEventListener('click', hienThi4, true)
		}
	/* Xử lý click button Giày đôi */
		function hienThi4(){
		pageCounter=5;
			var obHTTP=new XMLHttpRequest();
			url='js.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 5) {
 			 	$(".box_center_top_l").html("<a> Giày Đôi </a>");
 			 	$("#btnHienThi3").removeClass("hide-me");
 			   $("#btnHienThi4").addClass("hide-me");
 			   $("#show").html('<input type="button" id="btnHienThi11" value="ADIDAS">');
 			   $("#show3").html('<input type="button" id="btnHienThi3" value="VANS">');
 			    $("#show2").html('<input type="button" id="btnHienThi2" value="NIKE">');
 			    $("#show5").html('<input type="button" id="btnHienThi5" value="Phụ Kiện">');
 			   $("#show4").append("<p> Giày Đôi </p>");
			  }
			   document.getElementById("btnHienThi11").addEventListener('click', hienThi11, true)
			   document.getElementById("btnHienThi2").addEventListener('click', hienThi2, true)
			   document.getElementById("btnHienThi3").addEventListener('click', hienThi3, true)
			   document.getElementById("btnHienThi5").addEventListener('click', hienThi5, false)
		}
		/* Xử lý click button phụ kiện */
		function hienThi5(){
		pageCounter=5;
			var obHTTP=new XMLHttpRequest();
			url='../JSON/json9.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
													
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 ' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 ' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var obj="";
							obj+='<img src="'+obJSON[i+j].img+'" alt="" class="img-thumbnail" width="100%" height="200px>';
							obj+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							obj+='<p><a href="#" class="btn btn-primary" role="button">Mua Ngay</a>';
							var l=i+j;
							$("#sanpham"+l).html(obj);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			
			
 			 if (pageCounter = 6) {
 			 	$(".box_center_top_l").html("<a>Phụ Kiện </a>");
 			 	$("#btnHienThi4").removeClass("hide-me");
 			   $("#btnHienThi5").addClass("hide-me");
 			    $("#show2").html('<input type="button" id="btnHienThi2" value="NIKE">');
 			   $("#show").html('<input type="button" id="btnHienThi11" value="ADIDAS">');
 			   $("#show4").html('<input type="button" id="btnHienThi4" value="Giày Đôi">');
 			   $("#show3").html('<input type="button" id="btnHienThi3" value="VANS">');
 			   $("#show5").append("<p> Phụ Kiện </p>");
			  }
			   document.getElementById("btnHienThi11").addEventListener('click', hienThi11, true)
			   document.getElementById("btnHienThi2").addEventListener('click', hienThi2, true)
			    document.getElementById("btnHienThi3").addEventListener('click', hienThi3, true)
			  document.getElementById("btnHienThi4").addEventListener('click', hienThi4, false)
		}
