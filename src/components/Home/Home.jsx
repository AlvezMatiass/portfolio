import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <img src="https://media.licdn.com/dms/image/C5603AQGOxGziePZ9TQ/profile-displayphoto-shrink_800_800/0/1655217039597?e=1691020800&v=beta&t=0fBA9L8icVPv7Yksr5hF_KGyogDyYBIbJpLPksuZSPM" alt="foto" className="foto" />
      <div className="info">
        <p className="nombre">MATIAS ALVEZ</p>
        <p className="front">FrontEnd Developer ReactJS</p>
        <div className="link">
          <a href='./cvmatiasalvez.pdf' download='CV - Matias Alvez' target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://www.linkedin.com/in/matias-alvez-ab409b199/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AlvezMatiass" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/alvezmatiass/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Home;