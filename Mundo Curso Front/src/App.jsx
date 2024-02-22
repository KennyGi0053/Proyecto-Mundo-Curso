import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.module.css'
import Detalle from './views/Detalle/Detalle'
import Preguntas from './components/Preguntas/preguntas'
function App() {
  

  return (

  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element = {<Detalle/>} />
      <Route path="/preguntas" element = {<Preguntas/>} />
    </Routes>
  </div>
  )
}

export default App
