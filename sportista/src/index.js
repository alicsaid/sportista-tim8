import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // ovo importa bootstrap

import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import Users from "./pages/admin/Users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>
);
