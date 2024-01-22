const { Router } = require('express')
const cursos = require('../handlers/cursoHandler')
const cursosName = require('../handlers/cursoNameHandler')
const cursosid = require('../handlers/cursosidHandler')
const cursoRouter = Router()




cursoRouter.get('/', cursos)
cursoRouter.get('/:name',cursosName)
cursoRouter.get('/:id', cursosid)

module.exports = cursoRouter