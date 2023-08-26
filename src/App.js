import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Email from './components/register/Email';
import Password from './components/register/Password';
import PhoneNumber from './components/register/PhoneNumber';
import ChooseCountry from './components/register/ChooseCountry';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/login' 
            element={<Login />} 
          />
          <Route 
            path='/register'
          >
            <Route 
              path='/register/email' 
              element={<Email /> } 
            />
            <Route 
              path='/register/password' 
              element={<Password />} 
            />
            <Route 
              path='/register/phone-num' 
              element={<PhoneNumber />} 
            />
            <Route 
              path='/register/choose-country' 
              element={<ChooseCountry />} 
            />
          </Route>
          <Route 
            path='/user' 
            element={<Sidebar />} 
          >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
