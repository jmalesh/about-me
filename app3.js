//declare global variables
var score = 0;
//var userName = prompt('Welcome to the Guessing Game! What is your name?');
var questions = ['Did you know that I am from Chicago?', 'Yes or No: I have 3 or more pets?', 'Do I enjoy outdoor activities?', 'Do you think I am engaged?', 'Do I have a Chihuahua named Norma?', 'How many siblings do I have? You have four trys to get it right. Make sure you enter a number!'];
var correct = ['That\'s right,! I am from Chicago!', 'That\'s right! I have 5 total pets!', 'That\'s right! The only outdoor activity I will partake in is sitting in a beer garden!', 'Yep! I am planning a wedding for next spring!', 'How did you know I had a Chihuahua? Technically, I have one and a half chihuahuas! \(Yeah, figure that one out!\)', 'That\'s correct! I have three siblings.'];
var incorrect = ['Well now you do!', 'That is incorrect. I actually have 5 total pets!', 'No! The only outdoor activity I enjoy is sitting in a beer garden!', 'Shockingly someone actually agreed to marry me!', 'That\'s ok! I will just tell you that I have a chihuahua.'];
var yesNo = ['YES', 'YES', 'NO', 'YES', 'YES'];

//Greet and concent
function greetUser () {
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
}

//questions 1-5
function ask() {
  for (var i = 0; i < 5 ; i++) {
    var answer = prompt(questions[i]);
    if (answer.toUpperCase() === yesNo[i]) {
      alert(correct[i]);
      score++;
    } else {
      alert(incorrect[i]);
    }
  }
}

function questionSix () {
  var siblingsLeft = prompt(questions[5]);
  var solution6 = 3;
  var guessesLeft = 3;
  while (guessesLeft > 0) {
    var wrongAnswer = 'Incorrect! Try again! You have ' + guessesLeft + ' guesses left!';
    if (parseInt(siblingsLeft) === 3) {
      alert(correct[5]);
      console.log(userName + ' guessed that I had three siblings.');
      score++;
      break;
    } else if (parseInt(siblingsLeft) < 3 || parseInt(siblingsLeft) > 3) {
      var siblingsLeft = prompt(wrongAnswer);
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      alert('Sorry! You ran out of guesses! I have 3 siblings');
      console.log(userName + ' did not correctly guess how many siblings I have.');
      break;
    }
  }
}
