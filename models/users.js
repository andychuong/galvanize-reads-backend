const knex = require('../db/knex')
const model = {
    getOne(password) {
        return knex('users')
            .select(['id', 'userName', 'admin'])
            .where('password', password)
            .then(user => user[0])
            .catch(err => Promise.reject(err))
    },
    create(body) {
        return parseBody(body)
            .then(fields => {
                return knex('users')
                    .insert(fields)
                    .returning(['id', 'userName', 'admin'])
            })
    },
    update(id, body) {
        return parseBody(body)
            .then(fields => {
                return knex('books')
                    .where('id', id)
                    .update(fields)
                    .returning('*')
            })
            .then(book => book[0])
            .catch(err => Promise.reject(err))

    }
}

function parseBody(body) {
    // Never update ID or hard-code ID on creation, remove from body if it exists 
    delete body.id
    console.log('user', body)
    let fields = {}
    // Get column names from schema, only handle field names that exist in the DB
    return knex('users').columnInfo()
        .then(columns => Object.keys(columns))
        .then(fieldNames => {
            console.log(fieldNames)
            for (let field of fieldNames) {
                if (body[field]) {
                    fields[field] = body[field]
                }
            }
            console.log(fields)
            return fields
        })
}

module.exports = model