document.getElementById("settings").addEventListener("click", openSettings); //This code will grab the settings button and add an event listener

//function that settings button will trigger when a click is registered. The function creates a new popup with the specified measures
function openSettings() {
  chrome.windows.create({'url': 'options.html','type': 'popup', 'width': 400, 'height': 600});
}
