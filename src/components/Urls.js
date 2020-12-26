const API_KEY = process.env.REACT_APP_API_KEY;

export const recipe_URL =
  'https://taco-randomizer.herokuapp.com/random/?full-taco=true';

export const converter_URL = 'https://api.github.com/markdown/raw';
export const image_URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query="tacos"`;
