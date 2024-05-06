window.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.reservation form');
  const basePriceInput = document.getElementById('base-price');
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');
  const adultsInput = document.getElementById('adults');
  const childrenInput = document.getElementById('children');
  const checkPriceButton = document.getElementById('check-price');
  const reserveNowButton = document.querySelector('.reservation button[type="submit"]');

  checkPriceButton.addEventListener('click', function () {
    // Verificar que se ingresen las fechas de check-in y check-out
    if (!checkInInput.value || !checkOutInput.value) {
      alert("Please enter both check-in and check-out dates.");
      return; // Stop execution if validation fails
    }

    // Verificar que la fecha de salida sea mayor que la fecha de entrada
    const checkInDate = new Date(checkInInput.value);
    const checkOutDate = new Date(checkOutInput.value);

    // Obtener la fecha actual para comparar con la fecha de entrada
    const currentDate = new Date();

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after the check-in date.");
      return; // Stop execution if validation fails
    } else if (checkInDate < currentDate) {
      alert("Check-in date cannot be before the current date.");
      return; // Stop execution if validation fails
    }

    // Calcular el número de noches
    const numNights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    // Calcular el precio total
    const basePrice = parseInt(basePriceInput.value);
    const numAdults = parseInt(adultsInput.value);
    const numChildren = parseInt(childrenInput.value);
    const totalPrice = basePrice * numNights * numAdults;

    // Mostrar el precio total
    alert('Total Price: $' + totalPrice);

    // Guardar la información en el almacenamiento local
    const reservationData = {
      'check-in': checkInInput.value,
      'check-out': checkOutInput.value,
      'adults': adultsInput.value,
      'children': childrenInput.value,
      'total-price': totalPrice
    };
    localStorage.setItem('reservationData', JSON.stringify(reservationData));
  });

  reserveNowButton.addEventListener('click', function (event) {
    // Verificar que se ingresen las fechas de check-in y check-out
    if (!checkInInput.value || !checkOutInput.value) {
      alert("Please enter both check-in and check-out dates before reserving.");
      event.preventDefault(); // Prevent form submission if validation fails
    } else {
      // Redirigir a confirmation.html al hacer clic en "Reserve Now"
      window.location.href = 'confirmation.html';
    }
  });
});
