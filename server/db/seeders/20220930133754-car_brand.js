const brendTopArr = [
  'Audi', 'BMW', 'Honda', 'Lexus', 'Kia', 'Skoda', 'Chery',
  'Chevrolet', 'Citroen', 'Daewoo',
  'Ford', 'Geely',
  'Haval', 'Hyundai',
  'Infiniti', 'Jeep',
  'VAZ (Lada)', 'Land Rover',
  'Mazda', 'Mercedes-Benz',
  'Mitsubishi', 'Nissan', 'Opel',
  'Peugeot', 'Porsche', 'Renault',
  'Subaru', 'Suzuki',
  'Toyota', 'Volkswagen',
  'Volvo', 'GAZ', 'UAZ'];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Car_brands', brendTopArr.map((brand) => ({
      name: brand,
      logo: `/IMG/Logo/${brand}.png`,
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car_brands', null, {});
  },
};
