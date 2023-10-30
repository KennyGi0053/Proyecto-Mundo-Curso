const getCategoria = require('../controllers/getcategoria')





const categorias = async(req,res) => {

    try {
        
        const allcategorias = await getCategoria()

        res.status(200).json(allcategorias)
    } catch (error) {
        
        res.status(400).json({ error: error.message})
    }
    
}


module.exports = categorias