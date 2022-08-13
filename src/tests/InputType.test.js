
import InputType from '../components/InputType';
import * as React from 'react';
import { mount } from 'enzyme';
import '../setupTests';


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


describe('Test <InputType />', () => {
    it("Should render input text by given type correctly", () => {
        const spy = jest.fn();
        const wrapper = mount(<InputType type="text" 
                                         label="search"
                                         value=""
                                         handleChange={() => {spy}} />);
        expect(wrapper.prop('type')).toEqual("text");
        expect(wrapper.children().props().value).toBe("");
        expect(wrapper.children().props().label).toBe("search");
        expect(wrapper.children()
                      .children()
                      .children()
                      .find('input').props().value).toBeUndefined();
    });

    it("Should render input text by given type correctly", () => {
        const spy = jest.fn();
        const wrapper = mount(
            <InputType type="select"
                       label="color"
                       options={colorOptions}
                       value="green" 
                       handleChange={ spy } />
        );
        expect(wrapper.props().type).toBe("select");
        expect(wrapper.children().props().value).toBe("green");
        expect(wrapper.children().props().label).toBe("color");
        expect(wrapper.children().props().options).toBe(colorOptions);
        expect(wrapper.children()
                      .children()
                      .children()
                      .find('input').props().value).toBe("green");
    });

    it("Should trigger handleChange method - text input", async() => {
        const spy = jest.fn(console.log('func called'));
        const wrapper = mount(<InputType type="text"
                                         label="search" 
                                         value="test" 
                                         handleChange={() => {spy}} />);
        // Trigger onChange update value
        wrapper.children()
               .children()
               .children()
               .find('input')
               .simulate('change', { target: { value: 'Claire'} })

        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            done();
          }, 300);
    });

    it("Should trigger handleChange method - filter input", async() => {
        const spy = jest.fn(console.log('func called'));
        const wrapper = mount(<InputType type="select"
                                         label="color"
                                         options={colorOptions}
                                         value="green" 
                                         handleChange={ spy } />);

        // Trigger onChange update the value
        wrapper.children()
               .children()
               .children()
               .find('input')
               .simulate('change', { target: { value: 'blue'} })
        wrapper.update();
        expect(spy).toHaveBeenCalled();
    });
});

