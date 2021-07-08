
exports.up = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.int('vin', 128);
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('vin');
    })
};
