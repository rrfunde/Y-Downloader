var YOUTUBE_dOWNLOADER_URL="http://feelmagic.xyz/youtube/youtube-downloader.php";
var TITLE_SEND_URL="http://localhost/youtube/desktopAppListener.php";
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var index=activeTab.url.indexOf("=");

    var url= YOUTUBE_dOWNLOADER_URL+"?videoid="+activeTab.url.substr(index+1)+"&format=best";
    if(activeTab.url.indexOf("youtube")>0){
	console.log(activeTab.title);
    chrome.tabs.create({ url: url,active:false });}

      //

      var xhr = new XMLHttpRequest();
      xhr.open("GET", TITLE_SEND_URL+"?request=true&title="+activeTab.title, true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
              // JSON.parse does not evaluate the attacker's scripts.
              console.log("Done");
          }
      }
      xhr.send();


    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action","title":activeTab.title});
  });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      if (request.greeting == "hello"){
       var ybUrl=sender.tab.url;
/*
       var index=ybUrl.indexOf("=");

       var url= "http://feelmagic.xyz/youtube/youtube-downloader.php?videoid="+ybUrl.substr(index+1)+"&format=best";
        chrome.tabs.create({ url: url });*/
        sendResponse({farewell: ybUrl.substr(index+1)});
      }
    });
/*
  var url="feelmagic.xyz/youtube";
  var http=new XMLHttpRequest();
  http.open("POST",url,true);
//Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {

    }

  }
  http.send();*/
