// JavaScript
window.onload = function() {
  const fullText = document.querySelector('.full-text');
  const introText = document.querySelector('.intro-text');
  const buttonText = document.querySelector('.intro-text button');

  // Ocultar el texto completo al cargar la página
  fullText.classList.add('hidden');
  buttonText.textContent = 'Read More'; // Asegurarse de que el texto del botón sea 'Read More'

  // Asegurarse de que el texto completo se muestre solo cuando se haga clic en el botón
  buttonText.addEventListener('click', function() {
    if (fullText.classList.contains('hidden')) {
      fullText.classList.remove('hidden'); // Muestra el texto completo
      introText.style.maxHeight = 'none'; // Elimina la restricción de altura del contenedor
      buttonText.textContent = 'Read Less'; // Cambia el texto del botón
    } else {
      fullText.classList.add('hidden'); // Oculta el texto completo
      introText.style.maxHeight = '200px'; // Restaura la restricción de altura del contenedor
      buttonText.textContent = 'Read More'; // Cambia el texto del botón
    }
  });
};
