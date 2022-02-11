import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import SearchIndex from "./components/SearchIndex"
import ParksList from './components/ParksList'
import ParksPage from './components/ParksPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={ <SearchIndex /> } />
        <Route path='/parks/:stateId' element={ <ParksList /> } />
        <Route path='/parks/:stateId/:parkId' element={ <ParksPage /> } />
      </Routes>
    </div>
  );
}

export default App;
