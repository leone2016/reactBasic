import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from "../../components/GifExpertApp";

describe('UNIT TEST GifExpertApp.test.js', () => {
    test('should be show <GifExpertApp/> correctly', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        // el estado al no tener un identificador useState en componentes se visualiza como State: ['One Punch']
        // ya que se podria tener varios estados
        //  una forma para validar es que los valores iniciales vengan por las props
        // de esta manera no se envia ONE PUNCH por efecto
    });

    test('should be show a list of categories', ()=>{
        const categories = ['One Punch', 'Dragon Ball']; // esta es una forma de mokear el useState ( )

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length); // las veces que se imprima GifGrid es igual a categories


    });
    
});
