const mensajesAmorCatita = [
  "Catita, tus abrazos son mi refugio y tu sonrisa ilumina mi día.",
  "Catita, cada momento contigo es un regalo del cielo que atesoro con todo mi ser.",
  "Catita, contigo descubrí lo que significa amar de verdad y cada día te amo más.",
  "Catita, eres mi musa, mi inspiración, mi razón para ser mejor cada día.",
  "Catita, no hay palabras suficientes para expresar lo mucho que te amo y te admiro.",
  "Catita, contigo encontré un amor que trasciende el tiempo y el espacio."
];

function mostrarMensaje() {
  const indice = Math.floor(Math.random() * mensajesAmorCatita.length);
  alert(mensajesAmorCatita[indice]);
}
