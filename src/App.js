import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import React from 'react';
import TourDetails from './Components/TourDetails/TourDetails';


const toursData = require("./data/db.json");





function App() {
  return (
    <div className="app">

    
    <Routes>
      <Route path='/' element={<Home  data={toursData} />} />
      <Route path='/city/:id' element={<TourDetails />} />
      
    </Routes>

    </div>

  )
}

export default App; 
