function renderTime() {
    "use strict";

    // Date
    var myDate = new Date();
    var year = myDate.getYear();
    // Javascript specific date method considerations
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

    // Time
    var h = myDate.getHours();
    var meridiem = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    var cycle;

    // Cycle and meridiem logic
    if (h > 12) {
        h = h - 12;
    }

    if (meridiem < 12) {
        cycle = "AM";
    } else {
        cycle = "PM"
    }

    //formatting
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    // Strings for displaying the custom date
    var topBarString = dayArray[day] + ", " + monthArray[month] + " " +
        dayM + ", " + year + " | " + h + ":" + m + ":" + s + " " + cycle;
    var clockDateString = dayArray[day] + ", " + monthArray[month] + " " +
        dayM + ", " + year;
    var clockTimeString = h + ":" + m + ":" + s + " " + cycle;

    // Display text on screen
    var topBar = document.getElementById("top-bar");
    topBar.textContent = topBarString;
    var clockDate = document.getElementById("clock-display");
    clockDate.textContent = clockDateString;
    var clockTime = document.getElementById("clock-display2");
    clockTime.textContent = clockTimeString;

    setTimeout("renderTime()", 1000);
    // Time End
}

renderTime();