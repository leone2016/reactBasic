import React from 'react';
import { shallow, mount} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
// clase 158
describe('Pruebas en <HomeScreen>', () => {

    const user = {
        name: 'leonardo',
        email: 'leoz.31@hotmail.com'
    }
    // es es necesario definir el context, ya que el contexto necesito un usuario
    /**
     * da el siguiente error:: TypeErrror: Cannot destructure property `user` of `undefined` or `null`
     * 1. primero se crea el contexto <UserContext>
     * 2. se usa el contexto en MainApp.js con el cual se crea un value que va compartir a lo largo con todos sus componente
     *      con todos sus componentes hijos en este caso es el <AppRouter/>
     */

     /**
      * Aqui se puede ver la diferencias de  shallow y mount
      * 
      * shallow usa high order component, eso quiere decir que solo haya snapshoot de   <UserContext/>
      * y no de <HomeScreen>, para ello se utiliza mount, cuando se necesita renderizar todo en general
      */
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>

    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
