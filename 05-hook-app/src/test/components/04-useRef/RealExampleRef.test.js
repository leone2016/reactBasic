import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
// clase 151
describe('Pruebas en <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef/>)
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        // valida que cuando se carga <RealExampleRef/>, el componente <RealExampleRef/> no deberia de existir
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
    }); 
    
    test('debe de mostrar el componente <MultipleCustomHooks/>' , () => {
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true)
    });
    
    
})
 