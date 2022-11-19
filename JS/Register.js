import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set, push, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


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
const db = getDatabase(); // Initialize Firebase Database and get a reference to the service

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Register(auth);
})

function Register(auth) {

    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("nickname: " + nickname);
    console.log("email: " + email);
    console.log("password: " + password);
    createUserWithEmailAndPassword(auth, email, password)
        .then(function() {
            var user = auth.currentUser // declare user variable

            set(ref(db, "doggo/users/" + user.uid), {
                    nickname: nickname,
                    email: email,
                    reportedUrls: {}
                    //TODO: Add scoring system
                }).then(function() {
                    location.href = "/HTML/Login.html";
                })
                .catch(function(error) {
                    var error_code = error.code;
                    var error_message = error.message;
                    alert(error_message);
                })

        })
}