import { app } from './firebase/firebase-config.js';
import { database, ref, push } from './firebase/firebase-config.js';

const database = getDatabase(app);

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;

    if (emailInput) {
        const emailRef = ref(database, 'signups');
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
