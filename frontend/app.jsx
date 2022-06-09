import React from 'react'

import Clock from './components/clock.jsx';
import Calculator from './components/calculator.jsx';
import Weather from './components/weather.jsx';


const names = [
  'Charles',
  'Karen',
  'Bryan',
  'Duncan',
  'Isabelle',
  'Matt',
  'Maria',
  'Calvin'
]

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
]

function App() {
  return(
    <div>
      <Clock />
      <Weather />
      <Calculator />
    </div>
  );
}

export default App;
