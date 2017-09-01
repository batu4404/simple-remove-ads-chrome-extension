var removeAdsInterval;
var duration = 2000;
var timeout = 500;

// ngu nhu 1 con ...
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest) {
    if (request.todo == "removeAds") {
        removeAds();
    }
});

chrome.storage.sync.get({'auto-remove': true}, function(options) {
    if (options['auto-remove']) {
        console.log('true');
        setTimeout(function() {
            removeAds();
            console.log('hello');
        }, timeout);
        removeAdsInterval = setInterval(function() {
            removeAds();
            console.log('hello');
        }, duration);
    }
});


// ko dc
// var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DocumentContentLoaded',a):window.attachEvent('onload',a)};

// /**
//  * @param {function} a The function to execute when the DOM is ready
//  */
// function DOMReady(a, b, c) {
//     console.log('111');
//     b = document;
//     c = 'addEventListener';
//     b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a);
// }

// console.log('ready', DOMReady);
// console.log('ready', typeof DOMReady);

// DOMReady(function () {
//     console.log('hello');
// //   alert('The DOM is Ready!');
// });

//removeAdDivs();

window.onload = function(event) {
    if (removeAdsInterval) {
        clearInterval(removeAdsInterval);
    }
    chrome.storage.sync.get({'rm-after-page-loaded': true}, function(options) {
        if (options['rm-after-page-loaded']) {
            removeAds();
        }
    })

    // removeAds();
    // clearInterval(removeDivInterval);

    // removeDivInterval = setInterval(function() {
    //     // removeAdDivs();
    //     removeAds();
    //     console.log('timeout');
    // }, 5000);
}

var adsPatt = /(^ad[s]?[-_]+|[-_]+ad[s]?[-_]+|[-_]+ad(?![^s])|adtima|adsbygoogle|_adv|myad|rightgooglead|leftgooglead|topgooglead|bottomgooglead)/i;
var ignorePatt = /(zPlayer)/i;

function isAdTag(tag) {
    var className = tag.className;
    var id = tag.id;

    // console.log('div id', id);

    return (adsPatt.test(className) && !ignorePatt.test(className))
            || (adsPatt.test(id) && !ignorePatt.test(id));
}

function removeAdDivs() {
    var divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        if (isAdTag(divs[i])) {
            console.log('removed div id ' + divs[i].id + ', class' + divs[i].className);
            divs[i].remove();
        }
    }
}

function removeAdIframes() {
    var iframes = document.getElementsByTagName('iframe');

    for (let i = 0; i < iframes.length; i++) {
        console.log('ifram id', iframes[i].id);
        if (isAdTag(iframes[i])) {
            console.log('removed div iframe ' + iframes[i].id + ', class' + iframes[i].className);
            iframes[i].remove();
        }
    }
}

function removeAdIns() {
    var ins = document.getElementsByTagName('ins');

    for (let i = 0; i < ins.length; i++) {
        if (isAdTag(ins[i])) {
            console.log('removed div iframe ' + ins[i].id + ', class' + ins[i].className);
            ins[i].remove();
        }
    }
}

function removeAds() {
    removeAdIframes();
    removeAdDivs();
    removeAdIns();
}