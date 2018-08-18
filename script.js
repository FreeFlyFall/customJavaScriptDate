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
    var greeting;

    //Greeting logic
    if (meridiem <= 4) {
        greeting = "Good Night.";
    } else if (meridiem === 5) {
        greeting = "Mernin'...";
    } else if (meridiem < 12) {
        greeting = "Good Morning!";
    } else if (meridiem <= 18) {
        greeting = "Good Afternoon!";
    } else if (meridiem <= 22) {
        greeting = "Good Evening!";
    } else if (meridiem < 24) {
        greeting = "Good Night.";
    }

    // Cycle and meridiem logic
    if (h > 12) {
        h = h - 12;
    }
    if (meridiem < 12) {
        cycle = "AM";
    } else {
        cycle = "PM";
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

    // Template literal strings for displaying the custom date
    // Should not use template literals without transpiling with babel, unless you don't want to support IE11-
    var topBarString = `${dayArray[day]}, ${monthArray[month]} ${dayM}, ${year} | ${h}:${m}:${s} ${cycle}`
    var clockDateString = `${dayArray[day]}, ${monthArray[month]} ${dayM}, ${year}`;
    var clockTimeString = `${h}:${m}:${s} ${cycle}`;
    // Concatenated strings
    // var topBarString = dayArray[day] + ", " + monthArray[month] + " " +
    //     dayM + ", " + year + " | " + h + ":" + m + ":" + s + " " + cycle;
    // var clockDateString = dayArray[day] + ", " + monthArray[month] + " " +
    //     dayM + ", " + year;
    // var clockTimeString = h + ":" + m + ":" + s + " " + cycle;

    // Display text on screen
    var topBar = document.getElementById("top-bar");
    topBar.textContent = topBarString;
    var greetingDisplay = document.getElementById("greeting");
    greetingDisplay.textContent = greeting;
    var clockDate = document.getElementById("clock-display");
    clockDate.textContent = clockDateString;
    var clockTime = document.getElementById("clock-display2");
    clockTime.textContent = clockTimeString;

    setTimeout("renderTime()", 1000);
}

renderTime();
