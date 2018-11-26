var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
var minuteNote = 0;

// Major Scales
var majorC = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // 1
var majorG = ['G', 'A', 'B', 'C', 'D', 'E', 'F Sharp']; // 2
var majorD = ['D', 'E', 'F Sharp', 'G', 'A', 'B', 'C Sharp']; // 3
var majorA = ['A', 'B', 'C Sharp', 'D', 'E', 'F Sharp', 'G Sharp']; // 4
var majorE = ['E', 'F Sharp', 'G Sharp', 'A', 'B', 'C Sharp', 'D Sharp'];  // 5
var majorB = ['B', 'C Sharp', 'D Sharp', 'E', 'F Sharp', 'G Sharp', 'A Sharp']; // 6
var majorFs = ['F Sharp', 'G Sharp', 'A Sharp', 'B', 'C Sharp', 'D Sharp', 'E Sharp']; // 7
var majorDf = ['D Flat', 'E Flat', 'F', 'G Flat', 'A Flat', 'B Flat', 'C']; // 8
var majorAf = ['A Flat', 'B Flat', 'C', 'D Flat', 'E Flat', 'F', 'G']; // 9
var majorEf = ['E Flat', 'F', 'G', 'A Flat', 'B Flat', 'C', 'D']; // 10
var majorBf = ['B Flat', 'C', 'D', 'E Flat', 'F', 'G', 'A']; // 11
var majorF = ['F', 'G', 'A', 'B Flat', 'C', 'D', 'E']; // 12
// Minor Scales
var minorA = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // 13
var minorE = ['E', 'F Sharp', 'G', 'A', 'B', 'C', 'D']; // 14
var minorB = ['B', 'C Sharp', 'D', 'E', 'F Sharp', 'G', 'A']; // 15
var minorFs = ['F Sharp', 'G Sharp', 'A', 'B', 'C Sharp', 'D', 'E']; // 16
var minorCs = ['C Sharp', 'D Sharp', 'E', 'F Sharp', 'G Sharp', 'A', 'B']; // 17
var minorGs = ['G Sharp', 'A Sharp', 'B', 'C Sharp', 'D Sharp', 'E', 'F Sharp']; // 18
var minorDs = ['D Sharp', 'E Sharp', 'F Sharp', 'G Sharp', 'A Sharp', 'B', 'C Sharp']; // 19
var minorBf = ['B Flat', 'C', 'D Flat', 'E Flat', 'F', 'G Flat', 'A Flat']; // 20
var minorF = ['F', 'G', 'A Flat', 'B Flat', 'C', 'D Flat', 'E Flat']; // 21
var minorC = ['C', 'D', 'E Flat', 'F', 'G', 'A Flat', 'B Flat']; // 22
var minorG = ['G', 'A', 'B Flat', 'C', 'D', 'E Flat', 'F']; // 23
var minorD = ['D', 'E', 'F', 'G', 'A', 'B Flat', 'C']; // 24

// Multidimensional Array for Circle of Fifths - Minor and Major scales
var circleOfFifths = [majorC, majorG, majorD, majorA, majorE, majorB, majorFs, majorDf, majorAf, majorEf, majorBf, majorF, minorA, minorE,minorB, minorFs,minorCs, minorGs, minorDs, minorBf, minorF, minorC, minorG, minorD];

// Names for Minor and Major scales
var majorMinorScales = ['C Major ', 'G Major ', 'D Major ', 'A Major ', 'E Major ', 'B Major ', 'F Sharp Major ', 'D Flat Major ', 'A Flat Major ', 'E Flat Major ', 'B Flat Major ', 'F Major ', 'A Minor ','E Minor ','B Minor ', 'F Sharp Minor ','C Sharp Minor ', 'G Sharp Minor ', 'D Sharp Minor ', 'B Flat Minor ', 'F Minor ', 'C Minor ', 'G Minor ','D Minor '];


// Minute broken into 7 parts, first is 12 minutes, remaining are 8 minutes
if (currentMinute < 12){
	minuteNote = 0;
}else if (currentMinute >= 12 && currentMinute < 21){
	minuteNote = 1;
}
else if (currentMinute >= 21 && currentMinute < 29){
	minuteNote = 2;
}
else if (currentMinute >= 29 && currentMinute < 37){
	minuteNote = 3;
}
else if (currentMinute >= 37 && currentMinute < 43){
	minuteNote = 4;
}
else if (currentMinute >= 43 && currentMinute < 51){
	minuteNote = 5;
}
else if (currentMinute >= 51 && currentMinute < 60){
	minuteNote = 6;
}
;

// Print to browser DIV
var musicTime = document.getElementById('music-div');
musicTime.insertAdjacentHTML('afterend', "Hour of " + majorMinorScales[currentHour] + " - Minute range of " + circleOfFifths[currentHour][minuteNote] + " ( Hour = " + currentHour + " Minute = " + currentMinute + ")");
