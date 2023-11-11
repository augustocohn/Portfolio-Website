import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Components/Header/index.js'
import Sidebar from '../Components/Sidebar/index.js'

import Home from '../Pages/Home/index.js'
import About from '../Pages/About/index.js'
import Courses from '../Pages/Courses/index.js'
import Projects from '../Pages/Projects/index.js'
import Extras from '../Pages/Extras/index.js'

const App = () => {

    return (
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/courses' element={<Courses />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route exact path='/extras' element={<Extras />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App