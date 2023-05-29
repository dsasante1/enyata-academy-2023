
// user inputs



function fullStory () {

  const name = prompt(' Welcome write a story about your favourite team!\nwhat is your name? : ');
  const gender = prompt('what is your gender? : ');
  const age = parseInt(prompt('how old are you? : '));
  const storyName = prompt('Now, what is the title of your story? : ');
  
  const favouriteTeam = prompt('what is your favourite football team?:');
  const rivalTeam = prompt('what is the name of their rivals');
  const goalsScored = parseInt(prompt('How many goals did your favourite team score against their rivals the last time they played?: '));
  const favouriteTeamJerseyColor = prompt('What the color of your favourite teams jersey: ');
  const rivalTeamJerseyColor = prompt('What the color of your favourite teams jersey : ');
  const matchVenue = prompt('where was the match played : ');  
  var alternateEnding = `the ${rivalTeam} won unfortunately. It was a glorious victory! `;

  let storyTemplate = `   My name is ${name}. I am ${gender}. I am ${age} years old.
  The title of my story is ${storyName}...

    My favourite team is ${favouriteTeam} their sworn rival is ${rivalTeam}. If ${favouriteTeam} is given a gun and loaded with two bullets and instructed to shoot the devil and ${rivalTeam}. ${favouriteTeam} will shoot ${rivalTeam} twice in the head.

    `;

  let  stadium = `
      The previous encounter was between ${favouriteTeam} and ${rivalTeam}. The match was played at the ${matchVenue}.
      `;

  let  colorJersey = `
    ${favouriteTeam} wore their ${favouriteTeamJerseyColor} coloured jersey. Meanwhile the ${rivalTeam} wore their ${rivalTeamJerseyColor} colored jersey`;

  let  pastVictories = `
      The previous time ${favouriteTeam} met ${rivalTeam}, ${favouriteTeam} scored  ${goalsScored} goals against ${rivalTeam}.`;

  alternateEnding = pastVictories;

  let dynamicStory = storyTemplate + stadium + colorJersey + alternateEnding;

  // display the story to the user
  alert(dynamicStory);
}

// call fullStory
fullStory();
