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
            <button className={style.botonDetalles}>Detalles</button>

        </div>
    </div>
  )
}

export default Card