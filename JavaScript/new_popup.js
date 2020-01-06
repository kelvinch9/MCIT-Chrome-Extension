document.getElementById("settings").addEventListener("click", openSettings);

function openSettings() {
  chrome.windows.create({'url': 'options.html','type': 'popup', 'width': 400, 'height': 600});
}
