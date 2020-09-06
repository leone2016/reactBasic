import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

//clase 154
describe('Prueba en <TodoListItem/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de llamar la funcion handleBorrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });
    test('debe de llamar la funcion handletoggle', () => {

        wrapper.find('span').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });
    test('debe de llamar la funcion correctamente', () => {

        const p = wrapper.find('span');
        expect(p.text().trim()).toBe(`1) ${demoTodos[0].desc}`);
    });
    test('debe de tener la clase complete si el TODO.done  = true ', () => {

        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />
        )
        expect(wrapper.find('span').hasClass('complete')).toBe(true);
    });
}) 