import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Home,
  Edit,
  Create
} from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={ <Create /> } />
        <Route path="/edit" element={ <Edit /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App
