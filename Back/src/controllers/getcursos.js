const { Curso, Formato } = require('../db')
const getcursos = async() => {

    let cursos = await Curso.findAll({
        include: {
            model: Formato,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })

    cursos = cursos?.map((curso) => {
        return {
            id: curso.id,
            name: curso.name,
            price: curso.price,
            image: curso.image,
            rating: curso.rating,
            categoria: curso.categoria,
            formato: curso.formato,
            paymentUrl: curso.paymentUrl,
            adicional: curso.adicional,
            video: curso.video
            
        }
    })

   return [...cursos]
}

module.exports = getcursos