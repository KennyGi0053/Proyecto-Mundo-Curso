import axios from 'axios'


export const GET_CURSOS = 'GET_CURSOS'

export const getCursos = () => {
    return async(dispatch) => {
        const response = await axios.get(`/curso`)
        const cursos = response.data
        return dispatch({
            type: GET_CURSOS,
            payload: cursos
        })
    }
}

export const GET_CURSOSID = 'GET_CURSOSID'

export const getCursosId = (id) => {
    return async(dispatch) => {
        const response = await axios.get(`/curso/id/${id}`)
        const curso = response.data

        dispatch({
            type: GET_CURSOSID,
            payload: curso
        })
    }
}

export const GET_CATEGORIA = 'GET_CATEGORIA'

export const getCategoria = () => {
    return async(dispatch) => {
        const response = await axios.get(`/categoria`)
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
        const response = await axios.get(`/curso/name/${name}`)
        const Cursos = response.data
        return dispatch ({
            type: SEARCH_BY_NAME,
            payload: Cursos
        })
    }

}

export const ORDER_BY_PRICE = 'ORDER_BY_PRICE'

export const orderByPrice = (payload) => {
    return {
        type:ORDER_BY_PRICE,
        payload
    }
}

export const GET_RESET = 'GET_RESET'

export const getReset = () => {
    return ({
        type: GET_RESET,
        
    })
}

export const GET_RESET_PRICE = 'GET_RESET_PRICE'
export const getResetPrice = () => {
    return {
        type: GET_RESET_PRICE
    }
}
