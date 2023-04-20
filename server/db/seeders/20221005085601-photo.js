module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Photos',
      [{
        img: '/IMG/Photo/Honda-CR-Z-1.jpeg',
        car_model_id: '61',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-2.jpeg',
        car_model_id: '61',
        user_id: '3',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-3.jpeg',
        car_model_id: '61',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-4.jpeg',
        car_model_id: '61',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-5.jpeg',
        car_model_id: '61',
        user_id: '3',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-6.jpeg',
        car_model_id: '61',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-7.jpeg',
        car_model_id: '61',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-8.jpeg',
        car_model_id: '61',
        user_id: '3',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-9.jpeg',
        car_model_id: '61',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-10.jpeg',
        car_model_id: '61',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-11.jpeg',
        car_model_id: '61',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Honda-CR-Z-12.jpeg',
        car_model_id: '61',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-1.jpeg',
        car_model_id: '146',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-2.jpeg',
        car_model_id: '146',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-3.jpeg',
        car_model_id: '146',
        user_id: '3',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-4.jpeg',
        car_model_id: '146',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-5.jpeg',
        car_model_id: '146',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-6.jpeg',
        car_model_id: '146',
        user_id: '3',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-7.jpeg',
        car_model_id: '146',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-8.jpeg',
        car_model_id: '146',
        user_id: '2',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-9.jpeg',
        car_model_id: '146',
        user_id: '1',
      },
      {
        img: '/IMG/Photo/Skoda Octavia-10.jpeg',
        car_model_id: '146',
        user_id: '3',
      },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
