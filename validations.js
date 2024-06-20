document.addEventListener('DOMContentLoaded', function () {
    const confirmButton = document.getElementById('confirm-reservation');
  
    confirmButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const payment = document.getElementById('payment').value;
  
      // Validación del teléfono (solo números y longitud)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number with 10 digits.');
        return;
      }
  
      // Validación del email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Validación del nombre
      if (name.trim() === '') {
        alert('Please enter your name.');
        return;
      }
  
      // Validación del método de pago
      if (!payment) {
        alert('Please select a payment method.');
        return;
      }
  
      // Si todas las validaciones pasan, mostrar el mensaje de confirmación
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.style.display = 'block';
      confirmationMessage.textContent = 'Your reservation has been successfully confirmed!';
  
      // Aquí podrías enviar los datos al servidor y bloquear las habitaciones.
      localStorage.removeItem('reservationData');
    });
  });
  