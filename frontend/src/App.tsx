import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Home,
  Edit,
  Delete,
  Create
} from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={ <Create /> } />
        <Route path="/delete" element={ <Delete /> } />
        <Route path="/edit" element={ <Edit /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App
