// Enneagram of Personality clock
var currentTime = new Date();
var currentMinute = currentTime.getMinutes();
var currentHour = currentTime.getHours();

var totalMinutes = currentMinute+(currentHour*60); // get total minutes
var enneaMinute = totalMinutes/40; // mins are mod 40 not mod 60
var enneaHour = 0; // each EnneaHour is 40 minutes in length
var enneaLength = 40; // Length per hour
var hourLength = [0]; // Start array at position zero
var enneagramType = ['Anger ', // Ego Vices
					'Pride ', 
					'Deciet ', 
					'Envy', 
					'Avarice ', 
					'Fear ', 
					'Gluttony ', 
					'Lust ', 
					'Sloth ',
					'Serenity ', // Ego Virtues
					'Humility ', 
					'Truthfulness ', 
					'Equanimity', 
					'Non-Attachment ', 
					'Courage ', 
					'Sobriety ', 
					'Innocence ', 
					'Action ',
					'Resentment ',  // Ego Fixations
					'Flattery ', 
					'Vanity ', 
					'Melancholy ', 
					'Stinginess ', 
					'Cowardice  ', 
					'Planning ', 
					'Vengence ', 
					'Indolence ',					
					'Perfection ',  // Ego Ideals
					'Freedom and Will ', 
					'Hope and Law ', 
					'Origin and Heritage', 
					'Omniscience ', 
					'Faith ', 
					'Wisdom ', 
					'Truth ', 
					'Love ']
;
var enneagramRole = ['Reforming Perfectionist  ', // Characteristic role 
					'Helpful Giver  ', 
					'Performing Achiever  ', 
					'Romantic Individualist   ', 
					'Observing Investigator   ', 
					'Loyal Skeptic   ', 
					'Epicuring Enthusiast   ', 
					'Challenging Protector  ', 
					'Meditating Peacemaker ']
;

// Fill array for enneagramRole for 36 positions 
for (i =0; i < 27; i++) {
	enneagramRole.push(enneagramRole[i]);
}
;

// Array for positions of EnneaHours, 40 min each
for (i = 1; i < 37; i++) {
	hourLength.push(enneaLength*i);
}
;

// Calculate EnneaHour
for (i = 0; i < 36; i++) {
	if (totalMinutes >= hourLength[i] && totalMinutes < hourLength[i+1]){
		enneagramType = enneagramType[i];
		enneaHour = i + 1; // hour zero is hour 1
		enneaMinute = totalMinutes-hourLength[i];
		enneagramRole = enneagramRole[i];
		// format to display time, ex. 02:02, when less than ten
		if (enneaHour < 10){enneaHour = "0" + enneaHour;};
		if (enneaMinute < 10){enneaMinute = "0" + enneaMinute;};
	}
}
;

var personalityTime = document.getElementById('personality-div');
personalityTime.insertAdjacentHTML('afterend','Its the EnneaHour of ' 
+ enneagramType + " " + enneaHour + ":" + enneaMinute + " in the role of the " + enneagramRole )
;
