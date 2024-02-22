import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../../assets/Logo mi mundo Curso.png'
import { AiOutlineHome } from "react-icons/ai";
import interrogation from '../../assets/interrogation.png'
const Navbar = () => {


  return (
    <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt='logo' />
      
        <section className={styles.HomeContainer} >
        <Link to= '/' className={styles.link}> 
        <h4 className={styles.iconHome}> <AiOutlineHome /> Inicio </h4>
        </Link>
        <img  className={styles.interrogation} src={interrogation} alt='Preguntas frecuentes' />
        <Link className={styles.link} to='Preguntas'>
        <h4 className={styles.frecuente}>Preguntas frecuentes</h4>
        </Link>

        

       <h4 className={styles.p}>Pago seguro</h4>
        </section >

        {/* <img className={styles.garantia} src={Garantia} alt='garantia' /> */}

       
        
        
        
    </div>
  )
}

export default Navbar