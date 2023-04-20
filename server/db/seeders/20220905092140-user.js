module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Александр',
      email: 'alex@alex',
      password: '123',
      img: 'https://ca.slack-edge.com/T03HY1ND24T-U03KFBT8CTE-8cb9fd17d890-512',
    },
    {
      name: 'Юля',
      email: 'julya@julya',
      password: '1234',
      img: 'https://ca.slack-edge.com/T03HY1ND24T-U03J55HG72A-d5497be835c8-512',
    },
    {
      name: 'Артем',
      email: 'artem@artem',
      password: '12345',
    },
    {
      name: 'Lena',
      email: 'l@l',
      password: '123456',
      img: 'https://4tololo.ru/sites/default/files/images/20161901175341.jpg',
    },
    {
      name: 'Павел',
      email: 'q@q',
      password: '1234568',
      img: 'https://bugaga.ru/uploads/posts/2020-03/1585556849_morf-2.jpg',
    },
    {
      name: 'Антон',
      email: 'w@w',
      password: '12345681',
      img: 'https://cs13.pikabu.ru/post_img/big/2019/06/11/12/1560285322120918274.jpg',
    },
    {
      name: 'Кристина',
      email: 'e@e',
      password: '12345681q',
      img: 'https://i.pinimg.com/474x/12/5c/e3/125ce3df4114dfa6490eecb1b4ca833b.jpg',
    },
    {
      name: 'Jon Snow',
      email: 'r@r',
      password: '12345681qq',
      img: 'https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png',
    },
    {
      name: 'Настя',
      email: 't@t',
      password: '12345681qqq',
      img: 'https://www.ok-magazine.ru/images/cache/2021/7/24/fit_795_547_false_crop_1703_957_0_64_q90_938361_ef59b396a853b67ce2d48da91.jpeg',
    },
    {
      name: 'Саша',
      email: 'y@y',
      password: '12345681qqqt',
      img: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5N5nHUGw2XA41-e-v-30OrWb-wtOCoRFbEgH6Bo_A18blvp3pKby-xJJ-b36vGdtR',
    },
    {
      name: 'Вова',
      email: 'u@u',
      password: '12345681qqqtw',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/cc7027dd-3b47-4fe1-92b6-0c633b7ce9b5/280x420',
    },
    {
      name: 'Нона',
      email: 'i@i',
      password: '12345681qqqtw3',
      img: 'https://thumbs.dfs.ivi.ru/storage15/contents/9/d/94b404c26b0dddaea11fadeaadec3b.jpg',
    },
    {
      name: 'Альбина',
      email: 'p@o',
      password: '12345681qqqtw3nb',
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/aa53725c-6099-4278-9bba-6d6bd2bc6998/360',
    },
    {
      name: 'Оля',
      email: 'p@i',
      password: '12345681qqqtw3wqb',
      img: 'https://www.film.ru/sites/default/files/people/1463033-2186544.jpg',
    },
    {
      name: 'Дима',
      email: 'p@ie',
      password: '12345681qqqtw3wqez',
      img: 'https://www.lenbaget.ru/wp-content/uploads/2021/11/10398-1000x830-1.jpg',
    },
    {
      name: 'Чарли',
      email: 'p@iwwv',
      password: '12345681qqqtw3wqew',
      img: 'http://img1.liveinternet.ru/images/attach/c/9/106/24/106024727_charliehunnamquitsfiftyshades.jpg',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
