// Exercise 3 - Tell me a Joke

/*
elem.innerHTML is used to populate a div with HTML. 
Search online about this method and create a website with a div tag containing a random joke given an array of jokes.
Use Math.random and fetch jokes from the internet (Use any website to create the array).
Your website should show a random joke on every reload.
Min length of your jokes array should be 10
*/

// solution =>

let jokeArr = {
  error: false,
  amount: 10,
  jokes: [
    {
      category: "Programming",
      type: "single",
      joke: "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    },
    {
      category: "Programming",
      type: "single",
      joke: 'Judge: "I sentence you to the maximum punishment..."\nMe (thinking): "Please be death, please be death..."\nJudge: "Learn Java!"\nMe: "Damn."',
    },
    {
      category: "Programming",
      type: "single",
      joke: '"Honey, go to the store and buy some eggs."\n"OK."\n"Oh and while you\'re there, get some milk."\nHe never returned.',
    },
    {
      category: "Programming",
      type: "single",
      joke: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    },
    {
      category: "Programming",
      type: "single",
      joke: 'A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says "I\'ll have to charge you extra, that\'s a root beer float".\nThe guy says "In that case, better make it a double."',
    },
    {
      category: "Programming",
      type: "single",
      joke: "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
    },
    {
      category: "Programming",
      type: "single",
      joke: '"Knock, knock."\n"Who\'s there?"\n\n[very long pause]\n\n"Java."',
    },
    {
      category: "Programming",
      type: "single",
      joke: "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
    },
    {
      category: "Programming",
      type: "single",
      joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
    },
    {
      category: "Programming",
      type: "single",
      joke: "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    },
  ],
};

let index = Math.floor(Math.random() * jokeArr.jokes.length); // Corrected to access the jokes array
let joke = document.getElementById("joke");
joke.innerHTML = jokeArr.jokes[index].joke; // Populate the div with a random joke
