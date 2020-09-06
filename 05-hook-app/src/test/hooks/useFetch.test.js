import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';
// clase 179
describe('pruebas en useFetch.test.js', () => {
    test('must return the information by default ', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

       // console.log(result.current);
        const { data, loading, error } = result.current;
        // valores por defecto declarados en useFetch


        expect(data).toBe(null); // useFetch es una peticion ascincrona, por eso continua y data se carga como null
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });
    test('debe de tener  la informacion deseada, loading: false, error: null', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();
        /*         console.log( result.current); */
        const { data, loading, error } = result.current;
        // valores por defecto declarados en useFetch


        expect(data.length).toBe(1); // useFetch es una peticion ascincrona, por eso continua y data se carga como null
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });
    test('debe de manejar el error', async () => {
        // in this url, the mistake is -id
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://regres.in/api-id/users?page=2'));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');

    });


});