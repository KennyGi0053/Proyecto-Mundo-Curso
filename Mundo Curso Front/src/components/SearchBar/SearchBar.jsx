import { useState } from "react"
import { searchByName } from "../../redux/actions"
import { useDispatch } from "react-redux"
import style from './SearchBar.module.css'
import search from '../../assets/search.gif'
const SearchBar = (returnToFirstPage) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const handleChange = (event) => {
        const value = event.target.value;
        event.preventDefault()
        setName(value)

        if (value.trim() !== '') {
            dispatch(searchByName(value))
            .then(() => {returnToFirstPage()})
        }

    }

  return (
    <div className={style.searchContainer}>
  <img src={search} to='iconoSearch'className={style.searchIcon}/>
  <input className={style.input}
    type='text'
    placeholder='Buscar curso...'
    value={name}
    onChange={(event) => handleChange(event)}
  />
</div>
  )
}

export default SearchBar