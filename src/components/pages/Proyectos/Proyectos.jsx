import React from 'react'
import Inicio from '../../Inicio/Inicio';


const Proyectos = () => {

  const Proyectos = [
    {
      name: 'EVE - CoderHouse Web Developer Project',
      github: 'https://github.com/AlvezMatiass/EVE',
      url: 'https://alvezmatiass.github.io/EVE'
    },
    {
      name: 'EJE - CoderHouse ReactJS Project',
      github: 'https://github.com/AlvezMatiass/Espacio-EJE',
      url: 'https://espacioeje.netlify.app'
    },
    {
      name: 'FRIV - CoderHouse JavaScript Project',
      github: 'https://github.com/AlvezMatiass/FRIV',
      url: 'https://alvezmatiass.github.io/FRIV'
    },
    {
      name: 'CONPAS - Web Developer',
      github: 'https://github.com/AlvezMatiass/CONPAS',
      url: 'https://alvezmatiass.github.io/CONPAS'
    }
  ]

  return (
    <div className='proyectos'>
      <Inicio lugar='PROYECTOS' />
      {
        Proyectos.map((data, index) => {
          return (
            <div className="proyectosContainer">
            <p>{data.name}</p>
            <div className="proyectosLink">
              <a href={data.github} target="_blank" rel="noopener noreferrer">Github</a>
              <a href={data.url} target="_blank" rel="noopener noreferrer">URL</a>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Proyectos;