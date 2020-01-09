//load the user's first, last, pennID, email from chrome.storage

document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID", "cit591", "cit592",
        "cit593","cit594", "cit595", "cit596"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      //load user data
      document.getElementById("name").innerText = items.first + " " + items.last;
      document.getElementById("email").innerText = items.email;
      document.getElementById("pennID").innerText = "Penn ID: " + items.pennID;
      //hide course elements
      if(items.cit591){
         document.getElementById("overview_591").style.display = "none";
         document.getElementById("live_events_591").style.display = "none";
         document.getElementById("grades_591").style.display = "none";
         document.getElementById("resources_591").style.display = "none";
         document.getElementById("piazza_591").style.display = "none";
      }
      // add other classes but test one above first

    }
  });
}
