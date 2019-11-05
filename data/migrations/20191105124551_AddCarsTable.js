
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        // Required
        table.increments();
        table.int('vin').notNullable();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.int('mileage').notNullable();

        // Not required
        table.string('transmission', 255);
        table.string('title', 128);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
