import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
// el jest.mock lo que hace que cuando se vaya a utilizar ese archivo, en vez de utilizar el useFetch directo,
// utiliza una implementación
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHoks/>', () => {

    useCounter.mockReturnValue({ 
        state: 10, 
        increment: ( ) => {},
     });

    test('debe de mostrar correctamente', () => {
        // esto es lo que retorna por defecto el useFetch
        useFetch.mockReturnValue({
            data: null, loading: true, error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Leonardo',
                quote: 'Hola mundo 2020'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />);
        /* console.log(wrapper.html()); */
        expect(wrapper.find('.loading').exists()).toBe( false ); // cuando tenga data, no debe existir la clase .loading
        expect(wrapper.find('.mb-0').text().trim()).toBe( 'Hola mundo 2020' ); // la clase .mb-0 <footer/>
        expect(wrapper.find('footer').text().trim()).toBe( 'Leonardo' ); // la etiqueta <footer/>
    });

})
