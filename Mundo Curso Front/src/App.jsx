import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.module.css'
import Detalle from './views/Detalle/Detalle'
import Preguntas from './components/Preguntas/Preguntas'
import PagoSeguro from './components/PagoSeguro/PagoSeguro.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/'
//axios.defaults.baseURL = 'https://mundocursoback.vercel.app/'
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
