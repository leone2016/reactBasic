import {getGifs} from '../../helpers/getGifs';

describe('UNIT TEST getGifs.test.js fetch', () => {
    
    test('should be get 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe(10);     
    });

    test('should be get 0 elements', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);     
    });

    
});
