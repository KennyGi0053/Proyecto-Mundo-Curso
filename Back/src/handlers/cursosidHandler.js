const getcursosid = require('../controllers/getcategoria')





const cursosid = async(req,res) => {

        const { id } = req.params
        try {
            
            const allcursosId = await getcursosid(id)
    
            res.status(200).json(allcursosId)
        } catch (error) {
            
            res.status(400).json({ error: error.message})
        }
        
}
    


module.exports = cursosid