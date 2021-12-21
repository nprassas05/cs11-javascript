// Toggles the style with name styleName on the tag, with either the value or
// the default value.
function toggleStyle(el, styleName, value) {
  if (el.style[styleName] === '') {
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
}

function onFormSubmit(e) {
  var form = e.target;
  // Prevent the form from actually submitting!
  e.preventDefault();

  // Print values of foo input and bar input together to response div.
  var foo = form.foo; // or document.getElementsByName("foo")[0];
  var bar = form.bar;
  var response = document.getElementById("response");
  response.innerHTML = foo.value + " " + bar.value;
}

function formAlert(e) {
  var form = e.target.form;
  var foo = form.foo;
  var bar = form.bar;
  var message = `foo: ${foo.value}\nbar: ${bar.value}`;
  alert(message);
}

function toggleBox(e) {
  var box = document.getElementById("box");
  toggleStyle(box, "display", "none");
}

function rotateColors(e) {
  var box = document.getElementById("box");
  // Rotate the colors of the box from red to blue to green.
  var currColor = box.style.backgroundColor;
  var nextColor;
  if (currColor === "red") {
    nextColor = "blue";
  } else if (currColor === "blue") {
    nextColor = "green";
  } else {
    nextColor = "red";
  }
  box.style.backgroundColor = nextColor;
}

function onTagButtonClick(e) {
  var el = e.target;
  var tagsEl = document.getElementById("tags");

  // Check for the id here and determine which values to toggle. Then
  // loop over all the tags you find and toggle the appropriate values.
  var tagToToggle = "";
  var styleName = "";
  var styleValue = "";

  if (el.id === "bold-btn") {
    tagToToggle = "b";
    styleName = "color";
    styleValue = "red";
  } else if (el.id === "italic-btn") {
    tagToToggle = "i";
    styleName = "backgroundColor";
    styleValue = "gray";
  } else if (el.id === "underline-btn") {
    tagToToggle = "u";
    styleName = "border";
    styleValue = "1px solid blue";
  }

  console.log(tagToToggle, styleName, styleValue);

  var tags = tagsEl.getElementsByTagName(tagToToggle);
  for (tag of tags) {
    toggleStyle(tag, styleName, styleValue);
  }
}

// Initialize the canvas
function initCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  // Fill the canvas with the color #ddd
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 0, c.width, c.height);
}

function randomColor() {
  var r = (Math.random() * 256 | 0).toString(16);
  var g = (Math.random() * 256 | 0).toString(16);
  var b = (Math.random() * 256 | 0).toString(16);
  return "#" + r + g + b;
}

function drawBox(e) {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  
  // Fill a rectangle with a random color, with a width between 50 and
  // 200 and a height between 50 and 100, such that it is centered around the
  // point (mouseX, mouseY)
  var color = randomColor();
  var width = Math.floor(Math.random() * 151) + 50;
  var height = Math.floor(Math.random() * 51) + 50;
  var xTopLeft = mouseX - (width/2.0);
  var yTopLeft = mouseY - (height/2.0);
  ctx.fillStyle = color;
  ctx.fillRect(xTopLeft, yTopLeft, width, height);
  //console.log(width, height, xTopLeft, yTopLeft, mouseX, mouseY);
}
