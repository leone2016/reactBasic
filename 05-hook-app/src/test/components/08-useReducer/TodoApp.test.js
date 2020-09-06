import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';
// cada que se ocupe el componente en este caso TodoApp, es necesario import React form 'react';
//clase 157
describe('test suit <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp />);
    // en la linea 32 de TodoApp se realiza un guardado en localStorage, 
    // esta es una forma generica de mockear la accion de guardar en localStorage
    Storage.prototype.setItem = jest.fn(()=>{});

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();


    });

    test('debe de agregar un TODO', () => {
        // el mount se puede utilizar cuando se necesita probar toda la aplicacion en contexto
        // shalow vs mount
        /**
         * la diferencia esta en el nivel en el cual es renderizada la aplicacion, es que el shallow es mas basico 
         */
        const wrapper = mount(<TodoApp />);
        // este act si sale de la libreria de pruebas de react
        // se utiliza para hacer modificaciones
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

        });

        expect(wrapper.find('h2').text().trim()).toBe('TodoApp (2)');
        expect( localStorage.setItem).toHaveBeenCalledTimes(2); // estas dos veces estan en ña linea 30 y 31 de esta prueba 
        /**
         * esta validacion es similar a la que se hizo en TodoAdd.test.js linea 48 
         * esta validacion esta incompleta
         * expect( localStorage.setItem).toHaveBeenCalledwith({});
         *  */ 
        
    });

    test('debe de borrar un TODO',()=>{
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        expect(wrapper.find('h2').text().trim()).toBe('TodoApp (1)'); // prie
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h2').text().trim()).toBe('TodoApp (0)');
    });
})