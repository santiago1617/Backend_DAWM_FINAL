'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 0; i <3; i++) {
      await queryInterface.bulkInsert('Personas', [{
        user:'persona'+i,
        password:'persona'+i,
        rol:"1"
      }], {});
   }
   for (let i = 0; i <2; i++) {
    await queryInterface.bulkInsert('Personas', [{
      user:'admin'+i,
      password:'admin'+i,
      rol:"2"
    }], {});
 }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Personas', null, {});
    
  }
};
