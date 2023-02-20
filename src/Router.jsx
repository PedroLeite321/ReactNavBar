import Home from './routes/Home'
import About from './routes/About'
import Reference from './routes/Reference'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoute = () =>    {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/reference'element={<Reference/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;