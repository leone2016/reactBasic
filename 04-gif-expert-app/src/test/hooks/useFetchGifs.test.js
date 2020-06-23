import {useFetchGifs} from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("UNIT TEST useFetchGifs.test.js", () => {
    test("should be return the initial state", async() => {
        //Invariant Violation: Hooks can only be called inside the body of a function component.
        //const { data: image, loading } = useFetchGifs('One Punch');
    
        // sirve para que cree un componente virtual y ahi virtualice el hook
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetchGifs("One Punch")
        ); // we used destructuring, to see more, use console.log
        await waitForNextUpdate();
        const { data: image, loading } = result.current;
        console.log(image, loading);
    
        expect(image.length).toEqual(10);
        //expect(loading).toBe(true);
      });
    
      // para tener mas informacion revisar la documentacion de renderHook
      // clase 100   
      test("should be return an array of imag and the loading in false ", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useFetchGifs("One Punch")
        ); // we used destructuring, to see more, use console.log
        await waitForNextUpdate(); // revisar mas la documentacion para entender xq hay que poner esto
        
        const { data: image, loading } = result.current;
        //console.log(image, loading);
    
        expect(image.length).toBe(10);
        expect(loading).toBe(false);
      });
});
