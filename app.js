//User inputs their name

var userName = prompt('Welcome to the Guessing Game! What is your name?');
console.log('The user\'s name is ' + userName);
/*
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

var answerThree = prompt('Do I enjoy outdoor activities?');
if (answerThree.toUpperCase() === 'YES' || answerThree.toUpperCase() === 'Y') {
  alert('No, ' + userName + ' ! The only outdoor activity I enjoy is sitting in a beer garden!');
  console.log(userName + ' did not know about my disdain for the outdoors!');
} else {
  alert('That\'s right, ' + userName + '! The only outdoor activity I will partake in is sitting in a beer garden!');
  console.log(userName + ' knew that they would never find me participating in outdoor activities.');
}

var answerFour = prompt('Do you think I am engaged?');
if (answerFour.toUpperCase() === 'YES' || answerFour.toUpperCase() === 'Y') {
  alert('Yep, ' + userName + '! I am planning a wedding for next spring!');
  console.log(userName + ' knew I was engaged.');
} else {
  alert('Shockingly, ' + userName + ', someone actually agreed to marry me!');
  console.log(userName + ' did not think anyne would want to marry me!');
}

var answerFive = prompt('Do you think you can guess what type of dog I have?');
if (answerFive.toUpperCase() === 'YES' || answerFive.toUpperCase() === 'Y') {
  var bonusQuestion = prompt('Ok, hotshot! What type of dog do I have?');
  if (bonusQuestion.toUpperCase() === 'CHIHUAHUA') {
    alert('How did you know I had a Chihuahua? Technically, I have one and a half chihuahuas! \(Yeah, figure that one out!\)');
    console.log(userName + ' knew that I had a chihuahua!');
  } else {
    alert('That is WRONG, ' + userName + '! I have a chihuahua! Well, technically I have one and a half chihuahuas, but I will let you try to figure that one out.');
    console.log(userName + ' thought they knew what kind of dog I had, but they were WRONG!');
  }
} else {
  alert('That\'s ok, ' + userName + '! I will just tell you that I have a chihuahua.');
  console.log(userName + ' did not want to guess what type of dog I have.');
}
*/
//adding count down question six
var guessesLeft = 3;
var siblingsLeft = prompt('How many siblings do I have? You have four trys to get it right. Make sure you enter a number!');
var userGuess;
var wrongAnswer = 'Incorrect, ' + userName + '. Try again! You have ' + guessesLeft + ' guesses left!';

while (guessesLeft <= 4 && guessesLeft > 0) {
  if (parseInt(siblingsLeft) === 3) {
    alert('That\'s correct, ' + userName + '! I have four siblings.');
    console.log(userName + ' knew that I had four siblings.');
    break;
  } else if (parseInt(siblingsLeft) < 3) {
    var siblingsLeft = prompt('Try again, ' + userName + '! You have ' + guessesLeft + ' guesses left!');
    guessesLeft--;
  } else if (parseInt(siblingsLeft) > 3) {
    var siblingsLeft = prompt('Try again, ' + userName + '! You have ' + guessesLeft + ' guesses left!');
    guessesLeft--;
  } else {
    var siblingsLeft = prompt('Input error. Please enter a number!');
  }
  if (siblingsLeft !== 3 && guessesLeft === 0) {
    alert('Sorry, ' + userName + ', you ran out of guesses! I have 3 siblings');
  }
}

//end of guessing game

// alert('Thank you, ' + userName + ', for playing my guessing game!');
