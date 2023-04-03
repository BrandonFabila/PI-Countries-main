const { getApi } = require('./getApi');
const { getDB } = require('./getDB');

const getAll = async () => {
    const apiData = await getApi();
    const dbData = await getDB();

    const allData = dbData.concat(apiData).sort((a, b) => {
        return a.name < b.name ? -1 : 1
    })
    return allData
}

module.exports = { getAll }