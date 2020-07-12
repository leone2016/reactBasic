
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('pruebas en useForm.test.js', () => {

    const initialForm = {
        name: 'leonardo',
        email: 'leoz.32@hotmail.com'
    }

    it('must be return a form by default', () => {
        const { result } = renderHook(() => useForm(initialForm)); // valor por defecto
        const [values, handleInputChange, reset] = result.current; // destructuracion de arreglos

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    it("must be change the from's value (cambiar name)", () => {

        const { result } = renderHook(() => useForm(initialForm)); // valor por defecto
        const [, handleInputChange] = result.current; // se agrega una coma al inicio para decir que no importa ( values ) 
        // va simular cuando un input hace la modificacion 
        act(() => {
            handleInputChange({
                target: {
                    name: 'name', // quiere decir el input de tipo name
                    value: 'Medina'
                }
            });
        });

        const [values] = result.current;
        // espera que values (formsValues) sea igual a initialForm, pero cambiado name: '???'
        expect(values).toEqual( {...initialForm, name: 'Medina'});
    });

    it('must be re-stablish the form with reset', () => {
        const { result } = renderHook(() => useForm(initialForm)); // valor por defecto
        const [, handleInputChange, reset] = result.current; // se agrega una coma al inicio para decir que no importa ( values ) 
        // va simular cuando un input hace la modificacion 
        act(() => {
            handleInputChange({
                target: {
                    name: 'name', // quiere decir el input de tipo name
                    value: 'Medina'
                }
            });
            reset();
        });

        const [values] = result.current;
        // espera que values (formsValues) sea igual a initialForm, pero cambiado name: '???'
        expect(values).toEqual( initialForm );
    });

});