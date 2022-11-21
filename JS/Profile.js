import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set, child, push, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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
const db = getDatabase();
const auth = getAuth(); // Initialize Firebase Authentication and get a reference to the service

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// const dbRef = ref(db);
// get(child(dbRef, `/doggo/bannedUrls`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         var data = snapshot.val();
//         for (let i in data) {
//             var entry = data[i];
//             var domain = getDomainFromUrl(currentUrl);

//             if (domain.includes(entry)) {
//                 chrome.tabs.update({ url: "/HTML/WarningPopup.html?" + currentUrl });
//             }
//         }
//     } else {
//         alert("No data available");
//     }
// }).catch((error) => {
//     alert(error);
// });






const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Logout();
})

function Logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        location.href = "/HTML/Login.html";
    }).catch((error) => {
        // An error happened.
        alert(error);
    });
}