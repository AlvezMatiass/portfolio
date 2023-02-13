import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/proyectos'>PROYECTOS</Link>
      <Link to='/sobremi'>SOBRE MÍ</Link>
      <Link to='/contacto'>CONTACTO</Link>
    </div>
  )
}

export default Footer;