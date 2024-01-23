import style from './Loader.module.css'
import Loading from '../../assets/Loader Circles.gif'



const Loader = ({background}) => {


  return (
    <div className={style.loader} style={{background}}>
        <img src={Loading} alt='loading' className='loader-image'/>
    </div>
  )
}

export default Loader