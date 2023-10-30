import axios from 'axios'


export const GET_CURSOS = 'GET_CURSOS'

export const getCursos = () => {
    return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/curso`)
        const cursos = response.data
        return dispatch({
            type: GET_CURSOS,
            payload: cursos
        })
    }
}

export const GET_CATEGORIA = 'GET_CATEGORIA'

export const getCategoria = () => {
    return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/categoria`)
        const categoria = response.data
        return dispatch({
            type: GET_CATEGORIA,
            payload: categoria
        })
    }
}

export const FILTER_BY_CATEGORIA = 'FILTER_BY_CATEGORIA'

export const filterByCategoria = (payload) => {
    return {
        type: FILTER_BY_CATEGORIA,
        payload
    }
}

export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

export const searchByName = (name) => {

    return async(dispatch) => {
        const response = await axios.get(`http://localhost:3001/curso/${name}`)
        const Cursos = response.data
        return dispatch ({
            type: SEARCH_BY_NAME,
            payload: Cursos
        })
    }

}