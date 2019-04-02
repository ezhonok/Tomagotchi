console.log('up and running');

////Pawmagotchi\\\

//



class Tamagotchi {
	constructor (){
		this.age = 0
		this.sleepiness = 1 
		this.boredom = 1
		this.hunger = 1 
	}
}

console.log(Tamagotchi);

const game = {

}





// //jquery
$('#tamacontainer').on('click', (event) => {
	console.log(event.target);
})
// const $feedButton = $('#buttonfeed')
// console.log($feedButton);


// $('#feedButton').click(function() {
// 	const $displayFood = $('food');


$('#name-subm-bttn').click(function() {
	console.log("submit clicked");
	const valueofInput = $('#input-name').val();
	console.log(valueofInput);
});




$('form').on('submit', (e) => {
	e.preventDefault();
})






