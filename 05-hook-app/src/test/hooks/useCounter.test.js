import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
//clase 147
describe('Pruebas en useCounter.test.js', () => {
    it('debe de retornar valores por defecto', () => {
        const { result } = renderHook(()=> useCounter()); // valor por defecto
        console.log(result.current);

        expect( result.current.state ).toBe(10);
        expect(typeof result.current.increment ).toBe('function');
        expect(typeof result.current.decrement ).toBe('function');
        expect(typeof result.current.resetear ).toBe('function');

        
    })
    it('debe de retornar valores por defecto 100 === ', () => {
        const { result } = renderHook(()=> useCounter(100)); // valor por defecto
        expect( result.current.state ).toBe(100);

    })
    it('debe de incrementar el counter en 1 ', () => {
        const { result } = renderHook(()=> useCounter(100)); // valor por defecto
        // act: es cuando se quiere hacer alguna accion de esas funciones  incrementar().... etc
        const { increment } = result.current;
        act (()=>{
            increment(1); // ejecuta la funcion
        })
        const { state:counter } = result.current;
        expect(counter).toBe(101);
    });
    it('debe de decrementar el counter en 1 ', () => {
        const { result } = renderHook(()=> useCounter(100)); // valor por defecto
        // act: sirve para ejecutar una funcion
        const { decrement } = result.current;
        act (()=>{
            decrement(1); // ejecuta la funcion
        })
        const { state:counter } = result.current;
        expect(counter).toBe(99);
    });
    it('debe de resetar el counter ', () => {
        const { result } = renderHook(()=> useCounter(100)); // valor por defecto
        // act: sirve para ejecutar una funcion
        const { decrement, resetear } = result.current;
        act (()=>{
            decrement(1); // ejecuta la funcion
            resetear();

        })
        const { state:counter } = result.current;
        expect(counter).toBe(100);
    });
})
