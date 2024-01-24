const getcursosid = require('../controllers/getcursosid')





const cursosid = async(req,res) => {

        const { id } = req.params
        try {
            const curso = await getcursosid(id);
        
            if (!curso) {
              // Si el curso no se encuentra, devuelve un código de estado 404 (No encontrado)
              return res.status(404).json({ error: 'Curso no encontrado' });
            }
        
            res.status(200).json(curso);
          } catch (error) {
            console.error('Error al obtener el curso por ID:', error.message);
            res.status(500).json({ error: 'Error interno del servidor' });
          }
        };
    


module.exports = cursosid