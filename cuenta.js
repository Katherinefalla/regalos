const contador = document.getElementById("contador");

// Calcula fecha objetivo (dentro de 2 días)
const fechaActual = new Date();
const fechaObjetivo = new Date(fechaActual.getTime() + 2 * 24 * 60 * 60 * 1000);

function actualizarContador() {
  const ahora = new Date();
  const tiempoRestante = fechaObjetivo - ahora;

  if (tiempoRestante <= 0) {
    contador.textContent = "¡Ya llegó el momento! 💞";
    return;
  }

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
  const segundos = Math.floor((tiempoRestante / 1000) % 60);

  contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
