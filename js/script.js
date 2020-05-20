'use strict';


let number = 20;
const leftBorder = 10;

number = 5;
console.log(number);


/*a = 14;
console.log(a);*/

let nino;
console.log(nino);

const mimo = "mini";
console.log(mimo);

//console.log(somathing);

const bool = false;
console.log(bool);


const Pers = {
    name: "Arman",
    age: 10,
    isMarried: false

};
console.log(Pers.isMarried);

let arr = ['BMW', 6, 'Saab', "Volvo"];
console.log(arr[1]);

//alert("Hello");

/*const resalt = confirm("are you here?");
console.log(resalt);

const answer = prompt("Are you 18?", "18");
console.log(typeof(answer));*/

const user10 = ("Ivan");
console.log(`Hello, ${user10}`);

let incr = 10,
    decr = 20;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(10 + 10);

console.log(2 * 4 === "8");

console.log(2 + 2 * 2 != 8);

/*let numberOfFilms = prompt("How many films did you watch?", " ");
console.log(numberOfFilms);

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privet: false
};

const a = prompt("One of movies that you watch?", ""),
      b = prompt("How do you like it?", ""),
      c = prompt("One of movies that you watch?", ""),
      d = prompt("How do you like it?", "");

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log (personalMoviDB);*/

if (4 == 9) {
    console.log("Hello Miki");
} else {
    console.log("Minion");
}

let num = 80;

if (num > 100) {
    console.log("Mini cuper");
} else if (num < 200) {
    console.log("biblio");
} else {
    console.log(20);
}

//(num > 25) ? console.log("Bomb"): console.log("Mimo");

let kiko = 200;

switch (kiko) {
    case 30:
        console.log("Hello Gogo");
        break;
    case 25:
        console.log("mini");
        break;
    case 25:
        console.log("mini");
        break;
    default:
        console.log("Great !!!");
}



/*do {
    console.log(num2);
    num2++;
}
while (num2 <= 55);*/

let num2 = 40;

for (let i = 1; i < 8; i++) {
    if(i==4){continue;}
    console.log(i);
}