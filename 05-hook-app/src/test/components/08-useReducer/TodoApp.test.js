import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoApp/>', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);
    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo ', () => {
        // simula el submit del formulario
        //1.ero Evita que se haga el submit del form
        /**
         *  formSubmit hace referencia a una funcion
         */
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // es necesario enviar el preventDefault() ya que se hace esta validacion en la linea 9 de TodoAdd.js
        formSubmit({ preventDefault() { } });
        // se espera que el handleAddTodo haya sido llamado cero vecess
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('debe de llamar la funcion handleAddTodo', () => {
        const value = 'Aprender React';
        // en vez del simulate se puede utilidar .prop
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // es necesario enviar el preventDefault() ya que se hace esta validacion en la linea 9 de TodoAdd.js
        formSubmit({ preventDefault() { } });
        // se espera que el handleAddTodo haya sido llamado cero vecess
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        // se necesita ser llamado con un obj
        // el problema de agregar expect.any(Object) como objeto, es que se puede enviar un objeto vacio y puede  que la prueba pase
        //expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        // para saber que parametros se tiene que enviar en tohavebeenCallwith, se puede enviar un objeto vacio y ver el error con lo que se  + Received
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false            
        })
        // tambien se puede validar que despues que se haga el reset() el valor de descricion debe estar en vacio
        expect(wrapper.find('input').prop('value')).toBe('');
    });


});