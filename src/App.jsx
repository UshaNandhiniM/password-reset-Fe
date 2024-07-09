import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Products from './Pages/Products';
import ForgetPassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/products' element={<Products/>} />
       <Route path='/forgetpassword' element={<ForgetPassword/>}/>
       <Route path='/resetpassword' element={<ResetPassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;