describe('Pruebas en <DemoComponent />', () => {

    test('esta prueba no funciona', () => {

        // 1. inicialización
        const message1 = 'Hola Mundo';

        // 2. estimulo
        const message2 = message1.trim()

        // 3. Observar el comportamiento ... esperado
        expect(message1).toBe(message2)

    });

});