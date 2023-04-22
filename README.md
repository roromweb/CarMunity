## CarMunity

Используемый стек: JavaScript, React, Redux, thunk, HTML, CSS, Node.JS, PostgreSQL, sequelize, sequelize-cli.

<img width="700px"  alt="Снимок4" src="https://github.com/roromweb/CarMunity/blob/develop/client/public/IMG/forreadme/intro.png">

Full stack веб приложение социальной сети для автомобилистов CarMunity

Реализованный функционал:

- выбор сообщества по марке и модели авто.

 <img width="700px"  alt="Снимок3" src="https://github.com/roromweb/CarMunity/blob/develop/client/public/IMG/forreadme/2023--03--11.png">

- поиск по постам, добавление постов, добавление комментариев к постам

 <img width="700px"  alt="Снимок2" src="https://github.com/roromweb/CarMunity/blob/develop/client/public/IMG/forreadme/2023--03--10..png">

- лайки к постам, добавление поста в избранное
- просмотр статей и фотографий сообщества

 <img width="700px"  alt="Снимок1" src="https://github.com/roromweb/CarMunity/blob/develop/client/public/IMG/forreadme/2023--03--09.png">

- авторизация/регистрация с использованием bcrypt.
- подписки на сообщества.

## Documentation

Для запуска на локальной машине небходимо:

1. Проинициализовать папки \client и \server
2. Создать пустую БД в PostgreSQL
3. В папке \server создать файл .env в нем указать параметры доступа к вашей БД:
   DB_NAME=example
   DB_USER=example
   DB_PASS=123
4. В папке \client создать файл .env и в нем указать актуальный localhost:
   REACT_APP_BASEURL
5. Накатить Sequelize сиды и миграции, через команды:
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
6. Выполнить команду npm start в папках \client и \server
