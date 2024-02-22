import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategoria, getCategoria, getCursos, getReset, getResetPrice, orderByPrice } from '../../redux/actions'
import Card from '../../components/Card/Card'
import Paginado from '../../components/Paginado/Paginado'
import style from './Home.module.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Carrusel from '../../components/Carrusel/Carrusel'
import Garantia from '../../assets/Garantia.png'
import Loader from '../../components/Loader/Loader'
const Home = () => {

  const dispatch = useDispatch()
  const categoria = useSelector(state => state.categoria)
  const allcursos = useSelector(state => state.cursos)
  console.log('soy la categoria', categoria)
  
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(getCategoria())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(getCursos())
  }, [dispatch])
  
  
   const handleCategoria = (event) => {
     dispatch(filterByCategoria(event.target.value))
     setCurrentPage(1)
   }

   const handleOrderByPrice = (event) => {
    dispatch(orderByPrice(event.target.value))
    order ? setOrder(false) : setOrder(true)
    setCurrentPage(1)
   }

   const handleReset = () => {
    dispatch(getReset())
    dispatch(getResetPrice())
    setCurrentPage(1)
   }

  const [currentPage, setCurrentPage] = useState(1)
  const [cursosPorPagina] = useState(10)
  const indexOfLastCursos = currentPage * cursosPorPagina
  const indexOfFirstCursos = indexOfLastCursos - cursosPorPagina
  const currentCursos = allcursos.slice(indexOfFirstCursos, indexOfLastCursos)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const returnToFirstPage = () => {
    setCurrentPage(1)
}
  return (
    <div >
      {loading ? (
        <Loader background="url('path/to/background-image.jpg')" />
      ) : (   
    
    <div className={style.container}>
    <div className={style.CarruselMain}>
        <Carrusel/>
      </div>

     <img className={style.garantia} src={Garantia} alt='garantia' />      
    <div className= {style.search}>

      <SearchBar className={style.search} returnToFirstPage={returnToFirstPage}/>
    </div>
      
  
  <div className={style.cateCardContainer} >
    <div className={style.categoria} >
     <select className={style.cateselect} onChange={(event) => handleCategoria(event)}>
      <option  value="">Selecciona una categoría</option>
      {
        categoria?.map((cate, index) => (
          <option key={index} value={cate.name}>
            {cate.name}
          </option>
        ))
      }
    </select>
  </div>
  <div className={style.contenedorprice}>
    <select className={style.selectprice} onChange={event => handleOrderByPrice(event)} defaultValue='default'>
    <option  value="">Ordenar por precio</option>
      <option value = 'desc'>Mayor Precio</option>
      <option value = 'asc'>Menor Precio</option>
    </select>
  </div>
  <div className={style.contenedorReset}>
    <button className={style.botonreset} onClick={handleReset}>Limpiar Filtros</button>
  </div>
      </div>

    

  
  <div className={style.card}>
    {currentCursos?.map((cu) => {
      
      return (
        
        <Card
        id={cu.id}
        name={cu.name}
        image={cu.image}
        rating={cu.rating}
        price={cu.price} 
        key={cu.id}/>
        )
      })}
      </div>
  <Paginado 
  cursosPorPagina={cursosPorPagina}
  allcursos={allcursos.length}
  paginado={paginado}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  />
  </div>
  )}
  </div>
  )
}

export default Home