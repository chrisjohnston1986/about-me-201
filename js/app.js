'use strict';

console.log('hey world heyyyy!');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site, ${visitorName}! Please guess yes or no to the following questions.`);

let questionOneGuess = prompt('Am I original??').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Wrong!');
}

let questionTwoGuess = prompt('Am I the only one??').toLowerCase();

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Wrong!');
}

let questionThreeGuess = prompt('Am I ??sexual??').toLowerCase();

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Yeaaaaaaaaah!');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Wrong!');
}

let questionFourGuess = prompt('Am I everything you need??').toLowerCase();

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('YOU BETTER ROCK YOUR BODY NOW!!!');
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Wrong!');
}

let questionFiveGuess = prompt('Are you done with this game??').toLowerCase();

if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('ALRIGHT!!!');
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Wrong! ........just messing with you.');
}

alert(`Thanks for playing, ${visitorName}!`);
