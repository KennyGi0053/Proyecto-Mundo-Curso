import style from './Loader.module.css'
import Loading from '../../assets/loader1.gif'



const Loader = ({background}) => {


  return (
    <div className={style.loader} style={{background}}>
        <img className={style.gif} src={Loading} alt='loading' />
    </div>
  )
}

export default Loader