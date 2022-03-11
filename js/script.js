"use strict";

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

// function learnJS (lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// learnJS('Русский', function() {
//     console.log('Все работает');
// })

// const arr = [1, 2, 3, 6, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
//     return a - b; 
// }

// arr.forEach(function(item, i, arr) {
//     console.llog(`${i}: ${item} внутри массива ${arr}`);
// })

// // arr.pop();
// arr.push(10);
// console.log(arr);


// const str = prompt("", "");
// const products = str.split(", "); 
// console.log(products.join("; "));

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// // newNumbers.a = 10;
// // newNumbers.c.y = 20;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e:20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[2] = 'agdrough1';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'winamp', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'bloger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];
 
// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// console.log(newObj);

// const soldier = {
//     healht:400,
//     armor: 100,
//     sayhello: function () {
//         console.log("Hello");
//     }
// };

// Object.setPrototypeOf(jonh, soldier);         //новый метод
// const jonh = Object.create(soldier);          //новый метод
// jonh.sayhello();

// jonh.__proto__ = soldier;                  //устаревший метод
// console.log(soldier.sayhello);
// jonh.sayhello();








 
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // 2 часть практики

// function rememberMyFilms () {
//     for(let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов", ""),
//               b = prompt("Как вы его оцените?", "");
    
//         personalMovieDB.movies[a] = b;
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error'); 
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel () {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     }
//     else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     }
//     else if (personalMovieDB.count === ''){
//         console.log('ты дурак');
//     }
//     else {
//         console.log('error');
//     }
// }

// detectPersonalLevel();

// function showMyDb (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDb(personalMovieDB.privat);

// function writeYouGenres () {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYouGenres();




