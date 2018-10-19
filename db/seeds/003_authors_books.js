
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('authors_books').del()
        .then(function () {
            // Inserts seed entries
            return knex('authors_books').insert([
                { author_id: 1, book_id: 1 },
                { author_id: 2, book_id: 1 },
                { author_id: 3, book_id: 2 },
                { author_id: 1, book_id: 2 },
                { author_id: 3, book_id: 3 },
            ])
        })
}
