import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import Resultado from './pages/resultado';
import  Home from './pages/home'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/resultado' exact element={<Resultado />} />
      </Routes>
    </BrowserRouter>
  );
}