var YOUTUBE_dOWNLOADER_URL="http://feelmagic.xyz/youtube/youtube-downloader.php";
//var TITLE_SEND_URL="http://feelmagic.xyz/youtube/desktopAppListener.php";

chrome.pageAction.onClicked.addListener(function(tab) {

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        var activeTab = tabs[0];
        var index = activeTab.url.indexOf("=");
        var url = YOUTUBE_dOWNLOADER_URL + "?videoid=" + activeTab.url.substr(index + 1) + "&format=best";
        if (activeTab.url.indexOf("youtube") > 0) {
            console.log(activeTab.title);
            chrome.tabs.create({url: url, active: false});
        }


    });


});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

    if (tab.url.indexOf('youtube.com/watch') > -1) {

        chrome.pageAction.show(tabId);
    }
});
