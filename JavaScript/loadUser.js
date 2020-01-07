//load the user's first, last, pennID, email from chrome.storage

//failing because of asynchronous issue. see: https://stackoverflow.com/questions/18699075/callback-returns-undefined-with-chrome-storage-sync-get

document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("name").innerText = items.first + " " + items.last;
      document.getElementById("email").innerText = items.email;
    }
  });
}

// chrome.storage.sync.get(['first', 'email'], function(result){
//   document.getElementById("name").innerHTML = result.key;
//   document.getElementById("email").innerHTML = result.key;
// });
