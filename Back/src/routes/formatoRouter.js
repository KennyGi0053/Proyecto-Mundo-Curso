const { Router } = require('express')
const formatos = require('../handlers/formatosHandler')



const formatoRouter = Router()


formatoRouter.get('/', formatos)


module.exports = formatoRouter