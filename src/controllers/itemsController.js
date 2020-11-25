const models = require('../db/models');

const getAllItems = async (req, res) => {
    try {
        const items = await models.Item.findAll({
            attributes: ['item_name']
        });
        return res.status(200).json({ items });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllItems
}