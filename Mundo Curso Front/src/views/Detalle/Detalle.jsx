import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCursosId } from '../../redux/actions'
import style from './Detalle.module.css'
import Loader from '../../components/Loader/Loader'
import Footer from '../../assets/Footer para detalles.png'
const Detalle = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCursosId(id))
    }, [dispatch, id])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

      const cursosId = useSelector((state) => state.cursosId)

    
      return (
    <div className={style.loading}>
        {loading ? (
            <Loader/>
        ) : (
            <div className={style.container}>

            <div className={style.container2}>
                <h2 className={style.h1}>{cursosId.name}</h2>

                <div className={style.containerdescripimagen}>
                            {cursosId.video ? (
                                <iframe
                                    className={style.imagen}
                                    src={cursosId.video}
                                    title="Video"
                                    allowfullscreen
                                    frameBorder="0"
                                ></iframe>
                            ) : (
                                <img
                                    className={style.imagen}
                                    src={cursosId.image}
                                    alt="Imagen del curso"
                                />
                            )}
                <h2 className={style.description}>{cursosId.description}</h2>
                </div>
                <Link to={cursosId.adicional} target="_blank" rel="noopener noreferrer">
                <button className={style.adicional}>Ver más</button>
                </Link>
                <h2 className={style.categoria}>Categoría: {cursosId.categoria}</h2>
                <h2 className={style.formato}>Formato: {cursosId.formato}</h2>
                <div className={style.precioboton}> 
                <h2 className={style.precio}>Precio ${cursosId.price}</h2>
                <Link to={cursosId.paymentUrl} target="_blank" rel="noopener noreferrer">

                <button className={style.boton} >Comprar </button>
                </Link>

                {/* <img src={Footer}></img> */}

                </div>
            </div>
            </div>
        )}

    </div>
  )
}

export default Detalle