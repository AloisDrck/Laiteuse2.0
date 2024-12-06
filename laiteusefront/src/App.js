import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register  from './pages/Register';
import LogIn from './pages/LogIn';
import Sorry from './pages/Sorry';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/sorry" element={<Sorry />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;