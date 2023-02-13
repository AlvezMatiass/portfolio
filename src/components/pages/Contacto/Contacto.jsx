import React from 'react';
import Inicio from '../../Inicio/Inicio';

const Contacto = () => {

  const Contacto = [
    {
      contacto: 'Ubicación',
      info: 'CABA, Argentina'
    },
    {
      contacto: 'Email',
      info: 'matiasalvez2018@gmail.com'
    },
    {
      contacto: 'LinkedIn & Github',
      info: 'AlvezMatiass'
    },
    {
      contacto: 'Número',
      info: '+54 1125547953'
    } 
  ]

  return (
    <div className='contacto proyectos'>
      <Inicio lugar='CONTACTO' />
      <div className="contactoContainer">
        <p>Muchas gracias por ver mi perfil.</p>
        <p>No dudes en hacerme cualquier consulta que tengas.</p>
        {
          Contacto.map((data, index) => {
            return (
              <div className="contactoInfo">
                  <p>{data.contacto}</p>
                  <p>{data.info}</p>
              </div>
            )
          })
        }
        
      </div>
    </div>  
  )
}

export default Contacto;