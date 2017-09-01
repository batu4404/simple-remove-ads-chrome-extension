// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.todo == "removeAds") {
//         console.log("hello world");
//         var iframe = $('.boxTrungTam-t');
//         console.log(typeof iframe);
//         console.log('length', iframe.length);

//         iframe.each(function() {
//             console.log($this);
//         });

//         var iframes = document.getElementsByTagName('iframe');
//         console.log(iframes);

//         chrome.tabs.query({
//             active: true,
//             lastFocusedWindow: true
//         }, function(tabs) {
//             // and use that tab to fill in out title and url
//             var tab = tabs[0];
//             console.log(tab.url);
//             console.log(tab);
//             // alert(tab.url);
//         });
//     }
// });