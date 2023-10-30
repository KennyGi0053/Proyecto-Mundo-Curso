const { Curso } = require('../db')
const { Formato } = require('../db')
const path = require('path')
const fs = require('fs')
const { Categoria } = require('../db')


const loadCursos = async () => {
    try {
        const cursos2 = await Curso.findAll()
        if (cursos2.length) {
            console.log('ya hay cursos')
            return
        }
        const cursos = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../Datajson/Cursos.json"))
        )
        await Curso.bulkCreate(cursos)
        console.log('cursos cargados')
    } catch (error) {
        console.log(error);
    }
}

const loadFormatos = async () => {
    try {
        const formatos2 = await Formato.findAll()
        if (formatos2.length) {
            console.log('ya hay formatos')
            return
        }

        const formatos = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../Datajson/Formatos.json"))
        )
        await Formato.bulkCreate(formatos)
        console.log("formatos cargados")
    } catch (error) {
        console.log(error)
    }
}

const loadCategoria = async () => {
    try {
        const categorias2 = await Categoria.findAll()
        if (categorias2.length) {
            console.log('ya hay categoria')
            return
        }

        const categoria = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../Datajson/Categorias.json"))
        )
        await Categoria.bulkCreate(categoria)
        console.log("categorias cargadas")
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    loadCursos,
    loadFormatos,
    loadCategoria
}