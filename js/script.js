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

// интерполяция
// const user = "Olya";

// alert(`Привет, ${user}`); 

// const a = true,
//       b = false;

// console.log(a && b);

// function showFirstMessage () {
//     console.log("Hello world");
// }

// showFirstMessage();

// const b = "Hello world";

// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.indexOf('w'));
// console.log(b.slice(-4, -1));
// console.log(b.substring(1, 7));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 2 часть практики

function rememberMyFilms () {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
              b = prompt("Как вы его оцените?", "");
    
        personalMovieDB.movies[a] = b;
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error'); 
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    }
    else if (personalMovieDB.count === ''){
        console.log('ты дурак');
    }
    else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYouGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYouGenres();




