exports.up = function(knex) {
    return knex.schema
        .createTable('urls', (table) => {
            table.increments('id');
            table.string('original', 512).notNullable().defaultTo("");
            table.string('new', 512).notNullable().defaultTo("");
            table.integer('redirects').notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('urls');
};