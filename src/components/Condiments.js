import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { converter_URL } from './Urls';

// -------------------------------------------------

export const Condiments = () => {
  const recipeData = useSelector((store) => store.tacos.recipeData);

  const [firstCondiment, setFirstCondiment] = useState('');
  const [secondCondiment, setSecondCondiment] = useState('');
  const [thirdCondiment, setThirdCondiment] = useState('');
  const [fourthCondiment, setFourthCondiment] = useState('');

  const convertRecipe = (body, setWhatCondiment) => {
    // Convert MD-formatted data into HTML
    fetch(converter_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      body: body,
    })
      .then((results) => results.text())
      .then((text) => {
        setWhatCondiment(text);
      });
  };

  // If there's a base layer recipe, set it to first condiment
  if (recipeData.base_layer) {
    convertRecipe(recipeData.base_layer.recipe, setFirstCondiment);
  }

  // If there's a condiment recipe, set it to second condiment
  if (recipeData.condiment) {
    convertRecipe(recipeData.condiment.recipe, setSecondCondiment);
  }

  // If there's a mixin recipe, set it to third condiment
  if (recipeData.mixin) {
    convertRecipe(recipeData.mixin.recipe, setThirdCondiment);
  }

  // If there's a seasoning recipe, set it to fourth condiment
  if (recipeData.seasoning) {
    convertRecipe(recipeData.seasoning.recipe, setFourthCondiment);
  }

  return (
    <OuterWrapper>
      <CondimentsHeadline>Condiments & Mixins</CondimentsHeadline>
      <InnerWrapper>
        <div dangerouslySetInnerHTML={{ __html: firstCondiment }} />
        <div dangerouslySetInnerHTML={{ __html: secondCondiment }} />
      </InnerWrapper>
      <InnerWrapper>
        <div dangerouslySetInnerHTML={{ __html: thirdCondiment }} />
        <div dangerouslySetInnerHTML={{ __html: fourthCondiment }} />
      </InnerWrapper>
    </OuterWrapper>
  );
};

// STYLING ----------------------------------------
const OuterWrapper = styled.div`
  margin: 50px 0;
  padding-top: 50px;
  border-top: 1px solid #e5e5e5;

  @media (max-width: 1050px) {
    margin: 50px 20px 0 20px;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    line-height: 24px;
  }

  ul,
  ol {
    padding-inline-start: 20px;
  }

  li {
    line-height: 24px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`;

const CondimentsHeadline = styled.h2`
  margin-top: 0;
`;
