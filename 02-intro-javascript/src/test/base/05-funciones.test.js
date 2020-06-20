import { getUser, getUsuaruiActivo } from '../../bases/05-funciones';

describe('UNIT TEST 05-funciones.test.js', () => {

    test('should be return an object', () => {
        const user = {
            nombre: 'Leonardo',
            apellido: 'Medina',
        }

        const valid = getUser();
        expect(valid).toEqual(user); //
    })
    test('should be return an object whit a param', () => {
        const name = 'Leo';
        const user = {
            uuid: 'asdasdasd645656',
            userName: name
        };
       

    const valid = getUsuaruiActivo(name);
    expect(valid).toEqual(user); //
})
    
}) 