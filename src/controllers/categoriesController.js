const models = require('../db/models');

const getAllCategories = async (req, res) => {
    try {
        const categories = await models.Category.findAll({
            attributes: ['cat_name']
        });
        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCategories
}