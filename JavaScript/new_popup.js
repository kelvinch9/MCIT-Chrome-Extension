
//There is a a better code that is DRYer below. However, it has a bug that triggers all the buttons as soon as the extension is opened.
//The bug seems to be linked to passing arguments into the function being called inside the addEventListener code.
//Add event listener to buttons

document.getElementById("coursera").addEventListener("click", openCourses);
document.getElementById("settings").addEventListener("click", openSettings);
document.getElementById("piazza").addEventListener("click", openPiazza);
document.getElementById("admin").addEventListener("click", openAdmin);

//functions to trigger a new popup
function openCourses() {
  chrome.windows.create({'url': 'courses.html','type': 'popup', 'width': 400, 'height': 650});
}

function openSettings() {
  chrome.windows.create({'url': 'options.html','type': 'popup', 'width': 400, 'height': 400});
}

function openPiazza() {
  // Unimplemented yet
}

function openAdmin() {
  // Unimplemented yet
}


//DRYer code
// var arr = document.querySelectorAll(".popup");
// for(i = 0; i < arr.length; i++) {
//   arr[i].addEventListener("click", openPopup(arr[i].getAttribute('id'))); //Bug seem to be here in this code line. Passing arguments to openPopup seem to trigger all the buttons soon as extension is opened.
//
//
// // document.querySelector("#coursera").addEventListener("click", openPopup("coursera"));
// // document.querySelector("#settings").addEventListener("click", openPopup("settings"));
//
//
// //function that settings button will trigger when a click is registered. The function creates a new popup with the specified measures
// function openPopup(id) {
//   if(id === "coursera") {
//     chrome.windows.create({'url': 'courses.html','type': 'popup', 'width': 400, 'height': 500});
//   }
//   else if(id === "piazza") {
//   }
//   else if(id === "admin") {
//   }
//   else {
//     chrome.windows.create({'url': 'options.html','type': 'popup', 'width': 400, 'height': 400});
//   }
// }
