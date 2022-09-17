'use strict';

// <!-- Table 11 Remo Collaboration w/Trace and Hunter -->

let visitorName = prompt('What is your name?');

let score = 0;

alert(`Welcome to my site, ${visitorName}! Please guess yes or no to the following questions.`);
function question1() {
  let questionOneGuess = prompt('Am I original??').toLowerCase();

  if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
    alert('Yeaaaaaaaaah!');
    score++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    alert('Wrong!');
  }
}
question1();

function question2() {

  let questionTwoGuess = prompt('Am I the only one??').toLowerCase();

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
    alert('Yeaaaaaaaaah!');
    score++;
  } else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
    alert('Wrong!');
  }
}
question2();

function question3() {
  let questionThreeGuess = prompt('Am I ??seggsual??').toLowerCase();

  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
    alert('Yeaaaaaaaaah!');
    score++;
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
    alert('Wrong!');
  }
}
question3();

function question4() {
  let questionFourGuess = prompt('Am I everything you need??').toLowerCase();

  if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
    alert('YOU BETTER ROCK YOUR BODY NOW!!!');
    score++;
  } else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
    alert('Wrong!');
  }
}
question4();

function question5() {
  let questionFiveGuess = prompt('Are you done with this game??').toLowerCase();

  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    alert('ALRIGHT!!!');
    score++;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
    alert('Wrong! ........just messing with you.');
  }
}
question5();

function question6() {

  let myNum = 7;

  let guessNum = 4;

  while (guessNum > 0) {
    let userNumGuess = prompt('Guess what number, < 10, I am thinking about?');
    guessNum--;

    if (parseInt(userNumGuess) === myNum) {
      alert('Whoa!!! You nailed it. How did you do that???');
      score++;
      guessNum = 0;
    }
    else if (parseInt(userNumGuess) > myNum) {
      alert('Nope... too high - try again!');
    }
    else if (parseInt(userNumGuess) < myNum) {
      alert('Nope... too low - try again!');
    }
  }
  alert(`${visitorName}, you should have been able to guess my number (7)!`);
}

question6();

function question7() {
  let franchiseArr = ['star wars', 'marvel', 'dc', 'dragonball z', 'game of thrones', 'harry potter', 'lord of the rings', 'pokemon', 'final fantasy', 'star trek'];
  let correctAnswer = false;
  let guessNumSeven = 6;

  for (let i = 0; i < guessNumSeven; i++) {
    let userNumSevenGuess = prompt('Guess one of my favorite cinematic universes?').toLowerCase();

    for (let j = 0; j < franchiseArr.length; j++) {
      if (userNumSevenGuess === franchiseArr[j]) {
        alert('ONE OF MY FAVORITES!');
        correctAnswer = true;
        score++;
      }
    }
    if (correctAnswer === true) {
      break;
    }
  }
}
question7();

alert(`You must be the very BEST teammate, at trivia night(s), ${visitorName}!`);

alert(`Psst - ${visitorName}! My favorite cinematic universes are: Star Wars, Marvel, DC, Dragonball Z, Game of Thrones, Harry Potter, Lord of the Rings, Pokemon, Final Fantasy, and Star Trek.`);

alert(`${visitorName} scored a total of ${score} on the earlier quiz questions. Nice Job!`);
