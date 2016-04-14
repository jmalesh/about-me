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

var questions = ['Did you know that I am from Chicago?',
'Yes or No: I have 3 or more pets?',
'Do I enjoy outdoor activities?',
'Do you think I am engaged?',
'Do you think you can guess what type of dog I have?',,
'How many siblings do I have? You have four trys to get it right. Make sure you enter a number!'];
var correct = ['That\'s right, ' + userName + '! I am from Chicago!',
'That\'s right ' + userName + '! I have 5 total pets!',
'That\'s right, ' + userName + '! The only outdoor activity I will partake in is sitting in a beer garden!',
'Yep, ' + userName + '! I am planning a wedding for next spring!',
'How did you know I had a Chihuahua? Technically, I have one and a half chihuahuas! \(Yeah, figure that one out!\)',
'That\'s correct, ' + userName + '! I have three siblings.'];
var incorrect = ['Well, ' + userName + ', now you do!',
'That is incorrect, ' + userName + '. I actually have 5 total pets!',
'No, ' + userName + ' ! The only outdoor activity I enjoy is sitting in a beer garden!',
'Shockingly, ' + userName + ', someone actually agreed to marry me!',
'That\'s ok, ' + userName + '! I will just tell you that I have a chihuahua.',
'Try again, ' + userName + '! You have ' + guessesLeft + ' guesses left!',
'Sorry, ' + userName + ', you ran out of guesses! I have 3 siblings'];

//Begin guessing game
function question1() {
  var answerOne = prompt(questions[0]);
  if (answerOne.toUpperCase() === 'YES' || answerOne.toUpperCase() === 'Y') {
    alert(correct[0]);
    console.log(userName + ' knew that I am from Chicago');
  } else {
    alert(incorrect[0]);
    console.log(userName + ' did not know that I am from Chicago');
  }
}
function question2() {
  var answerTwo = prompt(questions[1]);
  if (answerTwo.toUpperCase() === 'YES' || answerTwo.toUpperCase() === 'Y') {
    alert(correct[1]);
    console.log(userName + ' knew that I had more than 3 pets!');
  } else {
    alert(incorrect[1]);
    console.log(userName + ' did not know that I have more than 3 pets.');
  }
}

function question3() {
  var answerThree = prompt(questions[2]);
  if (answerThree.toUpperCase() === 'YES' || answerThree.toUpperCase() === 'Y') {
    alert(incorrect[2]);
    console.log(userName + ' did not know about my disdain for the outdoors!');
  } else {
    alert(correct[2]);
    console.log(userName + ' knew that they would never find me participating in outdoor activities.');
  }
}

function question4() {
  var answerFour = prompt(questions[3]);
  if (answerFour.toUpperCase() === 'YES' || answerFour.toUpperCase() === 'Y') {
    alert(correct[3]);
    console.log(userName + ' knew I was engaged.');
  } else {
    alert(incorrect[3]);
    console.log(userName + ' did not think anyne would want to marry me!');
  }
}

function question5() {
  var answerFive = prompt(questions[4]);
  if (answerFive.toUpperCase() === 'YES' || answerFive.toUpperCase() === 'Y') {
    var bonusQuestion = prompt('Ok, hotshot! What type of dog do I have?');
    if (bonusQuestion.toUpperCase() === 'CHIHUAHUA') {
      alert(correct[4]);
      console.log(userName + ' knew that I had a chihuahua!');
    } else {
      alert(incorrect[4]);
      console.log(userName + ' thought they knew what kind of dog I had, but they were WRONG!');
    }
  } else {
    alert('That\'s ok, ' + userName + '! I will just tell you that I have a chihuahua.');
    console.log(userName + ' did not want to guess what type of dog I have.');
  }
}

//adding count down question six
function question6 () {
  var guessesLeft = 3;
  var siblingsLeft = prompt(questions[5]);
  var userGuess;
  var wrongAnswer = 'Incorrect, ' + userName + '. Try again! You have ' + guessesLeft + ' guesses left!';

  while (guessesLeft <= 4 && guessesLeft > 0) {
    if (parseInt(siblingsLeft) === 3) {
      alert(correct[5]);
      console.log(userName + ' guessed that I had three siblings.');
      break;
    } else if (parseInt(siblingsLeft) < 3) {
      var siblingsLeft = prompt(incorrect[5]);
      guessesLeft--;
    } else if (parseInt(siblingsLeft) > 3) {
      var siblingsLeft = prompt(incorrect[5]);
      guessesLeft--;
    } else {
      var siblingsLeft = prompt('Input error. Please enter a number!');
    }
    if (siblingsLeft !== 3 && guessesLeft === 0) {
      alert(incorrect[6]);
      console.log(userName + ' did not correctly guess how many siblings I have.');
    }
  }
}
//end of guessing game

// alert('Thank you, ' + userName + ', for playing my guessing game!');
