import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Link} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './Router';
import AppRoute from './Router'


function App() {
  return (
    <div className="App">
        <header id='navigationContainer'>
          <header id='navHeader'>
            <h1>React Nav</h1>
          </header>
          <nav id='nav'>
            <li className='navItem'><a href="http://localhost:5173/home">Home</a></li>
            <li className='navItem'><a href="http://localhost:5173/about">About</a></li>
            <li className="navItem"><a href="http://localhost:5173/reference">Reference</a></li>
          </nav>
        </header>
        <section id="sectionContainer">
         <AppRoute/>
        </section>
    </div>
  )
}

export default App
