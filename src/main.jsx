import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './HelloWorldApp'
import { CounterApp } from './CounterApp'

import './style.css';



ReactDOM.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
        <HelloWorldApp />
        {/* <CounterApp  /> */}
        <FirstApp title="Hola, soy Vegeta"/>
    </React.StrictMode>
)