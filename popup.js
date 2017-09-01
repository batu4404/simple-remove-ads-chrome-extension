$(function() {
    $('#remove-ads').click(function() {
        chrome.runtime.sendMessage({todo: "removeAds"});
    });
});