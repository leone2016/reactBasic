describe('UNIT TEST in demo.test.js', ()=>{
    test('should be equals the strings ', () => {
        //1.inicialización
       const mensaje = "Hola mundo";
       // 2. estimulo
       const mensaje2 = `Hola mundo`;
       // 3.observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===
    });
    
})

