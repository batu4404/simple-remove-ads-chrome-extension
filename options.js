$(function() {
    chrome.storage.sync.get('limit', function(budget) {
        $('#limit').val(budget.limit);
    });

    // $('#auto-remove').change(function() {
    //     console.log($(this).is(":checked"));
    // });

    $('#save-limit').click(function() {
        var limit = $('#limit').val();
        console.log('limit: ' + limit);
        if (limit) {
            chrome.storage.sync.set({'limit': limit}, function() {
                // close();    // close the current options tab
                var notifOptions = {
                    type: 'basic',
                    iconUrl: 'icon16.png',
                    title: 'Limit saved!',
                    message: "You have saved limit!"
                };
        
                chrome.notifications.create('limitNotif', notifOptions, function() { console.log('created!'); });
            });
        };
    });

    $('#reset-total').click(function() {
        chrome.storage.sync.set({'total': 0});

        var notifOptions = {
            type: 'basic',
            iconUrl: 'icon16.png',
            title: 'Total reset!',
            message: "You have reset total!"
        };

        chrome.notifications.create('limitNotif', notifOptions, function() { console.log('created!'); });
    });
});

const setCheckOption = function(checkboxId, storageKey, defaultValue = true) {
    console.log('val', defaultValue);
    chrome.storage.sync.get({[storageKey]: true}, function(options) {
        console.log('key', storageKey);
        console.log('option', options[storageKey]);
        console.log('options', options);
        document.getElementById(checkboxId).checked = options[storageKey];
    });
}

const addEventToCheckOption = function(checkboxId, storageKey) {
    document.getElementById(checkboxId).addEventListener('change', function() {
        chrome.storage.sync.set({[storageKey]: this.checked}, function() {
            // to do
        });
    });
}

function setOptions() {
    setCheckOption('auto-remove', 'auto-remove');
    setCheckOption('rm-after-page-loaded', 'rm-after-page-loaded');
}

setOptions();
addEventToCheckOption('auto-remove', 'auto-remove');
addEventToCheckOption('rm-after-page-loaded', 'rm-after-page-loaded');





