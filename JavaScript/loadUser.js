//load the user's first, last, pennID, email from chrome.storage

document.body.onload = function() {
  chrome.storage.sync.get(["first", "last", "email", "pennID", "cit591", "cit592",
        "cit593","cit594", "cit595", "cit596"], function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      //load user data

      //first, last
      if(items.first == null || items.last == null){
        document.getElementById("name").innerText = "add your full name in settings";
      }
      else{
        document.getElementById("name").innerText = items.first + " " + items.last;
      }
      //email
      if(items.email == null){
        document.getElementById("email").innerText = "add your email in settings";
      }
      else{
        document.getElementById("email").innerText = items.email;
      }
      //pennID
      if(items.pennID == null){
        document.getElementById("pennID").innerText = "add your pennID in settings";
      }
      else{
        document.getElementById("pennID").innerText = "Penn ID: " + items.pennID;
      }

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
