import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faTasks,
  faTag,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

// -------------------------------------------------

export const Buttons = () => {
  return (
    <ButtonWrapper>
      <Button>
        <FontAwesomeIcon icon={faHeart} /> <IconText>Like</IconText>
        <IconNumber>4</IconNumber>
      </Button>
      <Stroke></Stroke>
      <Button>
        <FontAwesomeIcon icon={faTag} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faTasks} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </ButtonWrapper>
  );
};

// STYLING ----------------------------------------
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  margin-right: 15px;
  padding: 8px 16px;
  border-radius: 3px;
  line-height: 24px;
  background: none;
  border: 1px solid #00000015;
  font-family: 'Spezia';
  font-weight: 600;
  font-size: 14px;
  height: 40px;

  &:hover {
    cursor: pointer;
    background: #000;
    color: #fff;
  }
`;
const Stroke = styled.div`
  border-left: 1px solid #00000015;
  padding-left: 15px;
  height: 54px;
`;

const IconText = styled.span`
  margin-left: 10px;
  font-size: 12px;
`;
const IconNumber = styled.span`
  margin-left: 12px;
  font-size: 12px;
  font-weight: 400;
`;
