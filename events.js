// // You'll be using element.classList to manipulate the CSS classes on elements.
// // ✏️ Output target is the output-target element.
// // When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// // When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// // When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

// document.getElementById("myDIV").classList.add("mystyle");


let outputDiv = document.getElementById("output-target");
let articleEl = document.getElementsByClassName("article-section");
let header = document.getElementById("page-header");
var fieldEl = document.getElementById("keypress-input");


//Mouse clicks on article sections
function handleSectionClick() {
	console.log(event);
	let elementText = event.target.innerHTML
	outputDiv.innerHTML = `<p class="msg">You clicked on the ${elementText} section</p>`
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

//Mouse over h1
function handleHeaderMouseOver() {
	console.log(event);
	outputDiv.innerHTML = `<p class="msg">You moved your mouse over the header</p>`
}

header.addEventListener("mouseover", handleHeaderMouseOver);

//Mouse leaves h1
function handleHeaderMouseOut() {
	console.log(event);
	outputDiv.innerHTML= `<p class="msg">You left me!!</p>`
}

header.addEventListener("mouseout", handleHeaderMouseOut);

var fieldEl = document.getElementById("keypress-input");




