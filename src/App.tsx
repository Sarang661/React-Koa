import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Sachin from './Sachin';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sachin" element={<Sachin/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
