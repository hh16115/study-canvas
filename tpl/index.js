function $(id) {
    return document.getElementById(id);
}

$('btnId').onclick = function () {
    alert(123)
}

var canvas = $('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 80, 80);