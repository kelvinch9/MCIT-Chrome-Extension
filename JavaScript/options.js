// Saves options to chrome.storage

document.getElementById("save").onclick = function() {
  // save user identity
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var email = document.getElementById("email").value;
  var pennID = document.getElementById("pennID").value;
  //save courses
  var cit591 = document.getElementById("cit591").checked; //true if checked, false if not checked
  var cit592 = document.getElementById("cit592").checked;
  var cit593 = document.getElementById("cit593").checked;
  var cit594 = document.getElementById("cit594").checked;
  var cit595 = document.getElementById("cit595").checked;
  var cit596 = document.getElementById("cit596").checked;
  var cit549 = document.getElementById("cit549").checked;
  var cit581 = document.getElementById("cit581").checked;
  chrome.storage.sync.set({"first":first,
                            "last":last,
                            "email":email,
                            "pennID":pennID,
                            "cit591":cit591,
                            "cit592":cit592,
                            "cit593":cit593,
                            "cit594":cit594,
                            "cit595":cit595,
                            "cit596":cit596,
                            "cit549":cit549,
                            "cit581":cit581}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
}

// loads saved options onto the options page
document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID", "cit591", "cit592",
                            "cit593","cit594", "cit595", "cit596", "cit549", "cit581"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      // load user identity
      document.getElementById("first").value = items.first;
      document.getElementById("last").value = items.last;
      document.getElementById("email").value = items.email;
      document.getElementById("pennID").value = items.pennID;
      // load courses
      document.getElementById("cit591").checked = items.cit591;
      document.getElementById("cit592").checked = items.cit592;
      document.getElementById("cit593").checked = items.cit593;
      document.getElementById("cit594").checked = items.cit594;
      document.getElementById("cit595").checked = items.cit595;
      document.getElementById("cit596").checked = items.cit596;
      document.getElementById("cit549").checked = items.cit549;
      document.getElementById("cit581").checked = items.cit581;
      }
  });
}
