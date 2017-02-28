function $(id) {
    return document.getElementById(id);
}

// 绘制正方形（实心）
var canvas = $('myCanvas');
canvas.width = 350;
canvas.height = 350;
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 100, 100);


// 绘制圆形（实心）
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(60, 170, 50, 0, 1.5*Math.PI);
ctx.closePath();
ctx.fill();




