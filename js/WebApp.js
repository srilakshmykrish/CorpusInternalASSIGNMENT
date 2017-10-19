document.getElementById("header").onmouseover = function() 
{
    this.style.backgroundColor = "light-green";
}

function GetSelectedItem(el) {
	var output = document.getElementById('header');

	alert(el.className);
    output.innerHTML = el.className;
}