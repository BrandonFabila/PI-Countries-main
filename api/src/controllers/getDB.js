const { Country, Activity } = require ('../db');

const getDB = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name'],
            throught: {
                attributes: []
            }
        },
    });
};

module.exports = { getDB }