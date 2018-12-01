var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
var hourAnimal = "none";

// Chinese Zodiac 
var chineseZodiac = ['Horse ', 'Goat ', 'Monkey ', 'Rooster', 'Dog ', 'Pig ', 'Rat ', 'Ox ', 'Tiger ', 'Rabbit ', 'Dragon ', 'Snake '];

// Day broken into 12 parts
if (currentHour >= 23 && currentHour < 1){
	hourAnimal = 0;
}
else if (currentHour >= 1 && currentHour < 3){
	hourAnimal = 1;
}
else if (currentHour >= 3 && currentHour < 5){
	hourAnimal = 2;
}
else if (currentHour >= 5 && currentHour < 7){
	hourAnimal = 3;
}
else if (currentHour >= 7 && currentHour < 9){
	hourAnimal = 4;
}
else if (currentHour >= 9 && currentHour < 11){
	hourAnimal = 5;
}
else if (currentHour >= 11 && currentHour < 13){
	hourAnimal = 6;
}
else if (currentHour >= 13 && currentHour < 15){
	hourAnimal = 7;
}
else if (currentHour >= 15 && currentHour < 17){
	hourAnimal = 8;
}
else if (currentHour >= 17 && currentHour < 19){
	hourAnimal = 9;
}
else if (currentHour >= 19 && currentHour < 21){
	hourAnimal = 10;
}
else if (currentHour >= 21 && currentHour < 23){
	hourAnimal = 11;
}
;

// Print to browser DIV
var chinaTime = document.getElementById('china-div');
chinaTime.insertAdjacentHTML('afterend', "Hour of the " + chineseZodiac[hourAnimal] + " ( Hour = " + currentHour + " Minute = " + currentMinute + ")" ) ;
