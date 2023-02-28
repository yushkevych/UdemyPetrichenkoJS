"use strict";

const numberOfFilms = +prompt('How many movies did you watch?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of the last films?', ''),
      b = prompt('How would you rate it', ''),
      c = prompt('One of the last films?', ''),
      d = prompt('How would you rate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


/* 
let number = 5;

const leftBorderWidth = 1;


number = 10;
console.log(number);


let user = {
  name: "Vasya"
};

let id = Symbol("id");
user[id] = 5; 

console.log(user[id]);

const arr = [1, 2, 3]; */

// const result = confirm("Please confirm your choice");
// console.log(result);

/* const answer = prompt("Are you 18?", "18");
console.log(typeof(answer)); */
/* const answers = [];

answers[0] = prompt("What is your name?",'');
answers[1] = prompt("What is your surname?",'');
answers[2] = prompt("What is your age?",'');

document.write(answers);
 */





