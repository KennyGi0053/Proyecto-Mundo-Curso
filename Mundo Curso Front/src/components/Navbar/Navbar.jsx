import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../../assets/Logo mi mundo Curso.png'
import { AiOutlineHome } from "react-icons/ai";
import interrogation from '../../assets/interrogation.png'
import home from '../../assets/home.png'
import dollar from '../../assets/dollar.png'
const Navbar = () => {


  return (
    <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt='logo' />
      
        <section className={styles.HomeContainer} >
        <img className={styles.home} src={home} alt='icono home'></img>
        <Link to= '/' className={styles.link}> 
        <h4 className={styles.iconHome}> Inicio </h4>
        </Link>

        <img  className={styles.interrogation} src={interrogation} alt='Preguntas frecuentes' />
        <Link className={styles.link} to='Preguntas'>
        <h4 className={styles.frecuente}>Preguntas frecuentes</h4>
        </Link>
        
        <img className={styles.dollar} src={dollar} alt='simbolo de dolar' ></img>
        <h4 className={styles.p}>Pago seguro</h4>
        </section >

        {/* <img className={styles.garantia} src={Garantia} alt='garantia' /> */}

       
        
        
        
    </div>
  )
}

export default Navbar