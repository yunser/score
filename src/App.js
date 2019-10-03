import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// page
import Home from './views/Home'
import About from './views/About'
import Record from './views/Record'

import './App.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/records" component={Record} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
