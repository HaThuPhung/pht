$(document).ready(function(){
	var pageCounter = 1;
		function hienThi(){
			var obHTTP=new XMLHttpRequest();
			url='js.json';
			obHTTP.onreadystatechange=function(){
				if(this.readyState==4)
				{
					if(this.status==200)
					{	
						var obJSON=JSON.parse(this.responseText);
						var a=obJSON.length;
							
							for(var i=0;i<obJSON.length;i+=3){
							var r=i+1;
							var t=r+1;
								$("div.box_center_main").append("<div class='row'><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 tinhome_item' id='sanpham"+i+"'></div><div class='col-lg-4 col-md-4 col-sm-4 col-xs-4 tinhome_item' id='sanpham"+r+"'></div><div class='col-lg-4 col-md-4 col-sm-4  col-xs-4 tinhome_item' id='sanpham"+t+"'></div></div>");
							for(var j=0;j<3;j++){
							var adidas="";
							adidas+='<img src="'+obJSON[i+j].img+'"alt="">';
							adidas+='<a hrer="#">'+obJSON[i+j].Name+'</a> <br> Gia : '+obJSON[i+j].Gia+'.';
							var l=i+j;
							$("#sanpham"+l).html(adidas);		
							}
						}
					}
				}
			};
			obHTTP.open('GET',url,true);
			obHTTP.send(null);
			$(".box_center_top_l").append("<a>ADIDAS</a>");
			pageCounter++;
 			 if (pageCounter = 2) {
 			   $("#btnHienThi").addClass("hide-me");
 			   $("#show").append("<p> ADIDAS </p>");
			  }
		}
			document.getElementById("btnHienThi").addEventListener('click', hienThi, false);
			
});

