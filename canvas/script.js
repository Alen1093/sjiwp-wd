// Dohvaćanje canvas elementa
const canvas = document.getElementById("platno");

// Dohvaćanje 2D konteksta za crtanje
const ctx = canvas.getContext("2d");


// PRVI PRAVOKUTNIK

// Crtanje ispunjenog pravokutnika
ctx.fillStyle = "yellow"
ctx.fillRect(50, 50, 200, 100);

// PROMJENA POLOŽAJA PRAVOKUTNIKA

// Pravokutnik istih dimenzija na drugom položaju
ctx.fillStyle = "pink"
ctx.strokeStyle = "purple"
ctx.lineWidth = 5;
ctx.fillRect(300, 200, 200, 100);
ctx.strokeRect(300, 200, 200, 100)

// Pravokutnik bez ispune
ctx.strokeStyle = "blue"
ctx.lineWidth = 5;
ctx.strokeRect(500, 350, 200, 100)

// Crtanje linije

// Započni novu putanju
ctx.strokeStyle = "green"
ctx.lineWidth = 2;
ctx.beginPath();
// Određuje početnu točku
ctx.moveTo(0, 0);
// Definira liniju od trenutne pozicije do zadane točke
ctx.lineTo(300, 200);
ctx.stroke();

// Stvaranje više povezanih linija
ctx.beginPath();
ctx.moveTo(700, 700);
ctx.lineTo(800, 800);
ctx.lineTo(800, 400);
ctx.closePath();
ctx.stroke();

// Ispunjavanje putanje
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(200, 200);
ctx.lineTo(300, 300);
ctx.closePath();
ctx.fillStyle = "lime";
ctx.fill();
// Dodavanje crvenog obruba
ctx.strokeStyle = "red"
ctx.lineWidth = 5;
ctx.stroke();

// Crtanje kruga
ctx.beginPath();
//300 je kordinata središta kruga, 200 je y kordinata, 80 je polumjer kruga, 0 je početni kut, 2*Math.PI predstavlja završni kut; kutovi se izražavaju u radijanima
ctx.arc(300, 200, 80, 0, 2*Math.PI);
ctx.stroke();

// Crtanje polukruga
ctx.beginPath();
ctx.arc(600, 200, 80, 0, Math.PI);
ctx.stroke();