
// user inputs

const name = prompt(' Welcome write a story about your favourite team!\nwhat is your name? : ');
const gender = prompt('what is your gender? : ');
const age = parseInt(prompt('how old are you? : '));
const storyName = prompt('Now, what is the title of your story? : ');

const favouriteTeam = prompt('what is your favourite football team?:');
const rivalTeam = prompt('what is the name of their rivals');
const goalsScored = parseInt(prompt('How many goals did your favourite team score against their rivals the last time they played?: ',0));
const distanceCovered = parseFloat(prompt("What is the average  distance covered by your team's players in the match? : ", 20.0));
let isRefreeBiased = prompt('Was the refree biased? true or false: ');
let isGoalKeeperGood = prompt('your favourite teams goalkeeper, is he good? true or false : ');



function fullStory(name, gender, age, storyName, favouriteTeam, rivalTeam, goalsScored,
distanceCovered, isRefreeBiased, isGoalKeeperGood){

  let pastVictories;
  let gameIntensity;
  let biasedReferee;

  let storyTemplate = `   My name is ${name}. I am ${gender}. I am ${age} years old.
  The title of my story is ${storyName}...

    My favourite team is ${favouriteTeam} their sworn rival is ${rivalTeam}. If ${favouriteTeam} is given a gun and loaded with two bullets and instructed to shoot the devil and ${rivalTeam}. ${favouriteTeam} will shoot ${rivalTeam} twice in the head.

    `

  if (distanceCovered > 15.0){
        gameIntensity = `${favouriteTeam} dominated the game covering a staggering ${distanceCovered} km on the football pitch. ${rivalTeam} were clearly out of their depths, dazed, and moving haphazardly like a chicken without a head. Fans of ${favouriteTeam} roared with cheers and started celebrating before the final whistle was blown. It was an incredible game. `;
  }else{
        gameIntensity = `Although it was a lacklustre performance by ${favouriteTeam}, ${rivalTeam} was worse. `;
      }

  if (isGoalKeeperGood && isRefreeBiased){
      biasedReferee = `
      The previous encounter between ${favouriteTeam} and ${rivalTeam}, it seems the refree had an agenda against ${favouriteTeam}. He was on the pitch with the sole intention of winning the game for ${rivalTeam}. However, ${favouriteTeam}'s goalkeeper was in his elements. He saved the day.
      `;
  }else if (!isGoalKeeperGood && isRefreeBiased){
      biasedReferee = `
      The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} maintained their lead to the end of the match. Althought their goalkeeper was horrible and it seems the referee had an agenda against ${favouriteTeam}`;
  }
  else if(!isGoalKeeperGood && !isRefreeBiased){
      biasedReferee = `
      The last time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} goalkeeper was not in his elements. Surprisingly the referee was not biased and his decisions were top-notch. It was a fair game between ${favouriteTeam} and ${rivalTeam}.  `;
  }else if (isGoalKeeperGood && !isRefreeBiased){
      biasedReferee = `
      The previous encounter between ${favouriteTeam} and ${rivalTeam}, by all standards the referee was firm and fair. Goal keeper for ${favouriteTeam} was alert and made amazing saves'.
      `;
  }else{
      biasedReferee = `
      The previous time ${favouriteTeam} met ${rivalTeam}, the game was well-balanced.
      `;
  }

  if (goalsScored > 3){
      pastVictories = `
      The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}. It was a mighty victory.`;
  }else if(goalsScored == 0){
        pastVictories = `
        The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}. It was a draw .`;
  }else{
      pastVictories = `
      The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}.
      It was a win for ${favouriteTeam}`;
      }
  let story = storyTemplate + gameIntensity + biasedReferee + pastVictories;

  return story;
}

// call function
const story = fullStory(name, gender, age, storyName, favouriteTeam, rivalTeam,
  goalsScored, distanceCovered, isRefreeBiased, isGoalKeeperGood);


// display the story to the user
alert(story);

