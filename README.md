1. Для работы с проектом необходимо запустить БД в контейнере с помощью команды `docker-compose up`

2. Прототипирование схемы(внести изменения -> посмотреть как они будут работать) использует команду `db:push` - она синхронизирует ваши изменения схемы `schema.prisma` со схемой в dev БД

3. После прототипирования(если оно было) или сразу после изменений схемы `schema.prisma` необходимо записать изменения в миграционные файлы. Запустите команду `npm run migrate:dev`, которая создаст миграционный файл down.sql и предложит выбрать имя для миграции вверх, после чего создат соответствующий файл. Миграционный файл `down.sql` необходимо переместить в папку с новой миграцией вверх, которая будет расположена по пути `prisma/migrations/datestamp_name_of_your_migration`

4. Для синхронизации миграций от других разработчиков и локальной БД запустите команду `npm run migrate:up`. Она применит все существующие миграции.

5. Для применения миграций на проде используйте команду `npm run migrate:prod`.