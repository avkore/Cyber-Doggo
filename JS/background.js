// import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";  
// const { getDatabase, ref, child, get } = require("https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js");
chrome.webNavigation.onCompleted.addListener(function(tab) {
    if (tab.frameId == 0) { // Making sure it runs only once
        chrome.tabs.update({url: "/HTML/WarningPopup.html"});

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

}, {url: [{urlMatches : 'https://www.facebook.com/'}]});
























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