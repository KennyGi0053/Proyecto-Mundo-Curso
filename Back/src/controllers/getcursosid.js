const { Curso, Formato } = require('../db')
const getcursosid = async(id) => {

    let curso = await Curso.findBypk(id)
        
    return curso
}
module.exports = getcursosid