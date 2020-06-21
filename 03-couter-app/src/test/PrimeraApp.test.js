import React from 'react';
/* const { render } = require("@testing-library/react");*/
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
const { PrimeraApp } = require("../PrimeraApp");

describe('UNIT TEST <PrimeraApp/>', () => {
    /*  test('should be return the message "Hello, I am Leo"', () => {
         const saludo = 'Hello, I am Leo';
         const { getByText } = render( <PrimeraApp saludo={saludo} />);
         expect( getByText(saludo)).toBeInTheDocument();
     })
      */

    test('should be show <PrimeraApp/> correctly', () => {
        const saludo = 'Hello, I am Leo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should be show the subtitle sended for props', () => {

        const saludo = 'Hello, I am Leo';
        const subTitulo = 'soy un subtitulo';
        const wrapper = shallow(<PrimeraApp
            saludo={saludo}
            subTitulo={subTitulo} />);
            
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);
    })


})
