window.onload = function() {
  // Mostrar el mensaje inicial al cargar la página
  var mensajeInicial = document.getElementById("mensajeInicial");
  mensajeInicial.style.display = "block";

  // Ocultar el mensaje inicial después de 5 segundos
  setTimeout(function() {
    mensajeInicial.style.display = "none";
  }, 5000);
}

function mostrarMensaje() {
    // Mostrar las opciones "Sí" y "No"
    var opcion = confirm("¿Me amas?");
    
    // Si la opción es "Sí", mostrar los mensajes de amor
    if (opcion) {
        const mensajesAmor = [
            "Catita, tus abrazos son mi refugio y tu sonrisa ilumina mi día.",
            "Catita, cada momento contigo es un regalo del cielo que atesoro con todo mi ser.",
            "Catita, contigo descubrí lo que significa amar de verdad y cada día te amo más.",
            "Catita, eres mi musa, mi inspiración, mi razón para ser mejor cada día.",
            "Catita, no hay palabras suficientes para expresar lo mucho que te amo y te admiro.",
            "Catita, contigo encontré un amor que trasciende el tiempo y el espacio."
        ];
        
        const indice = Math.floor(Math.random() * mensajesAmor.length);
        alert(mensajesAmor[indice]);
    } else { // Si la opción es "No", mostrar el emoticono triste
        alert(":( ");
    }
}
