console.log('up and running');

////Pawmagotchi\\\

//Completed:
// Instantiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Add the ability to name your pet.
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// Add buttons to the screen to feed your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Increase your pet's age every x minutes
// feed your pet - clear stats
// turn off the lights & clear voredom stats
// play with pet - clear stats
// Style the page
// turn the lights back on
// Your pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


// In Progress:
// feed your pet - result
// play with your pet - result




class Tamagotchi {
	constructor (name){
		this.age = 0;
		this.sleepiness = 1;
		this.boredom = 1;
		this.hunger = 1;
		this.name = name
	}

	feed() {
		$('#tamacontainer').append();
		$('#buttonfeed').empty();
		$('#buttonfeed').append(`🌮`);
		$('formContainer').empty();
		$('#formContainer').append(`💕Yummm! Thank you!💕`);
		
		game.hunger = 0;

	}
	sleep() {
		$('#inner-window').css('background', 'black');
		$('#tamabody').css('background', 'url("http://3.bp.blogspot.com/-Ks2RHr83la0/UkDVIa_msiI/AAAAAAAAAC8/Ph5G0qXaMco/s1600/zzz.gif")')
		$('#buttonsleep').empty()
		$('#buttonsleep').append('💡')
		game.sleepiness = 0;
	}
	wakeUp() {
		$('#buttonsleep').empty()
		$('#buttonsleep').append('✨')
		$('#inner-window').css('background', 'url("https://content.audiospace.co/stations/40/files/News/sky-night-street-polska.jpg')
		$('#tamabody').css('background', 'url("https://i.gifer.com/embedded/download/91S8.gif"')
	}
	play() {
		$('#buttonplay').empty();
		$('#buttonplay').append(`🎮`);
		$('#buttonplay').animate({top:'10px'}, {bottom:'1opx'})
		$('#formContainer').append(`💕That was fun! WOOF!💕`);
		game.boredom = 0;
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

	clickBox() {
		$('#curtain').remove()
	},
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
				$('#tamabody').css('height', '225px', 'width', '225px')

		}
		if (this.hunger >=10) {
			$('#inner-window').remove()
			$('#tamacontainer').css('background', 'url("https://media0.giphy.com/media/oYyrxpOuuHXCo/giphy.gif")')
		}
	},

	playWithMe() {
		if (this.clock % 5 === 0) {
				this.boredom++
				$('#boredom').text("Boredom: " + this.boredom)
				$('#tamabody').css('height', '210px', 'width', '210px')

		}
		if (this.boredom >=10) {
			$('#inner-window').remove()
			$('#tamacontainer').css('background', 'url("https://media0.giphy.com/media/oYyrxpOuuHXCo/giphy.gif")')
		}
	},

	lightsOff() {
		if (this.clock % 7 === 0) {
			 this.sleepiness++
			 $('#sleep').text("Sleepiness: " + this.sleepiness)
		}
		if (this.sleepiness >=10) {
			$('#inner-window').remove()
			$('#tamacontainer').css('background', 'url("https://media0.giphy.com/media/oYyrxpOuuHXCo/giphy.gif")')

		}
	},

	aging() {
		if (this.clock % 60 === 0) {
			this.age++
			$('#age').text("Age: " + this.age)
		}
		if (this.age % 2 === 0) {
			$('#tamabody').css('background', 'url("https://orig00.deviantart.net/aa4a/f/2017/042/0/6/output_r62fts_by_shadythebluewolf-dayr1uy.gif")')
		}
	},

	feedMePrompt() {
		if (this.hunger === 5) {

		}

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
					
				console.log(game.clock +  ' clock');
				console.log(game.hunger + ' hunger');
				console.log(game.sleepiness + ' sleepiness');
				console.log(game.boredom + ' boredom');
			}, 

			
			1000
		)


	}
}




$('#tamacontainer').on('click', (event)	 => {
	console.log(event.target);
})



$('#name-subm-bttn').on('click', function() {
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


$('#buttonsleep').dblclick(function(){
	game.tamaEssence.wakeUp()
});

$('#box').click(function(){
	game.clickBox()

});


$('form').on('submit', (e) => {
	e.preventDefault();
})






