
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, firstName: 'Stephen', lastName: 'King'},
        {id: 2, firstName: 'Roald', lastName: 'Dahl'},
        {id: 3, firstName: 'J.K.', lastName:'Rowling'}
      ]);
    })
    .then( () => {
      return knex.raw(
        `SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));`)
    })
};
