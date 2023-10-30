const getformato = require('../controllers/getformatos')





const formatos = async(req,res) => {

    try {
        
        const allformatos = await getformato()

        res.status(200).json(allformatos)
    } catch (error) {
        
        res.status(400).json({ error: error.message})
    }
    
}


module.exports = formatos