document.getElementById("header").onmouseover = function() 
{
    this.style.backgroundColor = "light-green";
}

function GetSelectedItem(el) {
	var output = document.getElementById('header');
    output.innerHTML = el.id;
}