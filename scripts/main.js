import { getJoke, useJoke } from "./JokeProvider.js";
import { JokeSetup, JokePunchline } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");

const setupElement = document.querySelector(".joke-setup");
let reallyGoodJoke = "";

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");

  getJoke().then((response) => {
    reallyGoodJoke = useJoke();
    setupElement.innerHTML += JokeSetup(reallyGoodJoke);
    console.log("now THAT is a good joke: ", reallyGoodJoke);
  });

  // TODO: fetch a joke from the Joke API and render it to the DOM
});

const punchBtn = document.querySelector(".request-punchline-btn");
const punchlineElement = document.querySelector(".joke-punchline");

punchBtn.addEventListener("click", (e) => {
  console.log("I should be finding the punchline now...");
  punchlineElement.innerHTML += JokePunchline(reallyGoodJoke);
});
