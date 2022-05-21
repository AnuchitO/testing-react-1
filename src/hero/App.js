import React from 'react'
import logo from './logo.svg'
import './App.css'
import Hi from './Hi'
import ButtonColor from './ButtonColor'
import {HiFunc} from './HiFunc'
import {ShowCounter} from './ShowCount'
import CleanUpDemo from './CleanupDemo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hi name="AnuchitO"></Hi> */}
        <HiFunc name="Nong" skill="english" />
        {/* <ShowCounter /> */}
        {/* <CleanUpDemo /> */}
      </header>
    </div>
  )
}

export default App
