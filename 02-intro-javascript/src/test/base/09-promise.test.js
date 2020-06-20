import getHeroeByIdAsync from '../../bases/09-promise';
import heroes from '../../data/heroes';

describe('UNIT TEST 09-promise.test.js', () => {
    test('should be return an hero async, getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then( heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('should be get an Error if the Hero does no existe', (done) => {
        const id = 1212;
        getHeroeByIdAsync(id)
        .catch(err => {
            expect(err).toBe('No se pudo encontrar el Heroe');
            done()
        })
    })
    
 });
