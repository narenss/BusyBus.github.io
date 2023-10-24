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
