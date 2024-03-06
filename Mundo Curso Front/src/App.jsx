import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.module.css'
import Detalle from './views/Detalle/Detalle'
import Preguntas from './components/Preguntas/preguntas'
import PagoSeguro from './components/PagoSeguro/PagoSeguro'
import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:5173/'
axios.defaults.baseURL = 'https://mimundocurso.netlify.app/'
function App() {
  

  return (

  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element = {<Detalle/>} />
      <Route path="/preguntas" element = {<Preguntas/>} />
      <Route path="/pagoseguro" element = {<PagoSeguro/>}/>
    </Routes>
  </div>
  )
}

export default App
