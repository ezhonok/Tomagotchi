console.log('up and running');

////Pawmagotchi\\\

//



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

}




const game = {
	// everything i need to keep track of goes here
	clock: 0,
	tamaEssence: null,
	hunger: null,
	boredom: null,
	sleepiness: null,

	start: function (name) {
		
		// creating the tomagotchi
		const woodchuck = new Tamagotchi(name)
		console.log(woodchuck);
		this.tamaEssence = woodchuck
		$('#formContainer').append(`I am ${woodchuck.name} and I am alive! Je pense donc je suis`);
		$('form').remove();
		this.startTimer()
	},


	startTimer() {
		//setInterval 

		setInterval(

			// this function gets run.....
			() => {
				if (game.clock % 3 === 0) {
				game.hunger++
			}
				if (game.clock % 5 === 0) {
				game.boredom++
			}
				if (game.clock % 7 === 0) {
				game.sleepiness++
			}
				// all code in here gets run every second
				game.clock++
				// this.clock++	
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






