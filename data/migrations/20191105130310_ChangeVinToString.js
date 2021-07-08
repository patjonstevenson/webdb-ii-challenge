
exports.up = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('vin');
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.int('vin');
    });
};
