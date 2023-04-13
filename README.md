# Тестовое задание на позицию Junior backend developer

## Задание

Написать взаимодействие с api по http.
URL: https://randomuser.me/api/ 
Метод GET. 
В response data мы получаем массив объектов:

``` 
"results": [
  { 
    "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ethan",
        "last": "Ter Heide"
      },
      "location": {
        "street": {
          "number": 8805,
          "name": "Beukelsstraat"
        },
      "city": "Numansdorp",
      "state": "Noord-Brabant",
      "country": "Netherlands",
      "postcode": "8318 WX",
      "coordinates": {
        "latitude": "31.3807",
        "longitude": "-166.9320"
    }, …
]
```

Необходимо записать в базу postgresql все данные полученные в response data.
Архитектура БД на ваше усмотрение.


При реализации необходимо использовать следующие библиотеки:

Node.js: express, axios 

Golang: gin, http

## Запуск проекта

1. В корне создать файл .env и в нём определить переменную окружения: `DB_PASSWORD` (пароль).

2. Выполнить команду 
```
make run
```

3. Для остановки проекта выполните команду 
```
make stop
```