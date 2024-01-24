import { FILTER_BY_CATEGORIA, GET_CATEGORIA, GET_CURSOS, GET_RESET, GET_RESET_PRICE, ORDER_BY_PRICE, SEARCH_BY_NAME } from "./actions"



const initialState = {
    categoria: [],
    cursos: [],
    allcursos: [],
    selectedCategorias: [] // Nuevo estado para almacenar las categorías seleccionadas

}

const rootReducer = (state = initialState, action) => {
    
    // let allcursos;
    // let CursosWithCategoria;
    // let updatedSelectedCategorias; // Declarar la variable fuera del bloque switch
    switch (action.type) {
        case GET_CURSOS:
            return {
                ...state,
                cursos: action.payload,
                allcursos: action.payload
            }

        case GET_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }

            case FILTER_BY_CATEGORIA:
              const allcursos = state.allcursos
              const CursosPorCategoria = action.payload === 'all'

              ? allcursos

              : allcursos.filter(cur => cur.categoria.includes(action.payload))
              return {
                ...state,
                cursos: CursosPorCategoria
              }
      // allcursos = state.allcursos;

      // // Copiar las categorías seleccionadas del estado
      // updatedSelectedCategorias = [...state.selectedCategorias];

      // if (action.payload === "all") {
      //   // Si se selecciona "all," mostrar todos los cursos y reiniciar las categorías seleccionadas
      //   CursosWithCategoria = allcursos;
      //   updatedSelectedCategorias = [];
      // } else {
      //   if (updatedSelectedCategorias.includes(action.payload)) {
      //     // Si la categoría ya está seleccionada, quítala
      //     updatedSelectedCategorias = updatedSelectedCategorias.filter(
      //       (cat) => cat !== action.payload
      //     );
      //   } else {
      //     // Si no está seleccionada, agrégala
      //     updatedSelectedCategorias.push(action.payload);
      //   }

      //   // Filtrar los cursos basados en las categorías seleccionadas
      //   CursosWithCategoria = allcursos.filter((cur) =>
      //     updatedSelectedCategorias.every((cat) => cur.categoria.includes(cat))
      //   );
      // }

      // return {
      //   ...state,
      //   cursos: CursosWithCategoria,
      //   selectedCategorias: updatedSelectedCategorias
      // };
        case SEARCH_BY_NAME:
            return {
                ...state,
                cursos: action.payload
            }

            case ORDER_BY_PRICE:
              const CursoByPrice = action.payload === 'asc' ?
              state.allcursos.sort((a,b) => {
                if (a.price > b.price) return 1
                if (b.price > a.price) return -1
                return 0
              }) :
              state.cursos.sort((a,b) => {
                if (a.price > b.price) return -1
                if (b.price > a.price) return 1
                return 0
              })
              return {
                ...state,
                allcursos: CursoByPrice
              }
            case GET_RESET:
              return {
                ...state,
                cursos: state.allcursos
              }

              case GET_RESET_PRICE:
                return {
                  ...state,
                  cursos: [...state.allcursos]
                }
    default:
        return {...state}
        }
}

export default rootReducer