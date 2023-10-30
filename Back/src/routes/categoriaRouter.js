const { Router } = require('express')
const categorias = require('../handlers/categoriaHandler')

const categoriaRouter = Router()





categoriaRouter.get('/', categorias)

module.exports = categoriaRouter