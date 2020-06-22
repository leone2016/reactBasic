import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from "../../components/GifExpertApp";

describe('UNIT TEST GifExpertApp.test.js', () => {
    test('should be show <GifExpertApp/> correctly', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
