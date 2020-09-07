import React from 'react';
import {mount} from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';

describe('Prueba en <AppRouter/>', () => {
    const user = {
        id: 1,
        name: 'Fernando'
    }
    const wrapper = mount(
    <UserContext.Provider value={{user}}>
        <AppRouter />
    </UserContext.Provider>
        );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});