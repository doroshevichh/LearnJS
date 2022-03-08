"use ctrict";

// const result = confirm("Are you okey?");
// console.log(result);

// const answer = -prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("Ваше имя?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = prompt("Ваш возраст?", "");

// console.log(answers);

// const user = "Olya";

// alert(`Привет, ${user}`); 

// const a = true,
//       b = false;

// console.log(a && b);

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
     b = prompt("Как вы его оцените?", ""),
     c = prompt("Один из последних просмотренных фильмов", ""),
     d = prompt("Как вы его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);