
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


// Array method: Reduce method
const numbers = [1,-1,2,3]

const sum = numbers.reduce((accumulator , currentvalue) => {
	return accumulator + currentvalue; 
}, 0);

console.log(sum)

// challenges
const listOfNumbers = [1,2,3,5,7,11];
const sumOfNums = listOfNumbers.reduce ((cummulatorValue , currentValue) => {
	return cummulatorValue + currentValue;
},0);

console.log(sumOfNums);


// Javascript callback functions

const x = function(){
	console.log('This function is called inside a function');
}

const y = function (callback){
	console.log('Do something')
	callback();
}

y(x);

// function 2

const calc = function( num1,num2, calcType){
	if(calcType == "add") {
		return num1 + num2;
	}else if(calcType == "substract") {
	    if(num1 > num2){
		return num1 - num2;
	    }else{
		return num2 - num1;
	    }
	}else if(calcType == "multiply") {
		return num1 * num2;
	}else if(calcType == "divide") {
		if(num1 > num2 ){
			return num1 / num2;
		}else{
			return num2 / num1;
		}
	}else{
		return "The Calculation symbol should be either '+', '-', '*' or '/' ";
	}
}

const solutionAddition = calc(2,4,"add");
const solutionSubstract = calc(1,3,"substract");
const solutionMultiply = calc(3, 5, "multiply");
const solutionDivide = calc(5, 5 , "divide");

console.log(solutionAddition);
console.log(solutionSubstract);
console.log(solutionMultiply);
console.log(solutionDivide);

// Using the callback functions to do some computations

let add = function(a , b){
	return a * b; 
}

const calculate = function (num1 , num2 , callback){
	return callback(num1 , num2);
}


// New part: Javascript Promises
/*
// if promise is fullfilled
const fullFillment = () => {
	// log successfullment message
	console.log('The table is set up for Chips !!!')
}

const onRejection = () => {
	console.log('The table is set up for Snacks !!!')
}
const promise = new Promise((resolve, rejection) => {
	setTimeout(() => {
		// Food truck is found 
		// change the status from 'pending' to 'fullfilled'
		resolve()
	}, 5000) 
})

// Reject scenario 
const promise = new Promise((resolve , reject) => {
	setTimeout(() => {
		// Food truck is not found
		// change the status from 'Pending' to 'Rejected'
		reject()
	}, 5000)

})

promise.then(fullFillment);
promise.catch(onRejection);

*/

// Async javascript from traversy media

/*
const posts = [
	{ title: 'Post one', body: 'This is post one' },
	{ title: 'Post two', body: 'This is post two' },
	{ title: 'Post three', body: 'This is post three' },
	{ title: 'Post four', body: 'This is post four' }

]

const getPosts = () => {
	setTimeout(() => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
		});
		document.body.innerHtml = output;
	}, 1000)
}

getPosts();

*/

// Async javascript from CodeSackr
// Callback function

let greeting = name => console.log(`Hello ${name}`)

const userInfo = (firstName , lastName , callback) =>  {
	const fullName = `${firstName} ${lastName}`;
	callback(fullName);
}

userInfo('John','Doe', greeting)

// Promises in javascript

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	if(!hasMeeting) {
		const meetingDetails = {
			name: "Marketing details",
			location: "Skype",
			time: "1:00 PM"
		}
	resolve(meetingDetails);
	} else {
		reject( new Error('Meeting already scheduled !!!'))
	}	
})

meeting
	.then( res => {
		console.log('Meeting scheduled')
		console.log(res)
	})
	.catch(err => {
		console.log(err.message)
	})
