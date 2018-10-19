const knex = require('../db/knex')
const model = {
    getAll() {
        return knex('books')
            .then(books => books)
            .catch(err => Promise.reject(err))
    },
    getOne(id) {
        return knex('books')
            .where('id', id)
            .then(book => book[0])
            .catch(err => Promise.reject(err))
    },
    create(body) {
        return parseBody(body)
            .then(fields => {
                return knex('books')
                    .insert(fields)
                    .returning('*')
            })
            .then(book => book[0])
            .catch(err => Promise.reject(err))
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

    },
    delete(id) {
        return knex('books')
            .where('id', id)
            .del()
            .returning('*')
            .then(book => book[0])
            .catch(err => Promise.reject(err))
    }
}
function parseBody(body) {
    // Never update ID or hard-code ID on creation, remove from body if it exists 
    delete body.id
    let fields = {}
    // Get column names from schema, only handle field names that exist in the DB
    return knex.table('books').columnInfo()
        .then(columns => Object.keys(columns))
        .then(fieldNames => {
            for (let field in fieldNames) {
                if (body[field]) {
                    fields[field] = body[field]
                }
            }
            return fields
        })
}

module.exports = model