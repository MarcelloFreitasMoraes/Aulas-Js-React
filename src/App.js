import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home';
import Local from './local';
import Session from './session';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/local' element={<Local />} />
        <Route path='/session' element={<Session />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;