import imagen1 from '../../assets/foto carrusel 1.png'
import imagen2 from '../../assets/350 recetas saludables.png'
import imagen3 from '../../assets/foto carrusel 3.png'
import imagen4 from '../../assets/foto carrusel 4.png'
import FlechaIzquierda from './left-arrow.png'
import FlechaDerecha from './right-arrow.png'
import styled from 'styled-components'
import style from './carrusel.module.css'
import { useRef, useEffect } from 'react'
// import style from './Carrusel.module.css'




const Carrusel = () => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null)

  const siguiente = () => {
    //Comprobamos que el slideshow tenga elementos
    if(slideshow.current.children.length > 0){
      // Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];
      //establecemos la transicion para el slideshow
      slideshow.current.style.transition = `5000ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      //movemos el slideshow
  slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

const transicion = () => {
  // reiniciamos la posición del slideshow
  slideshow.current.style.transition = 'none';
  slideshow.current.style.transform = `translateX(0)`;  // Asegúrate de usar translateX aquí

  // tomamos el primer elemento y lo mandamos al final
  slideshow.current.appendChild(primerElemento);

  slideshow.current.removeEventListener('transitionend', transicion);
}

// Eventlistener para cuando termina la animación
slideshow.current.addEventListener('transitionend', transicion);
        
    

    }

  }
  
  const anterior = () => {
    if(slideshow.current.children.length > 0) {
      //obtenemos el ultimo lemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      
      slideshow.current.style.transition = 'none';
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)

      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '500ms ease-out-all';
        slideshow.current.style.transform = `translate(0)`

      }, 30)
    }
  }


  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente()
    }, 8200)

    //eliminamos los intervalos
    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervaloSlideshow.current)
    })

    //volvemos a poner el intervalo cuando saquen el cursor del slideshow
    slideshow.current.addEventListener('mouseleave', () => {
      intervaloSlideshow.current = setInterval(() => {
        siguiente()
      }, 8000)
      })
  }, [])
  
  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>

      <Slide >
        <a href="https://sonriesinazucar.com/" target="_blank" rel="noreferrer">

        <img  src={imagen1} alt='foto de carrusel 1'/>
        </a>
        {/* <TextoSlide  colorTexto="#fff">
          <p>Descuento exclusivo en éstos cursos</p>
        </TextoSlide> */}
      </Slide>
      <Slide >
        <a href="https://sonriesinazucar.com/" target="_blank" rel="noreferrer">

        <img  src={imagen2} alt='foto de carrusel 2'/>
        </a>
        {/* <TextoSlide >
          <p>Cursos con clases en línea</p>
        </TextoSlide> */}
      </Slide>
      <Slide>
        <a href="https://go.hotmart.com/S88013109F" target="_blank" rel="noreferrer">

        <img src={imagen3} alt='foto de carrusel 3'/>
        </a>
        {/* <TextoSlide >
          <p>Descuento exclusivo en éstos cursos</p>
        </TextoSlide> */}
      </Slide>
      <Slide >
        <a href="https://go.hotmart.com/F87831518F" target="_blank" rel="noreferrer">

        <img  src={imagen4} alt='foto de carrusel 4'/>
        </a>
        {/* <TextoSlide >
          <p>Descuento exclusivo en éstos cursos</p>
        </TextoSlide> */}
      </Slide>
      </ContenedorSlideshow>
      <Controles >
        <Boton onClick={anterior}>
          <img className={style.arrowleft} src={FlechaIzquierda} alt='flecha izquierda'/>
        </Boton>
        <Boton derecho="true" onClick={siguiente}>
        <img className={style.arrowright} src={FlechaDerecha} alt='flecha derecha'/>
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  )
}

const ContenedorPrincipal = styled.div`

  position: relative;
  
  
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;
  
  img {
    width: 100%;
    max-height: 400px;
    vertical-align: top;
    
  }
`;

//  const TextoSlide = styled.div`
  
//    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
//    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
//    width: 85%;
//    padding: 10px 68px;
//    text-align: center;
//    position: absolute;
//    bottom: 0;
//    font-family: 'Poppins', sans-serif;
//    font-size: larger;
//    @media screen and (max-width: 700px) {
//      position: relative;
//    }
//  `;

const Controles = styled.div`
  position: absolute;
  top:0;
  z-index: 20;
  width: 97%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: .3s ease all;
  

  //  &:hover {
  //    background: rgba(0,0,0,.2);
  //    path {
  //      fill: #fff;
  //    }
  //  }

  path {
    filter: ${props => props.derecho === "true" ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
  }
  ${props => props.derecho === "true" ? 'right:0': 'left:0'}

`;
export default Carrusel