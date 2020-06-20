import {retornaArreglo} from '../../bases/07-desess-arr';

describe('UNIT TEST 07-desess-arr.test.js',() => {
    test('should return a string and a number', () => {
        const [letras, numeros ] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 1032]);
        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
       
        expect(numeros).toEqual(1032);
        expect(typeof numeros).toEqual('number');

    })
    
})