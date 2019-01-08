// Define Arrays
var dayArray = ["Sun", "Mon", "Tue",
        "Wed", "Thu", "Fri", "Sat"];
var monthArray = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"];

var myDate = new Date();
var meridiem = myDate.getHours();
var greeting = getGreeting(meridiem);

function getGreeting(meridiem){
    // Greeting
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
    return greeting;
}

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

    // Time
    var h = myDate.getHours();
    var meridiem = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    var cycle;

    if(m === 0 && s === 0){
        greeting = getGreeting(meridiem);
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

    //formatting for single digit hour strings
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

    // Display data
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