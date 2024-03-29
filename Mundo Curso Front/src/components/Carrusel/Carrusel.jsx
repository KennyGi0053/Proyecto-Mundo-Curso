import imagen1 from '../../assets/pasteleria canina 2.png'
import imagen2 from '../../assets/barista principiante.png'
import imagen3 from '../../assets/flash afiliados.png'
import imagen4 from '../../assets/yoga ciclo menstrual.jpg'
import FlechaIzquierda from './left-arrow.png'
import FlechaDerecha from './right-arrow.png'
import styled from 'styled-components'
import style from './Carrusel.module.css'
import { useRef, useEffect } from 'react'
// import style from './Carrusel.module.css'




const Carrusel = () => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null)

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = '500ms ease-out all';
  
      const tamañoSlide = primerElemento.offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
  
      const transicion = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener('transitionend', transicion);
      };
  
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };
  
  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
  
      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = `translateX(-100%)`;  // Ajusta el valor según tus necesidades
      slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
  
      setTimeout(() => {
        slideshow.current.style.transition = '500ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente()
    }, 10000)

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
        <a href="https://go.hotmart.com/V88753921U" target="_blank" rel="noreferrer">

        <img  src={imagen1} alt='foto de carrusel 1'/>
        </a>
        {/* <TextoSlide  colorTexto="#fff">
          <p>Descuento exclusivo en éstos cursos</p>
        </TextoSlide> */}
      </Slide>
      <Slide >
        <a href="https://go.hotmart.com/H90744880W" target="_blank" rel="noreferrer">

        <img  src={imagen2} alt='foto de carrusel 2'/>
        </a>
        {/* <TextoSlide >
          <p>Cursos con clases en línea</p>
        </TextoSlide> */}
      </Slide>
      <Slide>
        <a href="https://go.hotmart.com/W91076209I" target="_blank" rel="noreferrer">

        <img src={imagen3} alt='foto de carrusel 3'/>
        </a>
        {/* <TextoSlide >
          <p>Descuento exclusivo en éstos cursos</p>
        </TextoSlide> */}
      </Slide>
      <Slide >
        <a href="https://go.hotmart.com/Y88612131T" target="_blank" rel="noreferrer">

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
  max-height: 450x;
  position: relative;
  
  img {
    width: 100%;
    max-height: 450px;
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