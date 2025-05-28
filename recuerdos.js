const frases = [
  "Nuestro primer beso vivirá para siempre en mi cabeza✨",
  "Ese PAGUELE PIEZA",
  "Nuestro primer restaurante como pareja(Marte)",
  "Cuando casi nos perdemos intentando llegar a ZeroGravity",
  "Cuando fuimos al Parque de los Novios, y parecía que todo brillaba 🌳💖",
  "La vez que fuimos a la biblioteca y... jiji",
  "Cada momento contigo se convierte en un bonito recuedo",
  "No es un recuerdo pero deja de ser tan lindoo (Es broma, no lo hagas nunca)"
];

function mostrarRecuerdo() {
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("recuerdo").textContent = frases[indice];
}
