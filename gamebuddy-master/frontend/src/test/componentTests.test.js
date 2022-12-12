import { render, screen } from '@testing-library/react';
import SearchBox from '../components/SearchBox';
import React from 'react';
import ReactDOM from 'react-dom';

//test block
test('SearchBox', () => {
  // render the component on virtual dom
  render(<SearchBox />);

  //select the elements you want to interact with
  const search = screen.getByTestId('searchTest');

  //assert the expected result
  expect(search).ToBeInTheDocument();
});
