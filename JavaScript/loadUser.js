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

      //hide 591
      if(!(items.cit591)){
         document.getElementById("overview_591").style.display = "none";
         document.getElementById("live_events_591").style.display = "none";
         document.getElementById("grades_591").style.display = "none";
         document.getElementById("resources_591").style.display = "none";
         document.getElementById("piazza_591").style.display = "none";
      }
      //hide 592
      if(!(items.cit592)){
         document.getElementById("overview_592").style.display = "none";
         document.getElementById("live_events_592").style.display = "none";
         document.getElementById("grades_592").style.display = "none";
         document.getElementById("resources_592").style.display = "none";
         document.getElementById("piazza_592").style.display = "none";
      }
      //hide 593
      if(!(items.cit593)){
         document.getElementById("overview_593").style.display = "none";
         document.getElementById("live_events_593").style.display = "none";
         document.getElementById("grades_593").style.display = "none";
         document.getElementById("resources_593").style.display = "none";
         document.getElementById("piazza_593").style.display = "none";
      }
      //hide 594
      if(!(items.cit594)){
         document.getElementById("overview_594").style.display = "none";
         document.getElementById("live_events_594").style.display = "none";
         document.getElementById("grades_594").style.display = "none";
         document.getElementById("resources_594").style.display = "none";
         document.getElementById("piazza_594").style.display = "none";
      }
      //hide 595
      if(!(items.cit595)){
         document.getElementById("overview_595").style.display = "none";
         document.getElementById("live_events_595").style.display = "none";
         document.getElementById("grades_595").style.display = "none";
         document.getElementById("resources_595").style.display = "none";
         document.getElementById("piazza_595").style.display = "none";
      }
      //hide 596
      if(!(items.cit596)){
         document.getElementById("overview_596").style.display = "none";
         document.getElementById("live_events_596").style.display = "none";
         document.getElementById("grades_596").style.display = "none";
         document.getElementById("resources_596").style.display = "none";
         document.getElementById("piazza_596").style.display = "none";
      }
    }
  });
}
