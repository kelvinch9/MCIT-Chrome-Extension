//load the user's first, last, pennID, email from chrome.storage

document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("name").innerText = items.first + " " + items.last;
      document.getElementById("email").innerText = items.email;
      document.getElementById("pennID").innerText = "Penn ID: " + items.pennID;
    }
  });
}
