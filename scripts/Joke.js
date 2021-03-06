// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const JokeSetup = (jokeObj) => {
  let makeJokeHTMLfriendly = `
    <p>${jokeObj.setup}</p>
  `;

  return makeJokeHTMLfriendly;
};

export const JokePunchline = (jokeObj) => {
  let makeJokeHTMLfriendlyAgain = `
    ${jokeObj.punchline}
    `;

  return makeJokeHTMLfriendlyAgain;
};
