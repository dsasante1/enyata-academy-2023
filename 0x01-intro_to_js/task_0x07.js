

//user inputs


let name = prompt("what is your name?: ");
let gender = prompt("what is your gender?: ");
let age = prompt("how old are you? ");
let story_name = prompt("Now, what is the title of your story? ");

//prompt("hello world");

// story template
function fullStory(name, gender, age, story_name){
    var story_template = `My name is ${name}. I am ${gender}. I am ${age} years old.
The title of my story is ${story_name}...`;
  return story_template;
}

let y = fullStory(name, gender, age, story_name);

alert(y);

//console.log(story_template);

//requirements


/*
1. Your story should be at least 50 words
long and not more than 100 words.


2.  You are to use a minimum of 10 variables
 of varying types.
*/


// TIPS

/*
[TIP 1]: {_variable_} means a variable should be there of name '_variable_'
[TIP 2]: Use prompt to get the values of the variables from the user.
[TIP 3]: Collect all variables at the beginning.
[TIP 4]: Put the story in a variable within the function and it should be displayed when the function is run.

*/