import React from 'react'
import logo from './logo.svg'
import './App.css'
import Hi from './Hi'
import ButtonColor from './ButtonColor'
import {Hero} from './Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hi name="AnuchitO"></Hi>
        <ButtonColor />
        <Hero />
      </header>
    </div>
  )
}

export default App
