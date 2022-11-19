const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  answers.push(name);
  rl.question('What\'s an activity you like doing? ', (activity) => {
    answers.push(activity);
    rl.question('What do you listen to while doing that? ', (listen) => {
      answers.push(listen);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        answers.push(meal);
        rl.question('What\'s your favourite thing to eat for that meal? ', (dish) => {
          answers.push(dish);
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answers.push(sport);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answers.push(superpower);
              console.log(`My name is ${name}. I like ${activity.toLowerCase()} and I like to listen to ${listen.toLowerCase()} while doing so. My favourite meal of the day is ${meal.toLowerCase()}. My favourite thing to eat during ${meal.toLowerCase()} is ${dish.toLowerCase()}. My absolute favourite sport is ${sport.toLowerCase()}. My superpower is ${superpower.toLowerCase()}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});



// rl.close();