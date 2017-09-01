$(function() {
    $('#remove-ads').click(function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {todo: 'removeAds'});
        });
    });

    $('#options-page').click(function() {
        chrome.runtime.openOptionsPage(function() {});
    });
});