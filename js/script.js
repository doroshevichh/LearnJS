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

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

console.log(personalMovieDB);

