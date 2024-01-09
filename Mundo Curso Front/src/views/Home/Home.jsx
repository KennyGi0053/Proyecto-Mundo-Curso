import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategoria, getCategoria, getCursos } from '../../redux/actions'
import Card from '../../components/Card/Card'
import Paginado from '../../components/Paginado/Paginado'
import style from './Home.module.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Carrusel from '../../components/Carrusel/Carrusel'
import Garantia from '../../assets/Garantia.png'
const Home = () => {

  const dispatch = useDispatch()
  const categoria = useSelector(state => state.categoria)
  const allcursos = useSelector(state => state.cursos)
  console.log('soy la categoria', categoria)
  
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

  const [currentPage, setCurrentPage] = useState(1)
  const [cursosPorPagina] = useState(15)
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
    <div className={style.container}>
    <div className={style.CarruselMain}>
    <img className={style.garantia} src={Garantia} alt='garantia' />      
        <Carrusel/>
      </div>
      <div className={style.ContainerFilters}>

    <div className= {style.search}>

      <SearchBar returnToFirstPage={returnToFirstPage}/>
    </div>
      </div>
  
  <div className={style.cateCardContainer} >
    <div className={style.categoria} >
     <label>CATEGORIA</label>
      {
        categoria?.map((cate, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={cate.name}
              id={`cbox${index + 1}`}
              onChange={(event) => handleCategoria(event)}
            />
            <label htmlFor={`cbox${index + 1}`}>{cate.name}</label>
          </div>
        ))
      } 
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
      <button>PAGAR</button>

  <Paginado 
  cursosPorPagina={cursosPorPagina}
  allcursos={allcursos.length}
  paginado={paginado}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  />
  </div>
  </div>
</div>
  )
}

export default Home