// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const JokeSetup = (jokeObj) => {
  return `
    ${jokeObj.setup}
    `;
};

export const JokePunchline = (jokeObj) => {
  return `
    ${jokeObj.punchline}
    `;
};
