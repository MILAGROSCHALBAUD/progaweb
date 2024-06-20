window.addEventListener('DOMContentLoaded', function () {
  const reservationData = JSON.parse(localStorage.getItem('reservationData'));

  if (reservationData) {
    document.getElementById('check-in-date').textContent = reservationData['check-in'];
    document.getElementById('check-out-date').textContent = reservationData['check-out'];
    document.getElementById('num-adults').textContent = reservationData['adults'];
    document.getElementById('num-children').textContent = reservationData['children'];
    document.getElementById('total-price').textContent = reservationData['total-price'];
  }

  const confirmButton = document.getElementById('confirm-reservation');
  const confirmationMessage = document.getElementById('confirmation-message');

  confirmButton.addEventListener('click', function () {
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = 'Your reservation has been successfully confirmed!';
  });
});


