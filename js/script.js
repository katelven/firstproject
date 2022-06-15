
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    remenberMyFilms: () => {
        for(let i = 0; i < 2; i++) {
            const questionOne = prompt('Один из последних просмотренных фильмов?', '').trim();
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
    },
    detectPersonalLevel: () => {
        if(personalMovieDB.count < 10) {
            console.log('Вы посмотрели довольно мало фильмов') 
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы знаток фильмов') 
        } else if(personalMovieDB.count >= 30) {
            console.log('Вы спец')
        } else {
            console.log('Ошибка')
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for(let i = 1; i <= 3; i++) {
            let genre =  prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i +1} - это ${item}`)
        });   
    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },


};




