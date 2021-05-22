const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const routes = require('./routes').router;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', routes)




app.listen(port, () => { })
