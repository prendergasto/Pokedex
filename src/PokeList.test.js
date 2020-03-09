import React from 'react';
import PokeList from './PokeList';
import renderer from "react-test-renderer";
test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeList data={[]}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

// test passing