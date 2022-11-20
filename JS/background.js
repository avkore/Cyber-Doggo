import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set, push, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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
const auth = getAuth(); // Initialize Firebase Authentication and get a reference to the service
const db = getDatabase(); // Initialize Firebase Database and get a reference to the service

chrome.webNavigation.onCommitted.addListener(function(tab) {
    if (tab.frameId == 0) { // Making sure it runs only onc
        checkCurrentUrl(tab.url);
    }


    // chrome.tabs.create({ url: "/HTML/WarningPopup.html" });

    // fetch("https://www.virustotal.com/ui/search?limit=20&relationships%5Bcomment%5D=author%2Citem&query=http%3A%2F%2Ffacebook.com", {
    //     "headers": {
    //       "accept": "application/json",
    //       "accept-ianguage": "en-US,en;q=0.9,es;q=0.8",
    //       "accept-language": "en-US,en;q=0.9",
    //       "content-type": "application/json",
    //       "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    //       "sec-ch-ua-mobile": "?0",
    //       "sec-ch-ua-platform": "\"Windows\"",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "same-origin",
    //       "x-app-version": "v1x134x1",
    //       "x-tool": "vt-ui-main",
    //       "x-vt-anti-abuse-header": "MTM5NTQ4NjA2MzItWkc5dWRDQmlaU0JsZG1scy0xNjY4OTM2ODMxLjcxNQ=="
    //     },
    //     "referrer": "https://www.virustotal.com/",
    //     "referrerPolicy": "origin",
    //     "body": null,
    //     "method": "GET",
    //     "mode": "cors",
    //     "credentials": "omit"
    //   });

});

function checkCurrentUrl(currentUrl) {
    const dbRef = ref(db);
    get(child(dbRef, `/doggo/bannedUrls`)).then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            for (let i in data) {
                if (currentUrl.includes(data[i])) {
                    chrome.tabs.update({ url: "/HTML/WarningPopup.html" });
                }
            }
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });
}
























// This will run when the extension is installed
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });

// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(function() {
//     // do something
// });