import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import style from './Paginado.module.css'
const Paginado = ({cursosPorPagina, allcursos, paginado, currentPage, setCurrentPage}) => {
  
    const pageNumbers = []

    for (let i=0; i < Math.ceil(allcursos/cursosPorPagina); i++) {
        pageNumbers.push(i+1)
    }
  
    const totalPages = Math.ceil(allcursos/cursosPorPagina)
  
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, totalPages))
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }

    return (
    <div className={style.pagi}>
        

        <button className={style.but} onClick={handlePrevPage}
        disabled={currentPage === 1}><AiOutlineArrowLeft/></button>
    
        {
            pageNumbers?.map(number => (
                <button className={style.but} key={number} onClick={() => paginado(number)}>{number}</button>
            ))
        }

        <button className={style.but} onClick={handleNextPage}
        disabled={currentPage === totalPages}><AiOutlineArrowRight/></button>
        
    </div>
  )
}

export default Paginado