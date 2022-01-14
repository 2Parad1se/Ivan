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



function askTheUser() {
    lastFilm = prompt("Один из последних просмотренных фильмов?");
    raiting = prompt("На сколько его оцените?");
    personalMovieDB.movies[lastFilm] = raiting;
}

askTheUser();
askTheUser();

console.log(personalMovieDB);