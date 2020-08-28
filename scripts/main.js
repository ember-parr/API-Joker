import { getJoke, useJoke } from "./JokeProvider.js";
import { Joke } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");

const setupElement = document.querySelector(".joke-setup");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  let reallyGoodJoke = "";

  getJoke().then((response) => {
    reallyGoodJoke = useJoke();
    setupElement.innerHTML += Joke(reallyGoodJoke);
    console.log("now THAT is a good joke: ", reallyGoodJoke);
  });

  // TODO: fetch a joke from the Joke API and render it to the DOM
});
