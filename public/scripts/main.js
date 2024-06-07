document.getElementById('bookingForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData.entries()); // Convert to object

    try {
        const response = await fetch('/book-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });

        const result = await response.json();
        const messageDiv = document.getElementById('message');

        if (response.ok) {
            messageDiv.textContent = 'Appointment booked successfully!';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.textContent = result.message || 'Error booking appointment';
            messageDiv.style.color = 'red';
        }
    } catch (error) {
        console.error('Error booking appointment:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Network error. Please try again later.';
        messageDiv.style.color = 'red';
    }
});
