/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?');
let lastFilm;
let raiting;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



//2
function askTheUser() {
    lastFilm = prompt("Один из последних просмотренных фильмов?");
    raiting = prompt("На сколько его оцените?");
    if (lastFilm && raiting && lastFilm.length < 50 && raiting.length < 50) {
        personalMovieDB.movies[lastFilm] = raiting;
    } else {
        askTheUser();
    }
    
}

//3
function classUser() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

askTheUser();
askTheUser();
classUser();



console.log(personalMovieDB);