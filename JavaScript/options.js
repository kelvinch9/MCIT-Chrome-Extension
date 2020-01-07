// Saves options to chrome.storage

document.getElementById("save").onclick = function() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var pennID = document.getElementById("pennID").value;
  chrome.storage.sync.set({"first":first, "last":last, "email":email, "pennID":pennID}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
}
