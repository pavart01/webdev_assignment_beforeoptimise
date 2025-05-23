document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resume = document.getElementById('resume').value;

    // Simple validation (you can expand this as needed)
    if (name && email && resume) {
        // Display a success message
        document.getElementById('formResponse').innerHTML = `
            <p>Thank you, ${name}! Your application has been submitted successfully.</p>
        `;
        
        // Optionally, you can reset the form
        document.getElementById('applicationForm').reset();
    } else {
        // Display an error message
        document.getElementById('formResponse').innerHTML = `
            <p style="color: red;">Please fill in all fields.</p>
        `;
    }
});