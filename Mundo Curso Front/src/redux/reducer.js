import { FILTER_BY_CATEGORIA, GET_CATEGORIA, GET_CURSOS, SEARCH_BY_NAME } from "./actions"



const initialState = {
    categoria: [],
    cursos: [],
    allcursos: [],


}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURSOS:
            return {
                ...state,
                cursos: action.payload
            }

        case GET_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }

        case FILTER_BY_CATEGORIA:

        const allcursos = state.allcursos
        const CursosWithCategoria = action.payload === 'all'

        ? allcursos

        : allcursos.filter(cur => cur.categoria.includes(action.payload))
        return {
            ...state,
            cursos: CursosWithCategoria        
        }
        case SEARCH_BY_NAME:
            return {
                ...state,
                cursos: action.payload
            }
    default:
        return {...state}
        }
}

export default rootReducer