// Object to store room availability for each date and room type
const availabilityData = {};

// availabilityData for May and June
const mayStartDate = new Date('2024-05-01');
const juneEndDate = new Date('2024-06-30');
for (let date = mayStartDate; date <= juneEndDate; date.setDate(date.getDate() + 1)) {
  availabilityData[date.toISOString().slice(0, 10)] = {
    singleRoom: 10,
    doubleRoom: 10,
    juniorSuite: 10,
    deluxeSuite: 10,
    regalPawSuite: 10
  };
}

// Function to check availability
function checkAvailability(roomTypes) {
  const urlParams = new URLSearchParams(window.location.search);
  const checkIn = urlParams.get('check-in');
  const checkOut = urlParams.get('check-out');

  // Get date range
  const dateRange = getDateRange(checkIn, checkOut);

  // Check availability for each selected room type
  let allAvailable = true;
  roomTypes.forEach(roomType => {
    for (let date of dateRange) {
      if (availabilityData[date][roomType] <= 0) {
        allAvailable = false;
        break;
      }
    }
  });

  // Show availability message
  if (allAvailable) {
    alert('Rooms are available for the selected dates!');
  } else {
    alert('Sorry, not all selected rooms are available for the specified dates.');
  }
}

// Function to get date range between check-in and check-out dates
function getDateRange(startDate, endDate) {
  const dateRange = [];
  let currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);
  while (currentDate <= endDateObj) {
    dateRange.push(currentDate.toISOString().slice(0, 10));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateRange;
}
