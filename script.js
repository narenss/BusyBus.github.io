// Replace your previous common_script.js with this

let selectedSeats = 0;

function updateSelectedSeats() {
    const selectedSeatsDisplay = document.getElementById('selectedSeats');
    selectedSeatsDisplay.textContent = selectedSeats;
}

function initializeSeats() {
    const seatContainer = document.getElementById('seatContainer');

    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = i;

        seat.addEventListener('click', function() {
            this.classList.toggle('selected');
            selectedSeats = document.querySelectorAll('.seat.selected').length;
            updateSelectedSeats();
        });

        seatContainer.appendChild(seat);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSeats();
});
// script.js

function selectSeat(seat) {
    var seats = document.querySelectorAll('.seat');
    seats.forEach(function (s) {
        s.classList.remove('selected');
    });
    seat.classList.add('selected');

    // Update the number of passengers input field
    var selectedSeats = document.querySelectorAll('.seat.selected');
    var passengersInput = document.getElementById('passengers');
    passengersInput.value = selectedSeats.length;
}
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseInt(document.getElementById('distance').value);
    const passengers = parseInt(document.getElementById('passengers').value);

    const fare = distance * 5 * passengers;

    const resultElement = document.getElementById('result');
    const fareElement = document.getElementById('fare');

    fareElement.textContent = `Rs.${fare.toFixed(2)}`;
    resultElement.classList.remove('hidden');
});
function toggleSeat(seat) {
    seat.classList.toggle("selected");
    updatePassengerCount();
}

function updatePassengerCount() {
    var selectedSeats = document.querySelectorAll('.seat.selected');
    var passengerCountElement = document.getElementById('passengerCount');
    passengerCountElement.textContent = "Number of Passengers: " + selectedSeats.length;

    var proceedToCalculatorLink = document.getElementById('proceedToCalculator');
    proceedToCalculatorLink.href = "calc.html?passengers=" + selectedSeats.length;
}