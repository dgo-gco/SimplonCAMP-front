import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Toaster } from 'react-hot-toast';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='register' element={<RegisterForm />}/>
        <Route path='login' element={<LoginForm />}/>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
