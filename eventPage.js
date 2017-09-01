chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "removeAds") {
        console.log("hello world");
        var iframe = $('iframe');
        console.log(iframe);
    }
});