import React from 'react'
import Inicio from '../../Inicio'

const Sobremi = () => {

  const Habilidades = [
    {
      name: 'HTML'
    },
    {
      name: 'CSS - SASS'
    },
    {
      name: 'JavaScript'
    },
    {
      name: 'Bootstrap'
    },
    {
      name: 'Github - Git'
    },
    {
      name: 'ReactJS'
    },
    {
      name: 'Figma'
    },
    {
      name: 'Adobe Photoshop'
    },
    {
      name: 'Adobe Illustrator'
    }
  ] 

  return (
    <div className='sobreMi'>
      <Inicio/>
      <div className="sobremiContainer">
        <p className='sobremititulo'>SOBRE MI</p>
        <div className="infomi">
          <p>Buenas, soy <strong>Matias Alvez</strong> y soy <strong>Desarrollador Front-End</strong>. Empecé mis estudios a principios de 2021 en la plataforma online <strong>CoderHouse</strong> donde pude expandir mis conocimientos en la programación web. Actualmente, estoy desempleado en busca de mi primera experiencia laboral donde pueda probarme tanto a mí como mis conocimientos.</p>
          <p>Me considero una persona proactiva, confiable y un buen compañero de equipo, aportando creatividad sin descuidar ni menospreciar los diferentes puntos de vista de mis compañeros para lograr una excelente resolución de retos y futuros proyectos.</p>
        </div>
        <p className='sobremititulo'>HABILIDADES</p>
        <div className="habilidades">
          {
            Habilidades.map((data, index) => {
              return (
                <p>{data.name}</p>
              )
            })
          } 
        </div>
      </div>
    </div>
  )
}

export default Sobremi;