import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getRecipe, getImageUrl } from '../reducers/tacos';

import { Buttons } from './Buttons';
import { Condiments } from './Condiments';
import { Facts } from './Facts';

// -------------------------------------------------

export const MainRecipe = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((store) => store.tacos.recipe);
  const imageUrl = useSelector((store) => store.tacos.imageUrl);

  useEffect(() => {
    dispatch(getRecipe());
    dispatch(getImageUrl());
  }, []);

  return (
    <>
      <MainRecipeWrapper>
        <div>
          <Recipe dangerouslySetInnerHTML={{ __html: recipe }} />
          <Buttons />
        </div>
        <Image src={imageUrl} />
      </MainRecipeWrapper>
      <Facts />
      <Condiments />
    </>
  );
};

// STYLING ----------------------------------------
const MainRecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  direction: ltr;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;

    div {
      &:first-child {
        order: 2; // Reversing the order so that the image goes on top
      }
    }
  }
`;

const Recipe = styled.div`
  /* I figured this was the smartest way to style the unreachable 
elements in the generated recipe. But I have to admit it's not
the prettiest.. */

  a {
    border-bottom: 2px solid #000;

    & :hover {
      border: 2px solid #000;
    }
  }
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0;
    font-size: 48px;
    line-height: 58px;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin: 0;
  }

  p {
    &:nth-child(2) {
      font-size: 32px;
      line-height: 40px;
      color: #333;
    }
  }

  ul {
    list-style: none;
    line-height: 24px;
    padding-inline-start: 0px;
  }

  ol {
    padding-inline-start: 20px;
  }

  li {
    line-height: 24px;
    max-width: 30vw;
    margin: 10px 10px 10px 0;
    word-wrap: normal;
  }

  @media (max-width: 1050px) {
    margin: 0 20px;

    h1 {
      font-size: 32px;
    }

    li {
      max-width: 100vw;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
