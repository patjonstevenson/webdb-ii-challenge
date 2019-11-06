
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'ADKJHF45987EFG324',
          make: 'Volvo',
          model: 'XC90',
          mileage: 180000
        },
        {
          vin: 'GFDFGF45987EF4353',
          make: 'Audi',
          model: 'TT',
          mileage: 200000
        },
        {
          vin: '23234JH32JHZX9ZX9',
          make: 'Chevrolet',
          model: 'Colorado',
          mileage: 80000
        },
      ]);
    });
};
