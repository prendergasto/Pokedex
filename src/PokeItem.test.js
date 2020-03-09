import React from 'react';
import PokeItem from './Poke-item.js';
import renderer from "react-test-renderer";
test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeItem data={[]}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

// test passing