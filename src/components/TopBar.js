import React from 'react';
import styled from 'styled-components';

// -------------------------------------------------

export const TopBar = () => {
  return (
    <Wrapper>
      <p>
        We're hiring! <a>See our open positions →</a>
      </p>
    </Wrapper>
  );
};

// STYLING ----------------------------------------
const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  background: #000;
  display: flex;
  align-content: center;
  justify-content: center;

  p {
    color: white;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    margin: auto;
  }

  a {
    color: #fff;
    border-bottom: 1px solid #fff;
    padding-bottom: 1px;

    &:hover {
      cursor: pointer;
    }
  }
`;
