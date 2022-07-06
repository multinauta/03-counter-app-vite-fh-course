import { getSaludo } from '../../src/base-pruebas/02-template-string.js';

describe('Pruebas en 02-tempalte-string' , () => {
    test('getSaludo debe retornar "hola Fernando"', () => {
        const name = 'Fernando';

        const message = getSaludo( name );

        

        expect(message).toBe(`Hola ${ name }`);
    });
    
});