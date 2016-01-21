var YOUTUBE_dOWNLOADER_URL="http://feelmagic.xyz/youtube/youtube-downloader.php";
//var TITLE_SEND_URL="http://feelmagic.xyz/youtube/desktopAppListener.php";

chrome.pageAction.onClicked.addListener(function(tab) {


        var index = tab.url.indexOf("=");
        var url = YOUTUBE_dOWNLOADER_URL + "?videoid=" + tab.url.substr(index + 1) + "&format=best";
        if (tab.url.indexOf("youtube") > 0) {
            console.log(tab.title);
            chrome.tabs.create({url: url, active: false});
        }




});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){

    if (tab.url.indexOf('youtube.com/watch') > -1) {
        chrome.pageAction.show(tabId);
    }
});
