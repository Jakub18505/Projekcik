const APP_ID = 'ab60b674';
const APP_KEY = '468d0be3c0f9c834774755ac71aaec42';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
