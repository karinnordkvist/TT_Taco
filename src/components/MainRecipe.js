import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

const recipe_URL =
  'https://taco-randomizer.herokuapp.com/random/?full-taco=true';

const MainRecipe = () => {
  const [recipe, setRecipe] = useState('');

  const getRecipe = () => {
    fetch(recipe_URL)
      .then((results) => results.json())
      .then((json) => {
        console.log(json);
        setRecipe(json.recipe);
      });
  };

  useEffect(() => {
    getRecipe();
    // console.log(recipe);
  }, []);

  const toDiv = ({ children, ...props }) => <div {...props}>{children}</div>;
  const toH1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>;
  const toUl = ({ children, ...props }) => <ul {...props}>{children}</ul>;
  const toLi = ({ children, ...props }) => <li {...props}>{children}</li>;
  const toP = ({ children, ...props }) => <p {...props}>{children}</p>;

  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: toH1,
            props: {
              className: 'main-recipe__header',
            },
          },
          p: {
            component: toP,
            props: {
              className: 'main-recipe__text',
            },
          },
          ul: {
            component: toUl,
            props: {
              className: 'main_recipe__list',
            },
          },
          ol: {
            component: toUl,
            props: {
              className: 'main_recipe__list',
            },
          },
          li: {
            component: toLi,
            props: {
              className: 'main_recipe__list__item',
            },
          },
        },
      }}
    >
      {recipe}
    </Markdown>
  );
};
export default MainRecipe;
