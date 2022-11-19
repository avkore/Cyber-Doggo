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

onAuthStateChanged(auth, (user) => {
    if (user) {
        // alert("User is signed in", user);
        // location.href = "/HTML/Dashboard.html";
    } else {
        // alert("User is signed out");
        location.href = "/HTML/Login.html";
    }
})

// ---------- Login ----------
if (document.contains(document.getElementById("loginBtn"))) {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", (e) => {
        // e.preventDefault();
        Login();
    })
}

function Login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            location.href = "/HTML/Dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

// ---------- Logout ----------
if (document.contains(document.getElementById("logoutBtn"))) {
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        Logout();
    })
}

function Logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        location.href = "/HTML/Login.html";
    }).catch((error) => {
        // An error happened.
        alert(error);
    });
}