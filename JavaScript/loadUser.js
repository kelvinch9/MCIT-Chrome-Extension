//load the user's first, last, pennID, email from chrome.storage

//failing because of asynchronous issue. see: https://stackoverflow.com/questions/18699075/callback-returns-undefined-with-chrome-storage-sync-get

chrome.storage.sync.get(['first', 'email'], function(result){
  document.getElementById("name").innerHTML = result.key;
  document.getElementById("email").innerHTML = result.key;

});
