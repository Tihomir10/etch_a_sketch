const container = document.querySelector('#container');

var i = 0;
var nova;
var vano;
var col;

function randColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

var nova = document.querySelector('#mala');
nova.addEventListener('click', () => {
  if (i == 0) {
    createCol();
  } else {
    location.reload();
  }
});

function createCol() {
  do {
    var div = document.createElement('div');
    div.setAttribute("class", "col")
    container.appendChild(div);
    div.onmouseover = function() {
      this.style.background = randColor();
    }
    ++i
  } while (i < 256)
};


var vano = document.querySelector('#srednja');
vano.addEventListener('click', () => {
  if (i == 0) {
    createLoc();
  } else {
    location.reload();
  }
});

function createLoc() {
  do {
    var div = document.createElement('div');
    div.setAttribute("class", "loc")
    container.appendChild(div);
    div.onmouseover = function () {
      this.style.background = randColor();
    }
    ++i
  } while (i < 1024)
};



var avno = document.querySelector('#velika');
avno.addEventListener('click', () => {
  if (i == 0) {
    createOcl();
  } else {
    location.reload();
  }
});


function createOcl() {
  do {
    var div = document.createElement('div');
    div.setAttribute("class", "ocl")
    container.appendChild(div);
    div.onmouseover = function () {
      this.style.background = randColor();
    }
    ++i
  } while (i < 4096)
};
