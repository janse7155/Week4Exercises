//Exercise 1
console.groupCollapsed("Exercise 1");
function exerciseOne() {
    console.log(this);
}

const one = {
    first: "e ",
    second: "d",

    uno: function uno() {
        console.log(this);
        console.log(this.first + this.second)
    },

    un: () => {
        console.log(this);
    }
    
}
exerciseOne();
one.uno();
one.un();


console.groupEnd();
//Exercise 2
console.groupCollapsed("Exercise 2");

class person {
        name = "Tav";
        age = 24;

        greet(greeting) {
            console.log(`${greeting} ${this.name}`);
        }
}

const guardian = new person("Guardian", 24);
guardian.greet("Hello");
const player = new person("Player", 25);
player.greet("Good Morning");



console.groupEnd();
//Exercise 3
console.groupCollapsed("Exercise 3");

class person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        greet(greeting) {
            console.log(`${greeting} ${this.name}`);
        }
}

const laezel = new person1("Lae'zel", 26);
laezel.greet("Hello");
const shadowheart = new person1("Shadowheart", 27);
shadowheart.greet("Good Morning");




console.groupEnd();
//Exercise 4
console.groupCollapsed("Exercise 4");

class person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        greet(greeting) {
            console.log(`${greeting} ${this.name}`);
        }
        info() {
            console.log("This is a person");
        }
    //info();
}

const gale = new person2("Gale", 28);
gale.greet("Hello");
const astarion = new person2("Astarion", 29);
astarion.greet("Good Morning");
astarion.info();

console.log("You can't call a method in the class because when you call the class to make a new object of it, it tries to run a new method every time as a part of the object construction, which causes an error")

console.groupEnd();
//Exercise 5
console.groupCollapsed("Exercise 5");

class person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        
        greet(greeting) {
            console.log(`${greeting} ${this.name}`);
        }

        get age() {
            return age;
        }
        set age(age) {
            if (age <= 0) {
                console.log("Age cannot be a negative number.");
            } else {
                console.log(age);
            }
        }
}

const wyll = new person3("Wyll", -30);
wyll.greet("Hello");
const karlach = new person3("Karlach", 31);
karlach.greet("Good Morning");




console.groupEnd();
//Exercise 6
console.groupCollapsed("Exercise 6");




console.groupEnd();
//Exercise 7
console.groupCollapsed("Exercise 7");

class student {
    constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    }
    
}

const halsin = new student('Halsin', );

console.groupEnd();

