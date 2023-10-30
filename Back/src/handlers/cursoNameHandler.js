const getcursosName = require('../controllers/getCursosName')





const cursosName = async(req,res) => {

    const { name } = req.params
    try {
        const cursoName = await getcursosName(name);

        if (cursoName.length === 0) {
            // No se encontraron cursos con el nombre proporcionado
            res.status(404).json({ message: 'No se encontraron cursos con ese nombre.' });
        } else {
            // Se encontraron cursos
            res.status(200).json(cursoName);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
}


module.exports = cursosName