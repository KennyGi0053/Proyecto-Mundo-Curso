import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCursosId } from '../../redux/actions'
import style from './Detalle.module.css'
import Loader from '../../components/Loader/Loader'

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
                <img className={style.imagen} src={cursosId.image}></img>
                <h2 className={style.description}>{cursosId.description}</h2>

                </div>
                <h2 className={style.categoria}>Categoría {cursosId.categoria}</h2>
                <h2 className={style.precio}>Precio ${cursosId.price}</h2>
            </div>
            </div>
        )}

    </div>
  )
}

export default Detalle