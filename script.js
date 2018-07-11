function renderTime() {
    "use strict";

    // Date
    var myDate = new Date();
    var year = myDate.getYear();
    //Javascript specific date method considerations
    if (year < 1000) {
        year += 1900;
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = ["Sun", "Mon", "Tue",
        "Wed", "Thu", "Fri", "Sat"];
    var monthArray = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"];
    // Date End

    //Time
    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    var per;

    // Cycle and meridiem logic

    if (h === 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 12;
        per = "P.M.";
    }
    if (h < 12) {
        per = "A.M."
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    //String for displaying the custom date
    var dateText = dayArray[day] + ", " + monthArray[month] + " " +
    dayM + ", " + year + " \n " + h + ":" + m + ":" + s + " " + per;

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = dateText;
var banner =
document.getElementById("banner");
  banner.textContent = dateText;

    setTimeout("renderTime()", 1000);
    //Time End
}

renderTime();