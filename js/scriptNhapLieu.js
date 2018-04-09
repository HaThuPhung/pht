
	function NhapLieu(){
		/*Khai Báo*/
	var ten=document.getElementById("name").value;
	var sdt=document.getElementById("phone").value;
	var diachi1=document.getElementById("adress1").value;
	var diachi2=document.getElementById("adress2").value;
	var diachi3=document.getElementById("adress3").value;
	var diachi4=document.getElementById("adress4").value;
	var email=document.getElementById("email").value;
		/* Kiểm tra khung nhập liệu */
	if(ten==""){
		document.getElementById('span1').innerHTML = " Chưa nhập Họ tên. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span1').innerHTML = "";
	}
	if(sdt==""){
		document.getElementById('span2').innerHTML = " Chưa nhập Số điện thoại. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span2').innerHTML = "";
	}
	if(diachi1==""){
		document.getElementById('span3').innerHTML = " Chưa nhập Tỉnh/Thành phố. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span3').innerHTML = "";
	}
	if(diachi2==""){
		document.getElementById('span4').innerHTML = " Chưa nhập Quận/Huyện. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span4').innerHTML = "";
	}
	if(diachi3==""){
		document.getElementById('span5').innerHTML = " Chưa nhập Phường/Xã. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span5').innerHTML = "";
	}
	if(diachi4==""){
		document.getElementById('span6').innerHTML = " Chưa nhập Địa chỉ cụ thể. Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span6').innerHTML = "";
	}
	if(email==""){
		document.getElementById('span7').innerHTML = " Chưa nhập email .Vui lòng nhập ! ";
		return false;
	}
	else{
		document.getElementById('span7').innerHTML = "";
		alert("Nhập thành công !");
	}
	}