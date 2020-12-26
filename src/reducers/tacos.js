import { createSlice } from '@reduxjs/toolkit';
import { recipe_URL, converter_URL, image_URL } from '../components/Urls';

const initialState = {
  recipe: '',
  imageUrl: '',
  recipeData: '', // Full recipe data for condiments etc.
};

export const tacos = createSlice({
  name: 'tacos',
  initialState,
  reducers: {
    setTacoRecipe: (state, action) => {
      state.recipe = action.payload;
    },

    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },

    setRecipeData: (state, action) => {
      state.recipeData = action.payload;
    },
  },
});

export const getRecipe = () => {
  return (dispatch) => {
    fetch(recipe_URL)
      .then((results) => results.json())
      .then((json) => {
        dispatch(tacos.actions.setRecipeData(json));
        fetch(converter_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
          body: json.recipe,
        })
          .then((results) => results.text())
          .then((text) => {
            dispatch(tacos.actions.setTacoRecipe(text));
          });
      });
  };
};

export const getImageUrl = () => {
  return (dispatch) => {
    fetch(image_URL)
      .then((results) => results.json())
      .then((json) => {
        dispatch(tacos.actions.setImageUrl(json.urls.regular));
      });
  };
};
