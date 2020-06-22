import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGridItem } from "../../components/GifGridItem";

describe('UNIT TEST GifGridItem.test.js', () => {

    const title = 'un tìtulo';
    const url = 'https://imagentest.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should be show <GifGridItem/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be have a paragraph with the title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should be have an image with url and alt equals to props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should be have animate__fadeIn', () => {
        const cardDiv = wrapper.find('div');
        console.log(cardDiv.props());
        const className = cardDiv.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
