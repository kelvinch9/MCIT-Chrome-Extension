
//function getURL(){

  var month = (new Date()).getMonth(); // gets month, 0 is january
  var year = (new Date().getFullYear()); // gets full year
  var day = (new Date().getDay()); // gets day, 0 is Sunday
  var term;

  /*
    spring = [0,1,2,3,4] jan, feb, mar, apr, may
    summer =[4,5,6,7] may, jun, jul, aug
    fall =[7,8,9,10,11] aug, sept, oct, nov, dec

    2020 schedule:
    Spring: Jan 15 - April 26
    Summer: May 12 - August 23 (on campus)
    Fall: Sep 1 - Dec 20

    can split May and August into halves
  */

    if(month == 4 || month == 7){ // if May or August, then look at date
      if(month == 4 &&
    }

    switch(month) {
      case 0: // jan
      case 1: // feb
      case 2: // mar
      case 3: // apr
        term = "spring";
        break;
      case 4: // may
        if()
        // calculate dates
        break;
      case 5: // jun
      case 6: //jul
        term = "summer";
        break;
      case 7: //aug
        // calculate dates
        break;
      case 8: // sept
      case 9: // oct
      case 10: //nov
      case 11: //dec
        term = "fall";
        break;
    }


  // document.getElementById("demo").innerHTML = "coursera";

//}
