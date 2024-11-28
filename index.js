window.onload = function() {
  let shadowRoot = document.querySelector('spline-viewer').shadowRoot;
  shadowRoot.querySelector('#logo').remove();

  const viewport = document.querySelector('.hero__model');
  const splineViewer = document.querySelector('spline-viewer');

  splineViewer.addEventListener('load', function () {
    viewport.style.opacity = 1;
  });

  setTimeout(() => {
    viewport.style.opacity = 1;
  }, 3000);
}

// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray:
var textArray = ["WOW, IS THAT A POPSICLE???",
  "The text above is clickable!",
  "Click on popsicle!!!",
  "You can rotate it!",
  "Looks delicious, doesn't it?",
  "It may be unmovable on your phone 3(",
  "No calories, just fun!",
  "Keep rotating to discover more!",
  "Careful! It might melt if you touch too long!",
  "Imagine if it were a real popsicle..."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect
function delWriter(text, i, cb) {
  if (i >= 0 ) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function() {
      delWriter(text, i, cb);
    },rndBack);
  } else if (typeof cb == 'function') {
    setTimeout(cb,1000);
  }
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
  if ( i < text.length+1 ) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    var rndTyping = 150 - Math.random() * 75;
    setTimeout( function () {
      typeWriter(text, i++, cb)
    },rndTyping);
  } else if (i === text.length+1) {
    setTimeout( function () {
      delWriter(text, i, cb)
    },1000);
  }
};

// the main writer function
function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout( function () {
      StartWriter(0)
    },1000);
  } else if(i < textArray[i].length+1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i+1);
    });
  }
};
// wait one second then start the typewriter
setTimeout( function () {
  StartWriter(0);
},1000);
