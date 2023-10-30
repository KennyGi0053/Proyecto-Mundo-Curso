import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../../assets/Logo Mundo Curso 4.png'
import { AiOutlineHome } from "react-icons/ai";
const Navbar = () => {


  return (
    <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt='logo' />
      
        <section className={styles.HomeContainer} >
        <Link to= '/' className={styles.link}> 
        <h4 className={styles.iconHome}> <AiOutlineHome /> Inicio </h4>
        </Link>

        </section >
        <section className={styles.Bienvenido}>
       <p className={styles.p}>Bienvenido a Mundo Curso,</p>

        </section>
        
        
        
    </div>
  )
}

export default Navbar