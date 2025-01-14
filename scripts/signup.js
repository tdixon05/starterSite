import { database, ref, push } from '../firebase/firebase-config.js';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (email) {
        const emailRef = ref(database, 'emails');
        push(emailRef, email)
            .then(() => alert('Thank you for signing up!'))
            .catch(() => alert('Error occurred while signing up.'));
    }
});
