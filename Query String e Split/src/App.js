import { Banner } from './components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lojas from '../src/pages/lojas'
import Cidades from '../src/pages/cidades'
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Banner />} />
        <Route path='/lojas' exact element={<Lojas />} />
        <Route path='/cidades' element={<Cidades />} />
      </Routes>
    </BrowserRouter>
  );
}