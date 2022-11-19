import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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


const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
var url;
var currentUser;
const reference = ref(db, 'users/');

//  Copy link to input field
chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    document.getElementById("reportUrl").value = tabs[0].url;
    url = tabs[0].url;
});

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         currentUser = user;
//         reference = ref(db, 'users/' + currentUser.uid);
//     } else {
//         alert("User is signed out");
//     }
// })


// const currentUser = auth.currentUser;





const reportBtn = document.getElementById("reportBtn");
reportBtn.addEventListener("click", (e) => {

    e.preventDefault();
    Report(reference, url);

})

function Report(reference, urlParam) {
    set(ref(db, 'users/'), {
        url: urlParam
    });

    // const url = document.getElementById("reportUrl").value;
    // const description = document.getElementById("reportDescription").value;
    // const auth = getAuth();
    // const user = auth.currentUser;
    // const db = getDatabase();
    // const ref = ref(db, 'reports/' + user.uid);
    // const report = {
    //     url: url,
    //     description: description,
    //     status: "Pending",
    //     date: new Date().toLocaleString()
    // };
    // push(ref, report);
    // location.href = "/HTML/Dashboard.html";

}