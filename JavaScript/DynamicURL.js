
// script to get DynamicURLs. May need to break down into Coursera / Piazza

  var month = (new Date()).getMonth(); // gets month, 0 is january
  var year = (new Date().getFullYear()); // gets full year
  var day = (new Date().getDay()); // gets day, 0 is Sunday
  var term;

  /*
    NOTE: It seems this needs to be updated every year! Some terms may fall between months
    2020 schedule:
    Spring: Jan 15 - April 26
    Summer: May 12 - August 23 (on campus)
    Fall: Sep 1 - Dec 20
  */
    switch(month) {
      case 0: // jan
      case 1: // feb
      case 2: // mar
      case 3: // apr
        term = "spring";
        break;
      case 4: // may
      case 5: // jun
      case 6: // jul
        term = "summer";
        break;
      case 7: //aug
      case 8: //sept
      case 9: //oct
      case 10: //nov
      case 11: //dec
        term = "fall";
        break;
    }
    // model URL: https://www.coursera.org/learn/mcit591-fall2019/home/
    var myURL = 'https://www.coursera.org/learn/mcit591-' + term + year.toString() + '/home/';
    document.getElementById("demo").href = myURL; // change elementId to the linkid. see: https://stackoverflow.com/questions/18587633/dynamic-link-with-javascript
