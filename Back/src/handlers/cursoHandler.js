const getcurso = require('../controllers/getcursos')





const cursos = async(req,res) => {

    try {
        
        const allcursos = await getcurso()

        res.status(200).json(allcursos)
    } catch (error) {
        
        res.status(400).json({ error: error.message})
    }
    
}


module.exports = cursos