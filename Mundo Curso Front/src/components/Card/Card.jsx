import style from './Card.module.css'

const Card = (props) => {

    const id= props.id
  return (
    <div className={style.container} >
        <div className={style.card}>
            <img className={style.image} src={props.image} alt=""/>
            <p>{props.name}</p>
            <p>⭐{props.rating}</p>
            <p>$USD {props.price}</p>
        </div>
    </div>
  )
}

export default Card