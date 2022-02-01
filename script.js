/* Задание на урок: 015

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* Задание на урок: 018

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres


Задание на урок: 024

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


"use strict";


let howManyFilms;
let lastFilm;
let raiting;
let favoriteGenre;



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { //1 018 024
        howManyFilms = prompt('Сколько фильмов вы уже посмотрели?');
        if (personalMovieDB.validationOfEnteredData(howManyFilms, personalMovieDB.start)) {
            if (isNaN(howManyFilms)) {
                console.log("Пожалуйста введите число");
                personalMovieDB.start();
            } else if (+howManyFilms < 0) {
                console.log("Введите положительное значение");
                personalMovieDB.start();
            } else {
                personalMovieDB.count = howManyFilms;
                personalMovieDB.askTheUserFilms(); 
            }
        }
    },
    askTheUserFilms: function() { //2 015 024
        lastFilm = prompt("Введите один из последних просмотренных фильмов?");
        if (personalMovieDB.validationOfEnteredData(lastFilm, personalMovieDB.askTheUserFilms)) {
            if (lastFilm.length >= 50) {
                console.log("Вы ввели слишком большое название фильма, введите покороче");
                personalMovieDB.askTheUserFilms();
            } else {
                personalMovieDB.askTheUserRaiting();
            }
        }
    },

    askTheUserRaiting: function() { //024
        raiting = prompt("На сколько его оцените от 0-10?");
        if (personalMovieDB.validationOfEnteredData(raiting, personalMovieDB.askTheUserRaiting)) {
            if (+raiting > 10 || +raiting < 0 || isNaN(raiting)) {
                console.log("Вы ввели не корректное значение");
                personalMovieDB.askTheUserRaiting();
            } else {
                personalMovieDB.movies[lastFilm] = raiting;
                       
            }
        }
    },

    classUser: function() { //3 015 024
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов.");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!!!");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function() {//2 018 024
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Проверьте настройки приватности");
        }
    },

    writeYourFavoriteGenres: function() { //3 018 024
        for (let i = 1; i <= 3;) {
            favoriteGenre = prompt(`Введите ваш любимый жанр под номером ${i}`);
            if (favoriteGenre) {
                personalMovieDB.genres.push(favoriteGenre);
                i++;
            }
        }
        personalMovieDB.outFavoriteGenres();
    },

    outFavoriteGenres: function() {//024
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр №${i+1} - ${item}`);
        });
    },

    toggleVisibleMyDB: function() { //2 024
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
            console.log("Настройки приватности включены");
        } else {
            personalMovieDB.privat = false;
            console.log("Настройки приватности выключены");
        }
    },

    validationOfEnteredData: function(data, nameFunction) { //024 для получения данных об отмене и пустом вводе
        if (data == null) {
            console.log("Вы нажали отмену ввода, пожалуйста введите данные");
            nameFunction();
        } else if (data == "") {
            console.log("Вы ввели пустую строку, пожалуйста введите данные");
            nameFunction();
        } else {
            return true;
        }
    }
};


personalMovieDB.start();
personalMovieDB.writeYourFavoriteGenres();
personalMovieDB.showMyDB();
personalMovieDB.classUser();
// personalMovieDB.toggleVisibleMyDB();

