// used to load user first name, last name, pennID into index.html

// events: https://developer.chrome.com/extensions/runtime#event-onInstalled

chrome.runtime.onStartup.addListener(function()){
  var first = document.getElementByName('first');
  chrome.storage.sync.get(['first' : first], function(result) {
    first.value = result.key;
  });



}

/*
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});
*/
