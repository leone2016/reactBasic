import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp'

describe('UNIT TEST HookApp.test.js', () => {
    test('should show the component correctly', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
