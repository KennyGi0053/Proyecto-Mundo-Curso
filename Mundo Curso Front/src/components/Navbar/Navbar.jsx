import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../../assets/Logo mi mundo Curso.png'
import { AiOutlineHome } from "react-icons/ai";
const Navbar = () => {


  return (
    <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt='logo' />
      
        <section className={styles.HomeContainer} >
        <Link to= '/' className={styles.link}> 
        <h4 className={styles.iconHome}> <AiOutlineHome /> Inicio </h4>
        </Link>

        <h4 className={styles.frecuente}>Preguntas frecuentes</h4>
        

       <h4 className={styles.p}>Pago seguro</h4>
        </section >

        {/* <img className={styles.garantia} src={Garantia} alt='garantia' /> */}

       
        
        
        
    </div>
  )
}

export default Navbar