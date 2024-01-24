import { Link } from 'react-router-dom'
import style from './Card.module.css'
const Card = (props) => {

    const id= props.id

  return (
    <div className={style.container} >
        <div className={style.card}>
            <img className={style.image} src={props.image} alt=""/>
            <p className={style.name}>{props.name}</p>
            {/* <p>⭐{props.rating}</p> */}
            <p className={style.price}>{props.price}</p>
            <p>{props.categoria}</p>
            <div className={style.botoncontainer}>
            <Link to={`/detail/${id}`}>
            <button className={style.botonDetalles}>Detalles</button>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Card