// Taco Farm Project: Chapter 12 

// event listener on the div button for the click event
document.getElementById("button").addEventListener("click", addTaco);

// global variable which starts our taco count at zero
let tacoNum = 0;

// write that zero value from the variable into the <span> element
document.getElementById("tacoCount").textContent = tacoNum;

// definition of the addTaco() function
function addTaco(event) {

	// increment the taco num variable by one
	tacoNum++;
	
	// now update that data on the web page
	document.getElementById("tacoCount").textContent = tacoNum;

	if (tacoNum < 20) {
	
	// add a taco image into the document using nodes
	// first create the element node for an <img>
		let newImg = document.createElement("img");
	// now set the src attribute with an image file on the newImg element node
		newImg.setAttribute("src", "tacos.png");

	// append the new image node to the document
		document.getElementById("tacoFarm").appendChild(newImg);
	} else {
		// stop the tacoNum variable from updating on the page
	

		document.getElementById("tacoCount").textContent = "Woah! That's Too Many Tacos!";

		document.getElementById("button").style.display = "none";

		document.getElementsByTagName("h3")[0].style.marginBottom = "90px";

	document.getElementById("button2").style.display = "block";
	}




} // end of addTaco() function


// definition of the resetTacos() function
function resetTacos() {
		tacoNum = 0;
		document.getElementById("tacoCount").textContent = tacoNum;
		document.getElementById("button").style.display = "block";

		document.getElementsByTagName("h3")[0].style.marginBottom = "0px";

		document.getElementById("button2").style.display = "none";

		document.getElementById("tacoFarm").innerHTML = "";
	}

