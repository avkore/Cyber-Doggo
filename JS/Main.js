// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import {initializeApp} from 'firebase/app';
// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDqsFlsWEmB_Gs6zW60CPJvfRaI12nWKLM",
    authDomain: "doggo-v1.firebaseapp.com",
    databaseURL: "https://doggo-v1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "doggo-v1",
    storageBucket: "doggo-v1.appspot.com",
    messagingSenderId: "686895259242",
    appId: "1:686895259242:web:ab10716f058dcaebd0f413",
    measurementId: "G-MH1K6RHX18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Initialize Firebase Authentication and get a reference to the service
if (document.body.contains(document.getElementById("registerPage"))) {
    register(auth);
}

function register(auth) {
    const registerBtn = document.getElementById("registerBtn");
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("123");
        const nickname = document.getElementById("nickname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("nickname: " + nickname);
        console.log("email: " + email);
        console.log("password: " + password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(function() {
                //
                // var user = auth.currentUser // declare user variable
                // var database_ref = database.ref() //add user to firebase database
                // var user_data = {
                //     nickname: nickname,
                //     email: email,
                //     password: password,
                //     last_login: Date.now()
                // }
                // database_ref.child('users/' + user.uid).set(user_data); //add user to firebase database
                alert("User created");

            })
            .catch(function(error) {
                var error_code = error.code;
                var error_message = error.message;
                alert(error_message);
            })

    })
}
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    Login();
})

function Login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert("User logged in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}