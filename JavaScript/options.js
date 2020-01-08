// Saves options to chrome.storage

document.getElementById("save").onclick = function() {
  // save user identity
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var pennID = document.getElementById("pennID").value;
  //save courses
  var cit591 = document.getElementById("cit591").checked;
  chrome.storage.sync.set({"first":first,
                            "last":last,
                            "email":email,
                            "pennID":pennID,
                            "cit591":cit591}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
}

// loads saved options onto the options page
document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      // load user identity
      document.getElementById("first").value = items.first;
      document.getElementById("last").value = items.last;
      document.getElementById("email").value = items.email;
      document.getElementById("pennID").value = items.pennID;
      // load courses
      document.getElementById("cit591").checked = items.cit591; // unable to load checkbox / courses
      }
  });
}
