import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tacos } from './reducers/tacos';

// Components
import { MainRecipe } from './components/MainRecipe';
import { Header } from './components/Header';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';

const reducer = combineReducers({
  tacos: tacos.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <Header />
        <TopBar />
        <InnerWrapper>
          <MainRecipe />
        </InnerWrapper>
        <Footer />
      </OuterWrapper>
    </Provider>
  );
};

// STYLING ----------------------------------------
const OuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  width: 95vw;
  max-width: 1150px;
  margin: 50px auto;

  @media (max-width: 1050px) {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
  }
`;
