//load the user's first, last, pennID, email from chrome.storage

document.body.onload = function () {
  chrome.storage.sync.get(["first", "last", "email", "pennID", "cit591", "cit592",
    "cit593", "cit594", "cit595", "cit596", "cis549", "cis581", "cis547", "cis515"
  ], function (items) {
    if (!chrome.runtime.error) {
      console.log(items);

      //Show welcome msg only until the settings page has been triggered.
      if (!(items.first == undefined && items.last == undefined && items.email == undefined && items.pennID == undefined)) {
        document.getElementsByClassName("welcome-msg")[0].style.display = "none";
        document.getElementsByClassName("welcome-msg")[1].style.display = "none";

        document.getElementById("name").innerHTML = items.first + " " + items.last;
        document.getElementById("email").innerHTML = items.email;
        document.getElementById("pennID").innerHTML = "Penn ID: " + items.pennID;
      }

      //Helper method that will either hide or show the links
      function hideShow(obj, status) {
        if (status == "show") {
          for (let i = 0; i < obj.length; i++) {
            obj[i].classList.remove("hidden");
          }
        } else {
          for (let i = 0; i < obj.length; i++) {
            obj[i].classList.add("hidden");
          }
        }
      }

      //CIT591
      var course591 = document.getElementsByClassName("urls_591");
      if (items.cit591) hideShow(course591, "show");
      else hideShow(course591, "hide");

      //CIT592
      var course592 = document.getElementsByClassName("urls_592");
      if (items.cit592) hideShow(course592, "show");
      else hideShow(course592, "hide");

      //CIT593
      var course593 = document.getElementsByClassName("urls_593");
      if (items.cit593) hideShow(course593, "show");
      else hideShow(course593, "hide");

      //CIT594
      var course594 = document.getElementsByClassName("urls_594");
      if (items.cit594) hideShow(course594, "show");
      else hideShow(course594, "hide");

      //CIT595
      var course595 = document.getElementsByClassName("urls_595");
      if (items.cit595) hideShow(course595, "show");
      else hideShow(course595, "hide");

      //CIT596
      var course596 = document.getElementsByClassName("urls_596");
      if (items.cit596) hideShow(course596, "show");
      else hideShow(course596, "hide");

      //CIS549
      var course549 = document.getElementsByClassName("urls_549");
      if (items.cis549) hideShow(course549, "show");
      else hideShow(course549, "hide");

      //CIS581
      var course581 = document.getElementsByClassName("urls_581");
      if (items.cis581) hideShow(course581, "show");
      else hideShow(course581, "hide");

      //CIS581
      var course547 = document.getElementsByClassName("urls_547");
      if (items.cis547) hideShow(course547, "show");
      else hideShow(course547, "hide");

      //CIS581
      var course515 = document.getElementsByClassName("urls_515");
      if (items.cis515) hideShow(course515, "show");
      else hideShow(course515, "hide");
    }
  });
}
