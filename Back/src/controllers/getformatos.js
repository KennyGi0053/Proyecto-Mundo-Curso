const { Formato } = require('../db')



const getformato = async() => {

  const findFormato = await Formato.findAll()
  return findFormato

}

module.exports = getformato