
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        document.querySelector('.error-message').innerHTML = 'This is a test message.';



        const emailValidation = () => { 
            const email = document.querySelector('.input').value;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const empty = email === '';
            const valid = emailPattern.test(email);
            const errorMessage = document.querySelector('.error-message');

            if (empty) {
                errorMessage.innerHTML = 'Email cannot be empty';
                console.log('Email cannot be empty'); // Debug log
            } else if (!valid) {
                errorMessage.innerHTML = 'Please provide a valid email address';
                console.log('Invalid email format'); // Debug log
            } else {
                errorMessage.innerHTML = '';
                console.log('Valid email'); // Debug log
            }
        };
        emailValidation();
    });
});
