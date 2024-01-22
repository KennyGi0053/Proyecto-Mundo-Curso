const { Curso, Formato } = require('../db')
const getcursosid = async() => {

    let curso = await Curso.findBypk(id)
        
    return curso
}
module.exports = getcursosid