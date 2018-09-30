// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
// 	console.log("CLICK!!!!!!");
// })

// button.addEventListener("mouseenter", function() {
// 	console.log("MOUSEENTERED!!!!!!");
// })

// button.addEventListener("mouseleave", function() {
// 	console.log("MOUSELEFT!!!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// button.addEventListener("click", function(){
// 	// console.log(input.value);
// 		if (input.value.length > 0) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 		}
// 	}
// )

// input.addEventListener("keypress", function(event){
// 		// console.log(event);
// 		if (input.value.length > 0 && event.keyCode === 13) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 		}
// 	}
// )

// Same as logic above but Code refactored
function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		// Dynamically add button along with new list item
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		li.appendChild(btn);
}

function deleteListElement (e) {
	var li = e.target.parentElement;
	if (e.target && e.target.nodeName === "BUTTON"){
		ul.removeChild(li);
	}
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();
		}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		}
}

function toggleStrikeOut(e) {
	// if (!li.classList.contains("done")){
	// 	li.classList.add("done");
	// } else {
	// 	li.classList.remove("done");
	// }
	if (e.target && e.target.nodeName === "LI"){
		e.target.classList.toggle("done");
	}

}

// If someone clicks, call addListAfterClick funtion
button.addEventListener("click", addListAfterClick);

// If someone clicks Delete, call deleteListElement function
ul.addEventListener("click", deleteListElement);

// If someone presses enter, call AddListAfterKeyPress function
input.addEventListener("keypress", addListAfterKeyPress);

// If someone clicks list item, toggle .done class 
ul.addEventListener("click", toggleStrikeOut);

// In the previous video you saw something interesting:

// Event listener syntax : 

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);
// You didn't see the function being called like this as you may have expected: 

// button.addEventListener("click", addListAfterClick());
// input.addEventListener("keypress", addListAfterKeypress(event));


// This is something called a callback function. When that line of javascript runs, we don't want the addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.

