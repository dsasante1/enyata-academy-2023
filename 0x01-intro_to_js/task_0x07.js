
// user inputs

const name = prompt(' Welcome write a story about your favourite team!\nwhat is your name? : '); // string
const gender = prompt('what is your gender? : '); // string
const age = parseInt(prompt('how old are you? : ')); // number
const storyName = prompt('Now, what is the title of your story? : '); // string

const favouriteTeam = prompt('what is your favourite football team?:'); // string
const rivalTeam = prompt('what is the name of their rivals'); // string
const goalsScored = parseInt(prompt('How many goals did your favourite team score against their rivals the last time they playede?: ',0)); // number
const distanceCovered = parseFloat(prompt("What is the average  distance covered by your team's players in the match? : ", 30.0)); // float
let isRefreeBiased = prompt('Was the refree biased? true or false: ', true); // bool
let isGoalKeeperGood = prompt('your teams goalkeeper, is he good? true or false : ', true); // bool

// prompt("hello world");

// story template
function fullStory(name, gender, age, storyName, favouriteTeam, rivalTeam, goalsScored, distanceCovered, isRefreeBiased, isGoalKeeperGood){

  let pastVictories;
  let gameIntensity;
  let biasedRefree;
  let goodGoalKeeper;

  let storyTemplate = `My name is ${name}. I am ${gender}. I am ${age} years old.
The title of my story is ${storyName}...

My favourite team is ${favouriteTeam} their sworn rival is ${rivalTeam}.
In fact if ${favouriteTeam} is given a gun and loaded with two bullets and instructed to shoot the devil and ${rivalTeam}.
${favouriteTeam} will shoot ${rivalTeam} twice in the head.`

  if (goalsScored > 3){
      pastVictories = `The last time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}. It was a mighty defeat.`;
      }else{
      pastVictories = `The last time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}.`;
      }

  if (distanceCovered > 30){
        gameIntensity = `${favouriteTeam} dominated the game covering a staggering ${distanceCovered}km on the football pitch.
        ${rivalTeam} were clearly out of their depths, dazed, and moving haphazardly like a chicken without a head. Fans of ${favouriteTeam} roared with cheers and started celebrating before the final whistle was blown.
        It was an incredible game.`;
  }else{
        gameIntensity = `Although it was a lacklustre performance by ${favouriteTeam}, ${rivalTeam} was worse.
        ${rivalTeam}They were just not good enough. ${rivalTeam} relies on their past glories and hay days without nothing to show for it in the current football dispensation.`;
      }

  if (isRefreeBiased == true){
      biasedRefree = `The refree had an agenda against ${favouriteTeam}. He was on the pitch with the sole intention of winnging the game for ${rivalTeam}.`;
  }else{
      biasedRefree = `Suprisingly the refree was not biased and his decisions were top notch. It was a fair game between ${favouriteTeam} and ${rivalTeam}`;
  }

  if (isGoalKeeperGood == true && isRefreeBiased == true){
      goodGoalKeeper = `The ${favouriteTeam}'s goalkeeper was in his elements.
      He saved the day.`;
  }else if (isGoalKeeperGood == false && isRefreeBiased == true){
      goodGoalKeeper = `${favouriteTeam} maintained their lead to the end of the match.`;
  }
  else if(isGoalKeeperGood == false && isRefreeBiased == false){
      goodGoalKeeper = `${favouriteTeam} goalkeeper was not in his elements but the fortunately ${rivalTeam} could not utilize this opportunity.`;
  }else{
      goodGoalKeeper = `At the end of the game ${favouriteTeam} emerged victorious`;
    }

  return storyTemplate + pastVictories + gameIntensity + gameIntensity + biasedRefree + goodGoalKeeper;
}

const output = fullStory(name, gender, age, storyName, favouriteTeam, rivalTeam,
  goalsScored, distanceCovered, isRefreeBiased, isGoalKeeperGood);

alert(output);

