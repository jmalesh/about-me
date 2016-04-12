//User inputs their name
var userName = prompt('Welcome to the Guessing Game! What is your name?');
console.log('The user\'s name is ' + userName);

alert('Welcome, ' + userName + ' ! Please guess \'yes or no\' for the following questions!');
var understandCheck = confirm('Are you ready?');

if (understandCheck === true) {
  alert('Great! Let\'s get started');
  console.log(userName + ' is ready to play the guessing game!');
} else {
  alert('What don\'t you understand about answering yes or no?');
  console.log(userName + ' might not be the sharpest tool in the shed.');
}
//Begin guessing game
var answerOne = prompt('Did you know that I am from Chicago?');
if (answerOne.toUpperCase() === 'YES' || answerOne.toUpperCase() === 'Y') {
  alert('That\'s right, ' + userName + '! I am from Chicago!');
  console.log(userName + ' knew that I am from Chicago');
} else {
  alert('Well, ' + userName + ', now you do!');
  console.log(userName + ' did not know that I am from Chicago');
}

var answerTwo = prompt('Yes or No: I have 3 or more pets?');
if (answerTwo.toUpperCase() === 'YES' || answerTwo.toUpperCase() === 'Y') {
  alert('That\'s right ' + userName + '! I have 5 total pets!');
  console.log(userName + ' knew that I had more than 3 pets!');
} else {
  alert('That is incorrect, ' + userName + '. I actually have 5 total pets!');
  console.log(userName + ' did not know that I have more than 3 pets.');
}
