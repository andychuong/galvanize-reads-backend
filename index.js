require('dotenv').config()
const express = require(`express`)
const bodyParser = require('body-parser')
const authorsRouter = require('./routes/authors')
const booksRouter = require('./routes/books')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use('/authors', authorsRouter)
app.use('/books', booksRouter)

//handle 404
app.use((req, res, next) => {
    let error = new Error('Not found')
    error.status = 404
    next(error)
})

//handle all errors
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send(err)
})

app.listen(port, () => console.log(`listening on ${port}`))

module.exports = app
