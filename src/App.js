import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './Pages/MISSIONS';
import Rockets from './Pages/ROCKETS';
import Profile from './Pages/PROFILE';
import Dragons from './Pages/DRAGONS';
import Navbar from './component/Navbar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
