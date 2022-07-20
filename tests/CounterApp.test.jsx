/** @jest-environment jsdom */
import {  render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('pruebas en <CounterApp />', () => { 
    const initialValue = 10;
    test('debería de hacer match con el snapshopt', () => { 
        const { container } = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();

     })
     test('debe mostrar el valor inicial de 100 <CounterApp value={100}', () => { 
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();

        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');
    
      })
 })