import React from 'react';
import App from './App.js';
import renderer from "react-test-renderer";
test('renders App.js correctly', () => {
  
  const tree = renderer
  .create(<App />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});


// test('renders App.js correctly', () => {
//   const tree = renderer
//   .create(<PokeList data={[]}/>)
//   .toJSON();
//   expect(tree).toMatchSnapshot();
// });


// test('renders App.js correctly', () => {
//   const tree = renderer
//   .create(<PokeItem data={[]}/>)
//   .toJSON();
//   expect(tree).toMatchSnapshot();
// });