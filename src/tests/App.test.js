import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import '../setupTests';

import InputType from '../components/InputType';
import MainTable from '../components/MainTable';

const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockReturnValue({loading: true, data: []});

jest.mock('react-redux', () => ({
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch
}));

describe('App component', () => {
  it('starts with correct components', () => {
    const wrapper = shallow(<App />);
    const inputType = wrapper.find(InputType);
    expect(inputType).not.toBeUndefined();
    expect(inputType.length).toEqual(2);

    const mainTable = wrapper.find(MainTable);
    expect(mainTable).not.toBeUndefined();
    expect(mainTable.length).toEqual(1);

  });
});