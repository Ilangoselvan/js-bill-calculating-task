function calculate()
{
	let x=parseInt(document.getElementById("ba").value);
	let y=parseInt(document.getElementById("tp").value);
	let z=x*y/100;
	document.getElementById("tr").value=z;
	let x1=parseInt(x+z);
	document.getElementById("ta").value=x1;
	
}