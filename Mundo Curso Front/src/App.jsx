import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './App.module.css'
function App() {
  

  return (

  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </div>
  )
}

export default App
