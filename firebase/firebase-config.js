// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5lq1EkrUZoVNpu-bxgpwI9B-kTLu2tgU",
    authDomain: "fir-test-8d4a8.firebaseapp.com",
    databaseURL: "https://fir-test-8d4a8-default-rtdb.firebaseio.com",
    projectId: "fir-test-8d4a8",
    storageBucket: "fir-test-8d4a8.appspot.com",
    messagingSenderId: "363637580656",
    appId: "1:363637580656:ios:652733c25d6aae753425b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
