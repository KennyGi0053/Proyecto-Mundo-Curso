import style from './Footer.module.css'
import Linkedin from'../../assets/LinkedIn (1).gif'
import Github from '../../assets/github.png'
import { Link } from 'react-router-dom'
import Website from '../../assets/website.png'
const Footer = () => {
  return (
    <div className={style.ContenedorFooter}>
  <div className={style.content}>
    <p className={style.text}>Página creada por Kenny Pérez, Desarrollador web</p>
    <div className={style.logos}>
    <Link to='https://www.linkedin.com/in/kenny-gabriel-p%C3%A9rez-rosales-75760118b/' target="_blank">
    <img className={style.Linkedin} src={Linkedin}/>
    </Link>
    <Link to='https://github.com/KennyGi0053' target="_blank">
    <img className={style.github} src={Github}/>
    </Link>
    <Link to='https://potafolio-kennygabriel00-gmailcom.vercel.app/' target="_blank">
    <img className={style.website} src={Website}/>
    </Link>
    </div>
    

    <p className={style.copyright}>© 2024 Kenny Developer. Todos los derechos reservados.</p>
    </div>
        
    </div>
  )
}

export default Footer