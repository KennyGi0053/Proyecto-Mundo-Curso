import { useSelector } from "react-redux"
import Card from "../Card/Card"

const CardsContainer = () => {

    const cursos = useSelector(state => state.cursos)
    console.log('soy el curso', cursos)
  return (
    <div>
        {cursos.map(curso => {
            return <Card
            id={curso.id}
            image={curso.image}
            rating={curso.rating}
            name={curso.name}
            price={curso.price}
            key={curso.id}
            />
        })}
    </div>
  )
}

export default CardsContainer