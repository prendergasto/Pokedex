import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";
import PokeList from './PokeList';
import PokeItem from './Poke-item';
test('renders App.js correctly', () => {
  const tree = renderer
  .create(<App />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});


test('renders App.js correctly', () => {
  const tree = renderer
  .create(<PokeList />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});


test('renders App.js correctly', () => {
  const tree = renderer
  .create(<PokeItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});