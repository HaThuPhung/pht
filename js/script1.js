	var rIndex,table=document.getElementById("table");
	var i;
function add(){
	var newRow =table.insertRow(table.length),
	cell1=newRow.insertCell(0),
	cell2=newRow.insertCell(1),
	cell3=newRow.insertCell(2),
	cell4=newRow.insertCell(3),
	cell5=newRow.insertCell(4),
	tensp=document.getElementById("tensp").value,
	gia=document.getElementById("gia").value,
	anh=document.getElementById("img").value,
	thutu=document.getElementById("thutu").value,
	ghichu=document.getElementById("ghichu").value;
	if(tensp==""){
		alert("chua nhap ten ");
	}
	else{
	cell1.innerHTML=tensp;
	}
	cell2.innerHTML=gia;
	cell3.innerHTML="<img width='60px' src='images/"+anh+"'>";
	cell4.innerHTML=thutu;
	cell5.innerHTML=ghichu;	
	selected();
}
function selected(){
	
	for(var i=1;i<table.rows.length;i++)
	{
		table.rows[i].onclick=function()
		{
			rIndex=this.rowIndex;
			document.getElementById("tensp").value=this.cells[0].innerHTML;
			document.getElementById("gia").value=this.cells[1].innerHTML;
			document.getElementById("img").value=this.cells[2].innerHTML;
			document.getElementById("thutu").value=this.cells[3].innerHTML;
			document.getElementById("ghichu").value=this.cells[4].innerHTML;
		};
	}
}
selected();
function edit(){
	selected();
	var tensp=document.getElementById("tensp").value,
	gia=document.getElementById("gia").value,
	anh=document.getElementById("img").value,
	ghichu=document.getElementById("ghichu").value,
	thutu=document.getElementById("thutu").value;
	table.rows[rIndex].cells[0].innerHTML=tensp;
	table.rows[rIndex].cells[1].innerHTML=gia;
	table.rows[rIndex].cells[2].innerHTML=anh;
	table.rows[rIndex].cells[3].innerHTML=thutu;
	table.rows[rIndex].cells[4].innerHTML=ghichu;
}

