import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';

import { getRecipe, getImageUrl } from '../reducers/tacos';

// -------------------------------------------------

export const Header = () => {
  const dispatch = useDispatch();

  const getNewData = () => {
    dispatch(getRecipe());
    dispatch(getImageUrl());
  };

  return (
    <HeaderOuterWrapper>
      <HeaderInnerWrapper>
        <HeaderLogo>
          <IconWrapper>
            <FontAwesomeIcon icon={faCircle} />
          </IconWrapper>{' '}
          TACOTESTING
        </HeaderLogo>
        <LinkWrapper>
          <Link title="See all recipes">Directory</Link>

          <Button
            onClick={() => getNewData()}
            title="Randomly generate a recipe"
          >
            <BigEyes>👀</BigEyes>
          </Button>

          <Button title="Save recipe">Save</Button>

          <Stroke></Stroke>

          <Link title="Log in">Login</Link>

          <InvertedButton title="Signup and become a member">
            Sign up
          </InvertedButton>

          <Stroke></Stroke>

          <Search>
            <FontAwesomeIcon title="Search for a recipe" icon={faSearch} />
          </Search>

          <Stroke></Stroke>

          <Hamburger>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </LinkWrapper>
      </HeaderInnerWrapper>
    </HeaderOuterWrapper>
  );
};

// STYLING ----------------------------------------
const HeaderOuterWrapper = styled.div`
  height: 70px;
  display: flex;
  align-self: center;
  width: 100vw;
`;

const HeaderInnerWrapper = styled.div`
  width: 95vw;
  max-width: 1150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.h1`
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 600;
  break-inside: avoid;
`;

const Link = styled.a`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #484848;
  margin: 0 25px;
  padding: 3px 0;
  border-bottom: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #000;
    color: #000;
  }

  @media (max-width: 1050px) {
    display: none;
    margin: 0 25px;
  }
`;

const Hamburger = styled(Link)`
  margin: 0 0 0 25px;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  div {
    width: 30px;
    height: 3px;
    background: #000;
    margin: 5px 0;
  }

  @media (max-width: 1050px) {
    display: block;
    margin: 0 0 0 25px;

    div {
      margin: 5px 0;
    }
  }
`;

const Button = styled.button`
  font-family: 'Spezia';
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-right: 25px;
  padding: 8px 16px;
  border-radius: 3px;
  background: none;
  border: 1px solid #00000015;
  height: 40px;

  &:hover {
    cursor: pointer;
    background: #000;
    color: #fff;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

const InvertedButton = styled(Button)`
  background: #000;
  color: #fff;

  &:hover {
    border: 1px solid #000;
    background: #fff;
    color: #000;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Stroke = styled.div`
  border-left: 1px solid #00000015;
  height: 54px;

  @media (max-width: 1050px) {
    &:first-child {
      display: none;
    }
  }
`;

const IconWrapper = styled.span`
  font-size: 4px;
  svg {
    margin-bottom: 5px;
  }
`;

const BigEyes = styled.div`
  font-size: 22px;
`;

const Search = styled.div`
  padding: 0 25px;

  &:hover {
    cursor: pointer;
  }
`;
