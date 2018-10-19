const knex = require('../db/knex')
const model = {
    getAll() {
        return knex('authors')
            .then(authors => authors)
            .catch(err => Promise.reject(err))
    },
    getOneAuthor(id) {
        return knex('authors')
            .where('id', id)
            .then(author => author[0])
            .catch(err => Promise.reject(err))
    },
    addAuthor(body) {
        return parseBody(body)
            .then(fields => {
                return knex('authors')
                    .insert(fields)
                    .returning('*')
            })
            .then(author => author[0])
            .catch(err => Promise.reject(err))
    },
    updateAuthor(id, body) {
        return parseBody(body)
            .then(fields => {
                return knex('authors')
                    .where('id', id)
                    .update(fields)
                    .returning('*')
            })
            .then(author => author[0])
            .catch(err => Promise.reject(err))

    },
    deleteAuthor(id) {
        return knex('authors')
            .where('id', id)
            .del()
            .returning('*')
            .then(author => author[0])
            .catch(err => Promise.reject(err))
    }
}
function parseBody(body) {
    // Never update ID or hard-code ID on creation, remove from body if it exists
    delete body.id
    let fields = {}
    // Get column names from schema, only handle field names that exist in the DB
    return knex('authors').columnInfo()
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
