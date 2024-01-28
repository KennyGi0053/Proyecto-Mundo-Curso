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

        </section >
        <section className={styles.Bienvenido}>
       <p className={styles.p}>Pago seguro</p>
        {/* <img className={styles.garantia} src={Garantia} alt='garantia' /> */}

        </section>
        
        
        
    </div>
  )
}

export default Navbar