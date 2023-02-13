import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const ToggleAnimation = () => {
    setTimeout(() => {
      const menuNavbar = document.getElementById('menu')
      const menuContainer = document.getElementById('menuContainer')

      menuNavbar.classList.toggle("active");
      menuContainer.classList.toggle("active");
    })
  }

  return (
    <div className='navbarContainer'>
      <div className="navbar">
        <div id='menu' onClick={ToggleAnimation}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <div id='menuContainer'>
        <Link to='/'>Inicio</Link>
        <Link to='/sobremi'>Sobre mí</Link>
        <Link to='/proyectos'>Proyectos</Link>
        <Link to='/contacto'>Contacto</Link>
        <img src="https://i.postimg.cc/j2B1W4F0/matias.png" alt="matias" />
      </div>
    </div>
  )
};

export default Navbar;
