
function fullStory () {


// user inputs

const name = prompt(' Welcome write a story about your favourite team!\nwhat is your name? : ');
const gender = prompt('what is your gender? : ');
const age = parseInt(prompt('how old are you? : '));
const storyName = prompt('Now, what is the title of your story? : ');

const favouriteTeam = prompt('what is your favourite football team?:');
const rivalTeam = prompt('what is the name of their rivals');
const goalsScored = parseInt(prompt('How many goals did your favourite team score against their rivals the last time they played?: ', 0));
const distanceCovered = parseFloat(prompt("What is the average  distance covered by your team's players in the match? : ", 20.0));
const isRefreeBiased = prompt('Was the refree biased? true or false: ');
const isGoalKeeperGood = prompt('your favourite teams goalkeeper, is he good? true or false : ');

    
  let pastVictories;
  let gameIntensity;
  let biasedReferee;
  let goalkeeper;

  const storyTemplate = `   My name is ${name}. I am ${gender}. I am ${age} years old.
  The title of my story is ${storyName}...

    My favourite team is ${favouriteTeam} their sworn rival is ${rivalTeam}. If ${favouriteTeam} is given a gun and loaded with two bullets and instructed to shoot the devil and ${rivalTeam}. ${favouriteTeam} will shoot ${rivalTeam} twice in the head.

    `;

    gameIntensity = `it was a good game ${favouriteTeam} players averagely covered ${distanceCovered} km of the football pitch. ${rivalTeam} also did their best.`;


  if (isRefreeBiased) {
    biasedReferee = `
      The previous encounter between ${favouriteTeam} and ${rivalTeam}, it seems the refree had an agenda against ${favouriteTeam}.
      `;
  }else {
    biasedReferee = `
      The previous time ${favouriteTeam} met ${rivalTeam}, the game was well-balanced.
      `;
  }

  if (isGoalKeeperGood) {
  goalkeeper = `
    The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam}, ${favouriteTeam} goalkeeper was very good`;
} else{
  goalkeeper = `
    The last time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} goalkeeper was not in his elements.`;
}
  pastVictories = `
      The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}.`;

   
  const story = storyTemplate + gameIntensity + biasedReferee + goalkeeper + pastVictories;
  
  // display the story to the user
  alert(story);
}

// call function
fullStory();

