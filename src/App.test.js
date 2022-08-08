// import { render, screen } from '@testing-library/react';
// import App from './App';
// import * as React from 'react';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import './setupTests';

import InputType from './components/InputType';
import MainTable from './components/MainTable';

const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockReturnValue({loading: true, data: []});
jest.mock('react-redux', () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch
}));

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const inputType = wrapper.find(InputType);
    expect(inputType).not.toBeUndefined();

    const mainTable = wrapper.find(MainTable);
    expect(mainTable).not.toBeUndefined();
  });
});