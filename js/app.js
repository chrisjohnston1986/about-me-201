'use strict';

console.log('hey world heyyyy!');

let visitorName = prompt('What is your name?');

let score = 0;

console.log('QuestionName >>> ', visitorName);

alert(`Welcome to my site, ${visitorName}! Please guess yes or no to the following questions.`);

let questionOneGuess = prompt('Am I original??').toLowerCase();

console.log('QuestionOne >>> ', questionOneGuess);

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
  score++;
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Wrong!');
}

let questionTwoGuess = prompt('Am I the only one??').toLowerCase();

console.log('QuestionTwo >>> ', questionTwoGuess);

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
  score++;
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Wrong!');
}

let questionThreeGuess = prompt('Am I ??seggsual??').toLowerCase();

console.log('QuestionThree >>> ', questionThreeGuess);

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
  score++;
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Wrong!');
}

let questionFourGuess = prompt('Am I everything you need??').toLowerCase();

console.log('QuestionFour >>> ', questionFourGuess);

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('YOU BETTER ROCK YOUR BODY NOW!!!');
  score++;
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Wrong!');
}

let questionFiveGuess = prompt('Are you done with this game??').toLowerCase();

console.log('QuestionFive >>> ', questionFiveGuess);

if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('ALRIGHT!!!');
  score++;
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Wrong! ........just messing with you.');
}

let myNum = 7;
let userGuess = prompt('Guess what number, < 10, I am thinking about?');

while(userGuess != myNum){
    userGuess = prompt('Guess what number I am thinking about?');

alert(`Thanks for playing, ${visitorName}!`);

alert(`You scored a total of ${score}!`);