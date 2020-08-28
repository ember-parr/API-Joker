import { useJoke } from "./JokeProvider.js";
import { JokeSetup, JokePunchline } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");

const setupElement = document.querySelector(".joke-setup");
const punchlineElement = document.querySelector(".joke-punchline");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  useJoke();
  JokeSetup();
  JokePunchline();
  // TODO: fetch a joke from the Joke API and render it to the DOM
});
