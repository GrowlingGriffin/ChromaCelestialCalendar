// Calculates and prints the Chroma Celestial date
function getCelestialDate() {

    // Dec 21 2016 00:00 UT, to correlate with Gregorian calendar, in seconds
    const dec21_2016 = 1482278400;
    const secondsInDay = 86400;
    const secondsInYear = secondsInDay * 365;
    const secondsInLeapYear = secondsInDay * 366;
    const yearsInTheFuture = 12;

    // Initialize arrays and variables 
    var colorOfDay = [];
    var dayOfMonth = [];
    var monthOfYear = [];
    var epochDate = [];
    var isItLeapYear = [];
    var leapYear = 0;
    var celestialYear = 0;
    var celestialDay = 0;
    var monthLength = 35;
    var celestialDateElement = document.getElementById("celestial-date");

    // Arrays for 11 Chroma Celestial names of the month
    var chromaMonthName = ["Mercury",
        "Venus",
        "Earth",
        "Moon",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto",
        "Sun"
    ];

    // Array for New Year epoch positions
    for (var i = 0; i <= yearsInTheFuture; i++) {
        // Set starting position Dec 21, 2016 	
        if (i == 0) {
            epochDate.push(dec21_2016);
            // Talley leap years
            isItLeapYear.push(1);
            j = 0;
        } else if (i >= 1) {
            // Check for leap year and add to previous year position
            if (j > 2) {
                epochDate.push(secondsInLeapYear + epochDate[i - 1]);
                isItLeapYear.push(1);
                // Reset leap year count 
                j = 0;
            } else {
                epochDate.push(secondsInYear + epochDate[i - 1]);
                isItLeapYear.push(0);
                j++;
            }

        }
    };

    // Get timezone offset, in seconds
    var timezoneOffset = (new Date().getTimezoneOffset()) * 60;

    // Get current time, minus timezone offset, in seconds
    var timeRightNow = Math.floor((new Date).getTime() / 1000) - timezoneOffset;

    // Get "year" and "day of year" within range of future years, else out of range
    for (var i = 0; i <= yearsInTheFuture; i++) {
        if (timeRightNow >= epochDate[i] && timeRightNow < epochDate[i + 1]) {
            // Plus or minus 1 used for array positioning
            celestialYear = (i + 1);
            celestialDay = Math.ceil(((timeRightNow - epochDate[i]) / secondsInDay) - 1);
        }
    };

    // Check for leap year
    if (isItLeapYear[celestialYear] > 0) {
        leapYear = 1;
    } else {
        leapYear = 0;
    };

    // Array for Chroma Celestial names for days of the week
    if (leapYear == 0) {
        // Standard year 5 day week
        for (var i = 0; i <= 364; i++) {
            colorOfDay.push("Redday");
            i++;
            colorOfDay.push("Orangeday");
            i++;
            colorOfDay.push("Yellowday");
            i++;
            colorOfDay.push("Greenday");
            i++;
            colorOfDay.push("Blueday");
        }
    } else {
        // Leap year is a 6 day week, in reverse order, adding violet
        for (var i = 0; i <= 365; i++) {
            colorOfDay.push("Violetday");
            i++;
            colorOfDay.push("Blueday");
            i++;
            colorOfDay.push("Greenday");
            i++;
            colorOfDay.push("Yellowday");
            i++;
            colorOfDay.push("Orangeday");
            i++;
            colorOfDay.push("Redday");
        }
    };

    // Array for Chroma Celestial day numbers per month
    if (leapYear == 0) {
        var j = 1; //  j starts at day 1, instead day 0
        var k = 0; // k tallys 11 months
        for (var i = 0; i <= 364; i++) {
            dayOfMonth.push(j++); // 35 day month		
            monthOfYear.push(chromaMonthName[k]); // Month of year
            if (j > 35) {
                j = 1;
                k++;
            }
        }
    } else {
        // Day Numbers for 36 day month if leap year
        var j = 1;
        var k = 0;
        for (var i = 0; i <= 365; i++) {
            dayOfMonth.push(j++);
            monthOfYear.push(chromaMonthName[k]);
            if (j > 36) {
                j = 1;
                k++;
            }
        }
    };

    // Print date
    if (timeRightNow < dec21_2016) {
        celestialDateElement.insertAdjacentHTML('afterbegin', "Clock set too far in the past");
    } else if (timeRightNow > epochDate[yearsInTheFuture]) {
        celestialDateElement.insertAdjacentHTML('afterbegin', "Clock set too far ahead");
    } else {
        celestialDateElement.insertAdjacentHTML('afterbegin',
            colorOfDay[celestialDay] + ", " +
            monthOfYear[celestialDay] + " " +
            dayOfMonth[celestialDay] + ", " +
            "Year " + celestialYear);
    }
};
