module.exports = {
    development: {
        client: `pg`,
        connection: `postgres://localhost/galvanize_books_dev`,
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
}
