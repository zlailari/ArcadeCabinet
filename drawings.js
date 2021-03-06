var c = document.getElementById('bCanvas');
var ctx = c.getContext('2d');
ctx.font = "bold 12px sans-serif";

// White button
ctx.beginPath();
ctx.fillText('White Button',50,10);
ctx.arc(85,25,10,0,2*Math.PI);
ctx.stroke();
ctx.moveTo(40,50);

// Joystick
ctx.beginPath();
ctx.fillText('Joystick',40,55);
ctx.arc(65,75,8,0,2*Math.PI);
ctx.stroke();
ctx.moveTo(70,75);
ctx.beginPath();
ctx.arc(65,75,15,0,2*Math.PI);
ctx.stroke();
ctx.moveTo(96,115);

// All letter buttons
ctx.fillStyle="#0000FF";
ctx.beginPath();
ctx.fillText('A',96,115);
ctx.arc(100,130,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('B',146,95);
ctx.beginPath();
ctx.arc(150,110,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('C',196,95);
ctx.beginPath();
ctx.arc(200,110,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('D',246,95);
ctx.beginPath();
ctx.arc(250,110,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('E',146,45);
ctx.beginPath();
ctx.arc(150,60,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('F',196,45);
ctx.beginPath();
ctx.arc(200,60,10,0,2*Math.PI);
ctx.fill();
ctx.fillText('G',246,45);
ctx.beginPath();
ctx.arc(250,60,10,0,2*Math.PI);
ctx.fill();
ctx.stroke();