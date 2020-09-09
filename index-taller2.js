const canvas = document.getElementById('lienzo');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = '#eeff00';

//agregar un Contexto

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'orangered';                        
ctx.fillRect(100, 100, 400, 400);


ctx.fillStyle = '#ff4500';
ctx.fillRect(600, 100, 400, 400);



