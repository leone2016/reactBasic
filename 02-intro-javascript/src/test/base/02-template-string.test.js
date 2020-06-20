import {getGreetings} from '../../bases/02-template-string';
import '@testing-library/jest-dom';

describe('UNIT TEST in 02-template-string.test.js', () => {
    test('getGreetings should be return Hello World Leo ', () => {
        const name = 'Leo';
        const greeting = getGreetings(name);
        expect(greeting).toBe('Hello World '+ name);
    });

    test('getGreetings should be return Hello World default if any params is sended ', () => {
        
        const greeting = getGreetings();
        expect('Hello World default').toBe(greeting);
    });

});