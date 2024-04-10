// components/Navbar.js
import React from "react";
import logo from '../assets/logo.jpeg'; 


function Navbar({ toggleDarkMode }) {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo da Loja de Kits Festivos" />
      <button className="toggle-btn" onClick={toggleDarkMode}>Alternar Modo</button>
    </nav>
  );
}

export default Navbar;
