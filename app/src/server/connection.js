const Pool = require('pg').Pool

const context = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teste',
    password: '123qwe',
    port: 5432,
})


module.exports = {
    context
}