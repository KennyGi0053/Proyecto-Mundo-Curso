import style from './Loader.module.css'
import Loading from '../../assets/Loader2.gif'



const Loader = ({background}) => {


  return (
    <div className={style.containerloader}>

    <div className={style.loader} style={{background}}>
        <img className={style.gif} src={Loading} alt='loading'/>
    </div>
    </div>
  )
}

export default Loader