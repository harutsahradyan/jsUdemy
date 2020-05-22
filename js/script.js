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



//JS Նախագիծ, Udemy.com

/*ստորև start() ֆունկցիան կոդը ցույց է տալիս, որ եթե +prompt դաշտը դատարկ է մնացե կամ օգտա․ 
սեղմել է Չեղարկել կամ ոչ թիվ ապա "How many films did you watch?" արտահայտությունը անընդհատ կրկնի։*/

/*let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you watch?", " ");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?", " ");
    }
}

start();

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privet: false
};



function rememberMyFilms() {
    for (let ii = 0; ii < 2; ii++) {
        const a = prompt("One of movies that you watch?", ""),
            b = prompt("How do you like it?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMoviDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            ii--;
        }

    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMoviDB.count < 10) {
        console.log("You watched very few fom.");
    } else if (personalMoviDB.count >= 10 && personalMoviDB.count < 30) {
        console.log("You are a classic watcher.");
    } else if (personalMoviDB.count >= 30) {
        console.log("you are a movie fan");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviDB);
    }
}

showMyDB(personalMoviDB.privet);

//Այս ֆունկցիան հնարավոր․ է տալիս 3 անգամ 
//հարցնելով ճշտել ֆիլմի սիրված ժանրերը, ինդեքսավորումը 
//սկսում նեք 1-ից քանի որ օգտատիրոջ համար 0 նշանակ․ չունի, 
//բայց personalMoviDB.geners-ում տողերը լցնելու համար անում ենք
//pp-1 որպեսզի array-ում ճիշտ ինդեքսավորում ստանանք՝ 0-ով սկսվող։


function writeYourGenres() {
    for (let pp = 1; pp <= 3; pp++) {
        personalMoviDB.geners[pp - 1] = prompt(`Ваш любимый жанр под номером ${pp}`);
    }
}
writeYourGenres();*/

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
    if (i == 4) {
        continue;
    }
    console.log(i);
}

function forName(text) {
    console.log(text);
}

forName("Hello");

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 8));
console.log(calc(5, 10));

let hello;

hello = () => {
    return "World";
};

let str2 = "Test";
console.log(str2.length);
console.log(str2.toLocaleUpperCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

console.log(fruit.slice(5));

const num25 = 12.2;
console.log(Math.round(num25));

/*const staffLife = {
    age: {},
    name: {},
    nationality:[],
    year: true
};

function checkStatus () {
    for(let gg=1; gg<=4; gg++) {
        staffLife.nationality[gg-1] = prompt(`Your nationality ${gg}`);
    }
}
console.log(staffLife);

checkStatus ();*/

//Callback function example
function learnJs(lang, callback) {
    console.log(`I am lerning ${lang}`);
    callback();
}

function done() {
    console.log("I passed this lesson !");
}

learnJs('JavaScript', done);

//objects for/in and for/of statements

const options = {
    name: "test",
    width: 1024,
    height: 1000,
    colors: {
        border: 'black',
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");
    }
};

/*for(let key in options){
    console.log(`Option ${key} has value ${options[key]}`);
}*/

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let k in options[key]) {
            console.log(`Option ${k} has value ${options[key][k]}`);
        }
    } else {
        console.log(`Option ${key} has value ${options[key]}`);
    }
}

//key-ն դա options-ի property-ներն են
//k-ն այս դեպքում colors:-ի մեջի property-ներն են

//object- մեթոդներ
console.log(Object.keys(options));

//Object.keys()- js-ի կողմից արդեն սահմանաված մեթոդ է, սակայն հնարավոր
// է ինքնուրույն ստեղծել մեթոդներ։

options.makeTest();


//деструктуризация объектов (ES6)

const{border, bg} = options.colors;
console.log(border);



