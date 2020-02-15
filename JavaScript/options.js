// Saves options to chrome.storage
var first = document.getElementById("opt-first");
var last = document.getElementById("opt-last");
var email = document.getElementById("opt-email");
var pennID = document.getElementById("opt-pennID");
//save courses
var cit591 = document.getElementById("cit591"); //true if checked, false if not checked
var cit592 = document.getElementById("cit592");
var cit593 = document.getElementById("cit593");
var cit594 = document.getElementById("cit594");
var cit595 = document.getElementById("cit595");
var cit596 = document.getElementById("cit596");
var cit549 = document.getElementById("cit549");
var cit581 = document.getElementById("cit581");

document.getElementById("save").onclick = function() {
  //grab latest values
  first = first.value;
  last = last.value;
  email = email.value
  pennID = pennID.value;
  cit591 = cit591.checked;
  cit592 = cit592.checked;
  cit593 = cit593.checked;
  cit594 = cit594.checked;
  cit595 = cit595.checked;
  cit596 = cit596.checked;
  cit549 = cit549.checked;
  cit581 = cit581.checked;

  // save user identity
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
      first.value = items.first == null ? "" : items.first;
      last.value = items.last == null ? "" : items.last;
      email.value = items.email == null ? "" : items.email;
      pennID.value = items.pennID == null ? "" : items.pennID;
      // load courses
      cit591.checked = items.cit591;
      cit592.checked = items.cit592;
      cit593.checked = items.cit593;
      cit594.checked = items.cit594;
      cit595.checked = items.cit595;
      cit596.checked = items.cit596;
      cit549.checked = items.cit549;
      cit581.checked = items.cit581;
      }
  });
}
