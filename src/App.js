import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';

import Home from './components/Home';
import Proyectos from './components/pages/Proyectos';
import Contacto from './components/pages/Contacto';
import Sobremi from './components/pages/Sobremi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/sobremi' element={<Sobremi/>} />
              <Route exact path='/proyectos' element={<Proyectos/>} />
              <Route exact path='/contacto' element={<Contacto/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
