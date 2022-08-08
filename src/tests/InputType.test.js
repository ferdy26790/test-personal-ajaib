
import InputType, { FilterInput, InputText } from '../components/InputType';
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import '../setupTests';
import { TextField } from '@mui/material';
import debounce from 'lodash/debounce';

// Tell Jest to mock this import
jest.mock('lodash/debounce');

const colorOptions = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
]
jest.useFakeTimers();
describe('<InputType />', () => {
    it("Should render input text by given type correctly", () => {
        const spy = jest.fn();
        const wrapper = shallow(<InputType type="text" label="search" value="test" handleChange={() => {spy}} />);
        expect(wrapper.prop('label')).toEqual("search");
        expect(wrapper.containsAnyMatchingElements(<InputText />))

    });

    it("Should render input text by given type correctly", () => {
        const spy = jest.fn();
        const wrapper = shallow(
            <InputType type="select"
                       label="color"
                       options={colorOptions}
                       value="green" 
                       handleChange={() => {jest.fn()}} />
        );
        expect(wrapper.prop('label')).toEqual("color");
        expect(wrapper.containsAnyMatchingElements(<FilterInput />))

    });

    it("Should trigger handleChange method", () => {
        const spy = jest.fn();
        // debounce.mockImplementation(spy)
        const wrapper = mount(<InputType type="text" label="search" value="test" handleChange={() => {spy}} />);
        // <InputText label="search" value="test" handleChange={() => {spy}} />);
        expect(wrapper.find(InputText).find(TextField).render().find('input')).toHaveLength(1);
        console.log("-------- inputtt", wrapper.find(InputText).find(TextField).find('input').target);
        
        wrapper.find(InputText).find(TextField).find('input').simulate('change', { target: { value: "Claire" } });
        // jest.runAllTimers(300);
        
        // expect(spy).toHaveBeenCalled();

    });


});

