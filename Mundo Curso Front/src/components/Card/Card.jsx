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
            <p>{props.categoria}</p>
            <div className={style.botoncontainer}>
            <p className={style.price}>{props.price}</p>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <button className={style.botonDetalles}>Detalles</button>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Card