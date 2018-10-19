exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', table => {
    table.increments()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('portraitUrl').notNullable().defaultTo('http://placehold.it/600x900')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors')
};
