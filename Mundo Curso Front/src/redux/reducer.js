import { FILTER_BY_CATEGORIA, GET_CATEGORIA, GET_CURSOS, GET_CURSOSID, GET_RESET, GET_RESET_PRICE, ORDER_BY_PRICE, SEARCH_BY_NAME } from "./actions"



const initialState = {
    categoria: [],
    cursos: [],
    allcursos: [],
    selectedCategorias: [], // Nuevo estado para almacenar las categorías seleccionadas
    cursosall: [],
    cursosId: [],
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
                allcursos: action.payload,
                cursosall: action.payload
            }
            case GET_CURSOSID:
              return {
                ...state,
                cursosId: action.payload
              }

        case GET_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }

            case FILTER_BY_CATEGORIA:
              const allcursos = state.allcursos;
              const cursosall = state.cursosall;
              const CursosPorCategoria = action.payload === 'all'

              ? allcursos

              : allcursos.filter(cur => cur.categoria.includes(action.payload))
              return {
                ...state,
                cursos: CursosPorCategoria,
                allcursos: allcursos,
                cursosall: cursosall,
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
    state.allcursos.slice().sort((a, b) => a.price - b.price) :
    state.allcursos.slice().sort((a, b) => b.price - a.price);
  return {
    ...state,
    cursos: CursoByPrice
  }
            case GET_RESET:
              console.log('Recibida la acción GET_RESET');
              return {
                ...state,
                cursos: state.allcursos,
                selectedCategorias: state.selectedCategorias,
                allcursos: state.cursosall
              }

              case GET_RESET_PRICE:
                console.log('Recibida la acción GET_RESET_PRICE');
                return {
                  ...state,
                  allcursos: [...state.allcursos],
                  cursos: [...state.allcursos]
                }
    default:
        return {...state}
        }
}

export default rootReducer