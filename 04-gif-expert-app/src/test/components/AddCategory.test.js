import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';


describe('UNIT TEST', () => {

    const setcategories = jest.fn();//()=>{};
    let wrapper = shallow(<AddCategory setcategories={setcategories} />);
    
    beforeEach( ()=>{
        jest.clearAllMocks(); // si se tiene algun mock o una  funcion, esto hara que se limpie
         wrapper = shallow(<AddCategory setcategories={setcategories} />);

    })
    test('should be well <AddCategory /> ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be  change the  inputText/> ', () => {
        const input = wrapper.find('input');
        const value =  'valor input';
        input.simulate('change', { target: {value} });
        expect( wrapper.find('p').text().trim()).toBe(value);
    });

    test('should NOT post the information with submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setcategories).not.toHaveBeenCalled();
    });

    /**
     * tarea 
     * 1.- simular el inputChange
     * 2. simular el submit
     * 3. setcategories se debe de haber llamado
     * 4. limpiar el input text
     */
    test('should call setcategories and clean the input text ', () => {
        const value =  'valor input';
        wrapper.find('input').simulate('change',  { target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setcategories).toHaveBeenCalled();
        expect(setcategories).toHaveBeenCalledTimes(1);
        expect(setcategories).toHaveBeenCalledWith( expect.any(Function));
        expect( wrapper.find('input').prop('value')).toBe('');
    });
})