console.log('up and running');

////Pawmagotchi\\\

//



class Tamagotchi {
	constructor (name, ){
		this.age = 0;
		this.sleepiness = 1;
		this.boredom = 1;
		this.hunger = 1;
		this.name = name
	}
}
	const valueofInput = $('#input-name').val();
	const woodchuck = new Tamagotchi(valueofInput)

console.log(woodchuck);

const game = {
	gameStarted: false,
	// clock: 0,
	// setInterval (() => {

	// },500)

}

console.log(woodchuck);

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


$('#name-subm-bttn').click(function() {
	console.log("submit clicked");
	const valueofInput = $('#input-name').val();
	$('#formContainer').append(`I am ${valueofInput} and I am alive! Je pense donc je suis`);
	$('form').remove();
	console.log(valueofInput);
	// console.log(woodchuck);//to check if right

});

$('#buttonfeed').click(function(){
	console.log("feed button clicked");
	$('#buttoncontainer').append(`Yumm! Thank you!`);
	$('#buttonfeed').empty();
	$('#buttonfeed').append(`🌮`);

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






