// Efecto extra si quieres crear muchos corazones flotando (avísame si quieres que lo agreguemos)
const laberinto = document.getElementById('laberinto');
const filas = 10;
const columnas = 10;

let jugadorX = 0;
let jugadorY = 0;
let metaX = 9;
let metaY = 9;

function crearLaberinto() {
  laberinto.innerHTML = '';
  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      const celda = document.createElement('div');
      celda.classList.add('celda');

      if (x === jugadorX && y === jugadorY) {
        celda.textContent = '💜';
        celda.classList.add('jugador');
      } else if (x === metaX && y === metaY) {
        celda.textContent = '💜';
        celda.classList.add('meta');
      } else {
        celda.textContent = '❤️';
      }

      laberinto.appendChild(celda);
    }
  }
}

function moverJugador(dx, dy) {
  const nuevoX = jugadorX + dx;
  const nuevoY = jugadorY + dy;

  if (nuevoX >= 0 && nuevoX < columnas && nuevoY >= 0 && nuevoY < filas) {
    jugadorX = nuevoX;
    jugadorY = nuevoY;
    crearLaberinto();
    verificarVictoria();
  }
}

function verificarVictoria() {
  if (jugadorX === metaX && jugadorY === metaY) {
    setTimeout(() => {
      alert('¡Encontraste al corazón correcto! 💜💜');
    }, 100);
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': moverJugador(0, -1); break;
    case 'ArrowDown': moverJugador(0, 1); break;
    case 'ArrowLeft': moverJugador(-1, 0); break;
    case 'ArrowRight': moverJugador(1, 0); break;
  }
});

crearLaberinto();
