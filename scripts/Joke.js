// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (jokeObj) => {
  let makeJokeHTMLfriendly = `
    <p>Setup That Joke: ${jokeObj.setup}</p>
    <p>Gimme The Punchline: ${jokeObj.punchline}</p>
  `;

  return makeJokeHTMLfriendly;
};
