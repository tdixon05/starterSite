// Import Firebase modules and the database from firebase-config.js
import { app, database } from './firebase/firebase-config.js';
import { ref, push } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;

    if (emailInput) {
        const emailRef = ref(database, 'signups'); // Use the database imported from firebase-config.js
        push(emailRef, { email: emailInput })
            .then(() => {
                console.log('Email Input:', emailInput);
                alert('Thank you for signing up!');
                document.getElementById('email').value = '';
            })
            .catch((error) => {
                console.error('Error saving data:', error);
                alert('Something went wrong. Please try again.');
            });
    } else {
        alert('Please enter a valid email address.');
    }
});
