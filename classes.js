// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()
  three()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

function two() {
    var two = document.getElementById("two")

    two.classList.add("green");
}

function three() {
  three = document.getElementById("three")

  three.classList.add("yellow");
}

function makeVisible() {
  visible = document.getElementsByClassName("visible")
  visible[0].classList.add("visible");
}

// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION makeVisible HERE
