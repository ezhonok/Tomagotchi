console.log('up and running');

////Pawmagotchi\\\

//



class Tamagotchi {
	constructor (name){
		this.age = 0;
		this.sleepiness = 1; //pulling value in from
		this.boredom = 1; //pulling value in from
		this.hunger = 1; //pulling value in from
		this.name = name
	}

	feed() {
		console.log("feed!!!!");
		$('#buttoncontainer').append(`Yumm! Thank you!`);
		$('#buttonfeed').empty();
		$('#buttonfeed').append(`🌮`);
	}
}


	// setInterval (() => {

	// },500)

const game = {
	// everything i need to keep track of goes here
	gameStarted: false,
	clock: 0,
	tamaEssence: null,

	start: function (name) {
		
		// creating the tomagotchi
		const woodchuck = new Tamagotchi(name)
		console.log(woodchuck);
		this.tamaEssence = woodchuck
		$('#formContainer').append(`I am ${woodchuck.name} and I am alive! Je pense donc je suis`);
		$('form').remove();
	},
	startTimer() {
		//setInterval 

		setInterval(

			// this function gets run.....
			() => {
				// all code in here gets run every second
				this.clock++	
				console.log(this.clock);
			}, 

			// ....every this many ms
			1000
		)


	}
}


for(let i = 0; i < 100; i++) {
	if (i % 5 === 0) {
		console.log(i);
	}
	// console.log(i);

}
// const character = {
// 	woodchuck: 
// 	console.log();
// }
// 
//solve: access woodchuck 

// // //jquery
$('#tamacontainer').on('click', (event)	 => {
	console.log(event.target);
})


// $('#feedButton').click(function() {
// 	const $displayFood = $('food');
// });


$('#name-subm-bttn').on('click', function() {
	// get the name from the dom
	const valueofInput = $('#input-name').val();
	game.start(valueofInput)
});


$('#buttonfeed').click(function(){
	console.log("feed button clicked");


});


$('#buttonsleep').click(function(){
	console.log("sleep button clicked");
	$('#inner-window').css('background', 'black', 'opulence');

});


const playWithMe = $('#buttonplay').click(function(){
	console.log("play button clicked");
	$('#buttoncontainer').append(` That was fun! Woof!`);
	$('#buttonplay').empty();
	$('#buttonplay').append(`🎮`);//try using math.random for these
});	




// $('name-subm-bttn').on('click', () => {
// 	const valueofInput = $('input-name').
// })


$('form').on('submit', (e) => {
	e.preventDefault();
})






