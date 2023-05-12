import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components & pages
import Home from './pages/home/Home';
import SportsPage from './pages/home/SportsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin';
import Renters from "./pages/admin/Renters";
import Users from "./pages/admin/Users";
import Renter from './pages/renter/Renter';
import MyFields from "./pages/renter/MyFields";
import Analytics from "./pages/renter/Analytics";
import RenterAccount from './pages/renter/RenterAccount';
import User from './pages/user/User';
import MyReservations from './pages/user/MyReservations';
import Invites from './pages/user/Invites';
import UserAccount from './pages/user/UserAccount';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          {
            /*<Route path="/basketball" element={<Home />} />
            <Route path="/paintball" element={<Home />} />
            <Route path="/tennis" element={<Home />} />
            <Route path="/ice_skating" element={<Home />} />
            <Route path="/football" element={<Home />} />
            <Route path="/volleyball" element={<Home />} />
            <Route path="/boxing" element={<Home />} />
            <Route path="/handball" element={<Home />} />
            <Route path="/table_tennis" element={<Home />} />
            <Route path="/hockey" element={<Home />} />*/
          }
          <Route path="/sport/:sport" element={<SportsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/renters" element={<Renters />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/renter" element={<Renter />} />
          <Route path="/renter/my-fields" element={<MyFields />} />
          <Route path="/renter/analytics" element={<Analytics />} />
          <Route path="/renter/account" element={<RenterAccount />} />
          <Route path="/renter/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/my-reservations" element={<MyReservations />} />
          <Route path="/user/invites" element={<Invites />} />
          <Route path="/user/account" element={<UserAccount />} />
          <Route path="/user/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
