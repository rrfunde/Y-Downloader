chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
   //  var video=document.getElementsByTagName("video");
     console.log(request.title);
    }
  }
);
/*
setInterval(function(){chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
});},5000);
    */