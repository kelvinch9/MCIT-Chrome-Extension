
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
    // update URLs for Overview
    // model URL: https://www.coursera.org/learn/mcit591-fall2019/home/
    var overview_591 = 'https://www.coursera.org/learn/mcit591-' + term + year.toString() + '/home/';
      document.getElementById("overview_591").href = overview_591;
    var overview_592 = 'https://www.coursera.org/learn/mcit592-' + term + year.toString() + '/home/';
      document.getElementById("overview_592").href = overview_592;
    var overview_593 = 'https://www.coursera.org/learn/mcit593-' + term + year.toString() + '/home/';
      document.getElementById("overview_593").href = overview_593;
    var overview_594 = 'https://www.coursera.org/learn/mcit594-' + term + year.toString() + '/home/';
      document.getElementById("overview_594").href = overview_594;
    var overview_595 = 'https://www.coursera.org/learn/mcit595-' + term + year.toString() + '/home/';
      document.getElementById("overview_595").href = overview_595;
    var overview_596 = 'https://www.coursera.org/learn/mcit596-' + term + year.toString() + '/home/';
      document.getElementById("overview_596").href = overview_596;

    //update URLs for Live Events
    // model URL: https://www.coursera.org/learn/mcit592-fall2019/office-hours
    var live_events_591 = 'https://www.coursera.org/learn/mcit591-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_591").href = live_events_591;
    var live_events_592 = 'https://www.coursera.org/learn/mcit592-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_592").href = live_events_592;
    var live_events_593 = 'https://www.coursera.org/learn/mcit593-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_593").href = live_events_593;
    var live_events_594 = 'https://www.coursera.org/learn/mcit594-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_594").href = live_events_594;
    var live_events_595 = 'https://www.coursera.org/learn/mcit595-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_595").href = live_events_595;
    var live_events_596 = 'https://www.coursera.org/learn/mcit596-' + term + year.toString() + '/office-hours';
      document.getElementById("live_events_596").href = live_events_596;

    //update URLs for Grades
    //model URL: https://www.coursera.org/learn/mcit592-fall2019/home/assignments
    var grades_591 = 'https://www.coursera.org/learn/mcit591-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_591").href = grades_591;
    var grades_592 = 'https://www.coursera.org/learn/mcit592-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_592").href = grades_592;
    var grades_593 = 'https://www.coursera.org/learn/mcit593-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_593").href = grades_593;
    var grades_594 = 'https://www.coursera.org/learn/mcit594-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_594").href = grades_594;
    var grades_595 = 'https://www.coursera.org/learn/mcit595-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_595").href = grades_595;
    var grades_596 = 'https://www.coursera.org/learn/mcit596-' + term + year.toString() + '/home/assignments';
      document.getElementById("grades_596").href = grades_596;

    //update URLs for Resources
    //model URL: https://www.coursera.org/learn/mcit592-fall2019/resources/
    var resources_591 = 'https://www.coursera.org/learn/mcit591-' + term + year.toString() + '/resources/';
      document.getElementById("resources_591").href = resources_591;
    var resources_592 = 'https://www.coursera.org/learn/mcit592-' + term + year.toString() + '/resources/';
      document.getElementById("resources_592").href = resources_592;
    var resources_593 = 'https://www.coursera.org/learn/mcit593-' + term + year.toString() + '/resources/';
      document.getElementById("resources_593").href = resources_593;
    var resources_594 = 'https://www.coursera.org/learn/mcit594-' + term + year.toString() + '/resources/';
      document.getElementById("resources_594").href = resources_594;
    var resources_595 = 'https://www.coursera.org/learn/mcit595-' + term + year.toString() + '/resources/';
      document.getElementById("resources_595").href = resources_595;
    var resources_596 = 'https://www.coursera.org/learn/mcit596-' + term + year.toString() + '/resources/';
      document.getElementById("resources_596").href = resources_596;

    //update URLs for Piazza
    //model URL: https://piazza.com/upenn/fall2019/cit592online
    var piazza_591 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit591online';
      document.getElementById("piazza_591").href = piazza_591;
    var piazza_592 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit592online';
      document.getElementById("piazza_592").href = piazza_592;
    var piazza_593 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit593online';
      document.getElementById("piazza_593").href = piazza_593;
    var piazza_594 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit594online';
      document.getElementById("piazza_594").href = piazza_594;
    var piazza_595 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit595online';
      document.getElementById("piazza_595").href = piazza_595;
    var piazza_596 = 'https://piazza.com/upenn/' + term + year.toString() + '/cit596online';
      document.getElementById("piazza_596").href = piazza_596;

    //hide elements in loadUser.js since document.body.onload supports only one function
