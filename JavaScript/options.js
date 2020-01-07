// Saves options to chrome.storage

document.getElementById("save").onclick = function() {
  var d = document.getElementById("first").value;
  chrome.storage.sync.set({"first" : d }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
}

// function save_options() {
//   var first = document.getElementById('first').value;
//   var last = document.getElementById('last').value;
//   var pennID = document.getElementById('pennID').value;
//
//   chrome.storage.sync.set({
//     first : first,
//     last : last,
//     pennID : pennID,
//   }, function() {
//     // Update status to let user know options were saved.
//     var status = document.getElementById('status');
//     status.textContent = 'Options saved.';
//     setTimeout(function() {
//       status.textContent = '';
//     }, 750);
//   });
// }

// Restores select box and checkbox state using the preferences
// stored in chrome.storage. (from google documentation)

/*
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
*/
