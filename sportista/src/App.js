import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components & pages
import Home from './pages/home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import Renters from "./pages/admin/Renters";
import Users from "./pages/admin/Users";
import Renter from './pages/renter/Renter';
import MyFields from "./pages/renter/MyFields";
import Analytics from "./pages/renter/Analytics";
import User from './pages/user/User';
import MyReservations from './pages/user/MyReservations';
import Invites from './pages/user/Invites';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/renters" element={<Renters />} />
          <Route path="/users" element={<Users />} />
          <Route path="/renter" element={<Renter />} />
          <Route path="/my-fields" element={<MyFields />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/user" element={<User />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/invites" element={<Invites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
