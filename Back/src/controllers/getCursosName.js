const { Curso, Formato } = require('../db')
const { Op } = require("sequelize");
const getcursosName = async(name) => {

    const cursos = await Curso.findAll({
        where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
        },
    });
    
    console.log('Cursos encontrados:', cursos);

   return [...cursos]
     
}

module.exports = getcursosName