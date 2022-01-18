/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

*/

"use strict";


let numberOfFilms;
let lastFilm;
let raiting;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



//2 015
function askTheUser() {
    lastFilm = prompt("Один из последних просмотренных фильмов?");
    raiting = prompt("На сколько его оцените jn 0-9?");
    if (lastFilm && raiting && lastFilm.length < 50 && raiting.length < 2) {
        personalMovieDB.movies[lastFilm] = raiting;
    } else {
        askTheUser();
    }
    
}

//3 015
function classUser() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!!!");
    } else {
        console.log("Произошла ошибка");
    }
}

//1 018
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?');
    if (!numberOfFilms) {
        start();
    }
}


//2 018
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Проверьте настройки приватности");
    }
}

//3 018
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}
askTheUser();
askTheUser();
classUser();


writeYourGenres();
showMyDB();