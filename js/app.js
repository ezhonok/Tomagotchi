console.log('up and running');

////Pawmagotchi\\\

//Completed:
// Instantiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Add the ability to name your pet.
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// Add buttons to the screen to feed your pet

// In Progress:
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age

//Pending:
// turn off the lights
// play with your pet
// feed your pet
// Increase your pet's age every x minutes
// Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Style the page.



class Tamagotchi {
	constructor (name){
		this.age = 0;
		this.sleepiness = 1;
		this.boredom = 1;
		this.hunger = 1;
		this.name = name
	}

	feed() {
		console.log("feed!!!!");
		$('#buttoncontainer').append(`Yumm! Thank you!`);
		$('#buttonfeed').empty();
		$('#buttonfeed').append(`🌮`);
	}
	sleep() {
		console.log("lights off");
		$('#inner-window').css('background', 'black');
	}
	play() {
		$('#buttoncontainer').append(` That was fun! Woof!`);
		$('#buttonplay').empty();
		$('#buttonplay').append(`🎮`);
	}


	setTimerPromts() {
	setInterval(

				// this function gets run.....
				() => {
				
					// all code in here gets run every second
					game.clock++
					
				}, 
				1000
				)
}

}




const game = {
	// everything i need to keep track of goes here
	clock: 0,
	tamaEssence: null,
	hunger: null,
	boredom: null,
	sleepiness: null,
	age: 0,

	start: function (name) {
		
		// creating the tomagotchi
		const woodchuck = new Tamagotchi(name)
		console.log(woodchuck);
		this.tamaEssence = woodchuck
		$('#formContainer').append(`💕Hi, I am ${woodchuck.name}! Let's be friends!💕`);
		$('form').remove();
		this.startTimer()
	},

	feedMe() {
		if (this.clock % 3 === 0) {
				this.hunger++
				$('#hunger').text("Hunger: " + this.hunger)
		}
	},

	playWithMe() {
		if (this.clock % 5 === 0) {
				this.boredom++
				$('#boredom').text("Boredom: " + this.boredom)
		}
	},

	lightsOff() {
		if (this.clock % 7 === 0) {
			 this.sleepiness++
			 $('#sleep').text("Sleepiness: " + this.sleepiness)

		}
	},

	aging() {
		if (this.clock % 60 === 0) {
			this.age++
			$('#age').text("Age: " + this.age)
		}
	},

	feedMePrompt() {
		if (this.hunger === 5) {
		}

	},

	playWithMePrompt() {

	},

	lightsOffPrompt() {

	},


	startTimer() {
		//setInterval 

		setInterval(

			// this function gets run.....
			() => {
				this.feedMe()
				this.playWithMe()
				this.lightsOff()
				this.aging()
			
				// all code in here gets run every second
				this.clock++
				// this.clock++	

			//if hunger reaches 5 - prompt to feed - where to store
				console.log(game.clock +  ' clock');
				console.log(game.hunger + ' hunger');
				console.log(game.sleepiness + ' sleepiness');
				console.log(game.boredom + ' boredom');
			}, 

			// ....every this many ms
			1000
		)


	}
}



// // //jquery
$('#tamacontainer').on('click', (event)	 => {
	console.log(event.target);
})



$('#name-subm-bttn').on('click', function() {
	// get the name from the dom
	const valueofInput = $('#input-name').val();
	game.start(valueofInput)
});


$('#buttonfeed').click(function(){
	game.tamaEssence.feed()
});


$('#buttonsleep').click(function(){
	game.tamaEssence.sleep()
});


$('#buttonplay').click(function(){
	game.tamaEssence.play()
});	







$('form').on('submit', (e) => {
	e.preventDefault();
})






