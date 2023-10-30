const { Categoria } = require('../db')



const getCategoria = async() => {

  const findCategoria = await Categoria.findAll()
  return findCategoria

}

module.exports = getCategoria