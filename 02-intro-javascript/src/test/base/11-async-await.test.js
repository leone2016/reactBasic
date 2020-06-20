import {getImagen} from '../../bases/11-async-await';

describe('UNIT TEST 11-async-await.test.js', () => {
    test('should be return the url of th image', async () => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    });
    
});
