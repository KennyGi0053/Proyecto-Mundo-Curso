const { Router } = require('express');
const formatoRouter = require('./formatoRouter');
const cursoRouter = require('./cursoRouter')
const categoriaRouter = require('./categoriaRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router()
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/curso',cursoRouter)
router.use('/formato',formatoRouter)
router.use('/categoria',categoriaRouter)
module.exports = router;
