// Old javascript 
var counter = 5;

function sayName(){
   var name = "Kevin Ndahayo";
   console.log(name);

}

sayName();


// New ES6 javascript

/* variables: the new way to write  javascript variables is using "Let" and "const"

*/

counter = 6;

console.log(counter);

// Javascript Loops: for , for...of, for...each etc.


// For Loop: Ascending order looping

for(let i = 0; i< 5; i++){
	console.log('Loop', i);
}


// For Loop: Descending order looping

for (let i = 5; i>0; i--){
	console.log("Descending order Looping ", i );
}

// For Loop: Using break;

for (let i = 0; i<5; i++){
	console.log('Ascending order Looping', i);

	// if condition 
	if(i == 3){
		break;
	}
}

// For Loop: looping through an array 
const names = ["John", "Bob", "Mary", "Joe"];

for(let i = 0; i<names.length; i++){
	console.log('Name: ', names[i])
};

// Using For..of loop
const listOfNames = ["Kevin ndahayo", "John baptista", "The Rocky", "John Cinah", "Romain Reins"];

for(name of listOfNames ) console.log(name);

// Using For..In loop: looping through objects 
const userList = { 
	firstName: "Kevin",
	lastName: "Ndahayo"
}

for(key in userList) {
	console.log(userList[key])
}

//  While Loop
let i = 0;
while(i< 10){
	console.log(i);
	i++;

	if(i === 5){
		break;
	}
}

// Do..While loop
do{
	i++;
	if(i === 1){
		break;
	}
	console.log(i);
} while(i < 10 )

// For..each Loop: looping through array using for...each loop
const animals = ["cat", "Dog", "Buffalo", "Goat", "Hyena"];
animals.forEach(animal => {
	// log individual animal on screen
	console.log(animal)
})


// Arrays and their Methods
const items = [
	{
		name: 'Bike',
		price: 100
	},

	{
		name: 'TV',
		price: 200,
	},

	{
		name: 'Album',
		price: 10
	},
	{
		name: 'Book',
		price: 5
	},

	{
		name: 'Phone',
		price: 500,
	},

	{
		name: "Computer",
		price: 1000
	},


	{
		name: "Keyboard",
		price: 25
	},
]

// Array methods
// Array method: filter method
const filteredItems = items.filter( item => {
	return item.price > 25;
})

// console.log(filteredItems)

// Array method: map method

const LoopingItem = items.map(individualItem => {
	console.log(individualItem)
})

// Array method: Find method
const foundItem = items.find( item => {
	return item.name == "TV";
})

console.log(foundItem);

// Array method: Foreach method
items.forEach(item => {
	console.log(item.name)
})

// Array method: Some method
const hasInexpensiveItems = items.some( item => {
	return item.price > 25
})

console.log("Inexpensive Items ", hasInexpensiveItems)
