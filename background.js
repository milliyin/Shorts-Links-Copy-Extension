// import "main.js";

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'CopyLink') {
//         console.log("in background");
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//                 SaveLinktofile()
//             // chrome.scripting.executeScript({
//             //     target: { tabId: tabs[0].id },
//             //     files: ['main.js']
//             // });
//         });
//     }
// });