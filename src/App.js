import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FoodList from './pages/FoodList';
import HomePage from './pages/HomePage'; // ✅ import your HomePage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:name" element={<FoodList />} />
        <Route path="/hotel/:name" element={<FoodList />} />
        <Route path="/menu" element={<HomePage />} /> {/* ✅ add this route */}
      </Routes>
    </Router>
  );
};

export default App;
