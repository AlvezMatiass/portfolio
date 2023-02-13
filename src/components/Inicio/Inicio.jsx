import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = (prop) => {
  return (
    <div>
        <div className="inicio">
            <Link to='/'>INICIO</Link>
        </div>
        <p>{prop.lugar}</p>
    </div>
  )
}

export default Inicio