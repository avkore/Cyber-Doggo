chrome.webNavigation.onCompleted.addListener(function() {
    alert("This is my favorite website!");
    chrome.tabs.create({ url: "/HTML/WarningPopup.html" });
}, { url: [{ urlMatches: 'https://www.facebook.com/' }] });
console.log("background.js loaded");

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