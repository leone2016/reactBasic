import React from 'react'
import ReactDOM from 'react-dom';// ReactDom permite cargar mi jsx (js + html), ademas que permite crear mi arbol de elementos 
/* import PrimeraApp from './PrimeraApp'; */
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={124}/>, divRoot); 