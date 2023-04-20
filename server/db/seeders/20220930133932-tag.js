const TagListArr = ['масло',
  'колодки', 'обслуживание', 'тосол', 'охлаждайка',
  'диски', 'стекло', 'люк', 'дизель', 'саляра',
  'фильтр', 'топливо', 'бензин', 'ручка', 'РУУК',
  'тонировка', 'магнитолла', 'лобовое', 'привод',
  'кондиционер', 'подвеска', 'дверь', 'капот',
  'амортизаторы', 'ГРМ', 'генератор', 'глушак',
  'ТО', 'ремонт', 'замена', 'замок', 'прокладка',
  'компрессор', 'рычаг', 'сайлентблок', 'шайба',
  'сальник', 'тяга', 'наконечник', 'СТО', 'гайка',
  'ремень', 'подушка', 'свеча', 'покрышки', 'сход',
  'форсунка', 'вал', 'кардан', 'шины', 'выхлоп',
  'ШРУС', 'трипоид', 'телевизор', 'пороги', 'болт',
  'вентилятор', 'радиатор', 'антифриз', 'подрамник',
  'фреон', 'тормозуха', 'шланг', 'обвес', 'граната',
  'провод', 'кабель', 'вёсла', 'резина', 'кулиса', 'AIRBAG',
  'насос', 'помпа', 'ГУР', 'ЭУР', 'тюнинг', 'серьга',
  'бак', 'бачек', 'стеклоочиститель', 'полуось', 'незамерзайка',
  'дворники', 'щетки', 'поворотник', 'глушитель', 'панель',
  'фара', 'фонарь', 'руль', 'прошивка', 'чип', 'ручник',
  'переключатель', 'кнопка', 'селектор', 'редуктор', 'кресло',
  'коробка', 'АКПП', 'РКПП', 'вариатор', 'мост', 'расширитель',
  'ЭБУ', 'мозги', 'пневма', 'посадка', 'раздатка', 'бампер',
  'JDM', 'гудок', 'багажник', 'бокс', 'диф', 'развал',
  'прицеп', 'фаркоп', 'колпак', 'дифференциал'];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', TagListArr.map((tags) => ({
      name: tags,
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};