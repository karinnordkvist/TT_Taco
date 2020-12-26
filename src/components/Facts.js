import React from 'react';
import styled from 'styled-components';

// -------------------------------------------------

export const Facts = () => {
  /* Yes, this is hardcoded, but I didn't want to scare you off 
  with the amount of code... and ambition.. hehe */
  return (
    <FactsWrapper>
      <FactHeader>Type</FactHeader>
      <FactText>Dinner</FactText>
      <FactHeader>Suitable for</FactHeader>
      <FactText>Weekends</FactText>
      <FactHeader>Details</FactHeader>
      <FactText>Vegan, hot 🔥</FactText>
      <FactHeader>Contributor</FactHeader>
      <FactText>
        <a>@Some Person</a>
      </FactText>
      <FactHeader>Level of difficulty</FactHeader>
      <FactText>Medium</FactText>
    </FactsWrapper>
  );
};

// STYLING ----------------------------------------
const FactsWrapper = styled.div`
  column-gap: 24px;
  column-count: 3;
  break-inside: avoid;
  max-height: 300px;
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid #e5e5e5;

  @media (max-width: 1050px) {
    margin: 50px 20px 0 20px;
  }
`;

const FactHeader = styled.h4`
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

const FactText = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 22px;

  a {
    color: #333;
    border-bottom: 2px solid black;
  }

  a:hover {
    color: #000;
    cursor: pointer;
  }
`;
