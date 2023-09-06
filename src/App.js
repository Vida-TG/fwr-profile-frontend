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
import Success from './components/Success';
import ForgotPassword from './components/password-reset/ForgotPassword';
import ResetPassword from './components/password-reset/ResetPassword';
import OtpForReset from './components/password-reset/OtpForReset';
import UploadedDocs from './components/accounts/UploadedDocs';
import Address from './components/accounts/Address';
import { InstallmentPlans } from './components/accounts/InstallmentPlans';
import { BankCards } from './components/accounts/BankCards';
import { Statement } from './components/accounts/Statement';
import { Summary } from './components/accounts/Summary';
import { InstallmentPlansDetails } from './components/accounts/InstallmentPlansDetails';


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
            path='/reset'
          >
            <Route 
              path='/reset/forgot-password'
              element={<ForgotPassword />}
            />
            <Route 
              path='/reset/otp'
              element={<OtpForReset />}
            />
            <Route 
              path='/reset/reset-password'
              element={<ResetPassword />}
            />
          </Route>
          <Route 
            path='/user' 
            element={<Sidebar />}
          >
            <Route 
              path='/user/uploaded-docs'
              element={<UploadedDocs />}
            />
            <Route 
              path='/user/address'
              element={<Address />}
            />
            <Route
              path='/user/bank-cards'
              element={<BankCards />}
            />
            <Route
              path='/user/installment-plans'
              element={<InstallmentPlans />}
            />
            <Route
              path='/user/installment-plan-details'
              element={<InstallmentPlansDetails />}
            />
            <Route
              path='/user/statement-of-account'
              element={<Statement />}
            />
          </Route>
          <Route
              path='/summary'
              element={<Summary />}
            />
          <Route 
            path='/success/:type'
            element={<Success />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
