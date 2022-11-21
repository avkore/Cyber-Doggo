var deniedUrl = window.location.href.split("?")[1];
var virustotalLinkTemplate = "https://www.virustotal.com/ui/search?limit=20&relationships%5Bcomment%5D=author%2Citem&query=";

// alert("NOT ALLOWED: " + deniedUrl)

// scan url should be: virustotalLinkTemplate + deniedUrl

//This aint working with mode: 'no-cors' because important headers get blocked, like x-tool :(
// put your value in 'x-vt-anti-abuse-header'

// fetch("https://www.virustotal.com/ui/search?limit=20&relationships%5Bcomment%5D=author%2Citem&query=http%3A%2F%2Ffacebook.com", {
//     headers: {
//         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
//         'x-app-version': 'v1x134x1',
//         'x-tool': 'vt-ui-main',
//         'x-vt-anti-abuse-header': '',
//         'accept-ianguage': 'en-US,en;q=0.9,es;q=0.8'
//     }
// }).then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// }).catch(function () {
//     console.log("Booo");
// });