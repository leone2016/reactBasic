import getHeroeById, {getHeroeByOwner} from '../../bases/08-impo-expo';
import heroes from '../../data/heroes'
/**
 * 1. Validate when id is present
 * 2. Validate when id is correct but doesn't existe an hero'
 */
describe('UNIT TEST 08-impo-expo.test.js', () => {
    test('should return an hero by id', () => {
        const id = 1;
        const heroExpect = getHeroeById(id);

        const heroData = heroes.find(h => h.id === id);

        expect(heroExpect).toEqual(heroData);
    });
    
    
    test("should be return undefined if hero does not exist", () => {
        const id = 222;
        const heroExpect = getHeroeById(id);
        expect(heroExpect).toBe(undefined );
    })

    test('should be return an array with the heros of DC', () => {
        const owner = 'DC';
        const herosExpect = getHeroeByOwner(owner);

        const herosData = heroes.filter( h => h.owner === owner);
        expect(herosExpect).toEqual(herosData);

    })
    
    test('should be return an array with the heros of marvel', () => {
        const owner = 'Marvel';
        const herosExpect = getHeroeByOwner(owner);
        expect(herosExpect.length).toBe(2);
    })
});   
