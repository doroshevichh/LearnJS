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








 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start :function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }
        else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }
        else {
            console.log('error');
        }
    },

    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB : function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    
    writeYouGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                if (genre === '' || genre == null) {
                    console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};







