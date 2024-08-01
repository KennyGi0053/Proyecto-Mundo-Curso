import { NavLink } from "react-router-dom"
import style from './Navbar.module.css'
import logo from '../../assets/Logo Mundo Curso.png'
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false); // Agrega el estado para mostrar/ocultar la barra de navegación

  const toggleNav = () => {
    setShowNav(!showNav); // Cambia el estado para mostrar/ocultar la barra de navegación
  };

  return (

    <div className={style.Nav}>
      
      <img className= {style.imagen} src={logo} alt= 'logo'/>

      <div className={style.mobileMenuIcon} onClick={toggleNav}>
      <svg height='50px' width='50px' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="hamburgermenu">
  <path fill="rgb(243, 95, 64)" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" ></path>
  <path fill="#fff" d="M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8 5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8zM18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12 5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12zM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16 5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16z" ></path>
</svg>
          </div>

        <section className={`${style.links} ${showNav ? style.showNav : ''}`}>
        <div className={style.hamburguer}>
        <NavLink to='/'>
            <a>Inicio</a>
        </NavLink>

        
        
        <NavLink to='/Preguntas'>
        <a>Preguntas Frecuentes</a>
        </NavLink>
        <NavLink to='/Pagoseguro'>
        <a>Pago Seguro</a>
        </NavLink>
       
        </div>
        </section>
        </div>


    // <div className={styles.Container}>
    //     <img className={styles.logo} src={logo} alt='logo' />
      
    //     <section className={styles.HomeContainer} >
    //     <img className={styles.home} src={home} alt='icono home'></img>
    //     <Link to= '/' className={styles.link}> 
    //     <h4 className={styles.iconHome}> Inicio </h4>
    //     </Link>

    //     <img  className={styles.interrogation} src={interrogation} alt='Preguntas frecuentes' />
    //     <Link className={styles.link} to='Preguntas'>
    //     <h4 className={styles.frecuente}>Preguntas frecuentes</h4>
    //     </Link>
        
    //     <img className={styles.dollar} src={dollar} alt='simbolo de dolar' ></img>
    //     <Link to= '/pagoseguro'> 
    //     <h4 className={styles.p}>Pago seguro</h4>
    //     </Link>
    //     </section >

    //     {/* <img className={styles.garantia} src={Garantia} alt='garantia' /> */}

       
        
        
        
    // </div>
  )
}

export default Navbar