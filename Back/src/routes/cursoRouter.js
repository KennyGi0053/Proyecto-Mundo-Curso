const { Router } = require('express')
const cursos = require('../handlers/cursoHandler')
const cursosName = require('../handlers/cursoNameHandler')
const cursoRouter = Router()




cursoRouter.get('/', cursos)
cursoRouter.get('/:name',cursosName)

module.exports = cursoRouter