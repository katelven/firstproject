let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
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

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
         personalMovieDB.genres.push(genre);
    }   
}
writeYourGenres();

function remenberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const questionOne = prompt('Один из последних просмотренных фильмов?', '');
        const questionTwo = +prompt('На сколько оцените его?', '');
        personalMovieDB.movies[questionOne] = questionTwo;
        if(questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
            personalMovieDB.movies[questionOne] = questionTwo; 
            console.log('done');
        } else {
            i--;
            console.log('err');
        }
    }
}
remenberMyFilms();


function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Вы посмотрели довольно мало фильмов') 
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы знаток фильмов') 
    } else if(personalMovieDB.count >= 30) {
        console.log('Вы спец')
    } else {
        console.log('Ошибка')
    }
}
detectPersonalLevel();