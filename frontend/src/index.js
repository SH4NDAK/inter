import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Agenda from './pages/agenda-page';
import 'rsuite/dist/rsuite.min.css';
import Login from './pages/login-page';
import Cadastro from './pages/cadastro-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/agenda' element={<Agenda />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

