/**
 * tarea 
 * 1. Crear las siguientes pruebas para el <CounterApp/>
 *    Debe mostrar <CounterApp/> correctamente (hacer match con un snapshot)
 *    y sus valores por defecto
 * 
 * 2. Debe mostrar el valor por defecto de 100
 *    usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
 */
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('UNIT TEST CounterApp.test.js', () => {
    let wrapper = shallow(<CounterApp />); // we define twice because when we init here the wrapper's properties are accesable in the test suit

    beforeEach(() => {
        console.log('BEFORE---------------------->');
        wrapper = shallow(<CounterApp />);
    })
    test('should be show <CounterApp/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be show the value by default 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    });

    test('should be increment with the button +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('should be decrementar with the button -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('should be reset the value with the default value ', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    })
    
    

})
