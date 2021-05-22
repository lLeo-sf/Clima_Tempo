const context = require('./connection').context;


const add = (req, res) => {
    const { cidade, data, temp, temp_min, temp_max, looks } = req.body

    context.query('INSERT INTO historico (cidade, data, temp, temp_min, temp_max, looks) VALUES ($1, $2, $3, $4, $5, $6)',
        [cidade, data, temp, temp_min, temp_max, looks], (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send('Criado');
        })
}

const get = (req, res) => {
    context.query('SELECT * FROM historico ORDER BY id DESC', (error, results) => {
        res.send(results.rows);
    })
}

const getTop5 = (req, res) => {
    var query = 'SELECT cidade, COUNT(cidade) AS Qtd FROM historico GROUP BY cidade HAVING COUNT (CIDADE) > 1 ORDER BY COUNT(cidade) DESC LIMIT 5'

    context.query(query, (error, results) => {
        res.send(results.rows);
    })
}

module.exports = {
    add,
    get,
    getTop5
}