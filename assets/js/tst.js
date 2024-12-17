class Person {


    //Kan kun blive brugt i scopet
    // #privateAbility;
    // #State

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);

    }
}

class Professional extends Person {
    constructor(name, age, profession) {

        super(name, age);
        this.occupation = profession;
    }

    sayOccupation() {
        console.log(`Hello, my name is ${this.name}, and I am a ${this.occupation}`);

    }
}

class Hobbyist extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }

    sayHobby(){
        console.log(`Hello, my name is ${this.name}, and my hobby is ${this.hobby}!`);
        
    }
}

class Drinker extends Person {
    constructor(name, age, drink) {
        super(name, age);
        this.drink = drink;
    }

    sayDrink() {
        console.log(`Hi, I'm ${this.name}. as a ${this.age} year old, am I allowed to drink ${this.drink}?`);
        
    }
}

class Gamer extends Person {
    constructor(name, age, game){
        super(name,age);
        this.game = game;
    }

    sayGame() {
        console.log(`Yo! My name is ${this.name}, and every day, I play this game called ${this.game}, so that I can be the next Ninja...`);
        
    }
}


class Ork extends Person {
    constructor (name,age,weapon){
        super(name, age);
        this.weapon = weapon;
    }

    sayHi() {
        console.log(`whnduiwdh ${this.name}, owdyodwjo diuwh ${this.age}`);
    }

    sayWeapon(){
        console.log(`hdhuwid wdhuwih dwo ${this.weapon}`);
        
    }
}

let person = new Person('Mathias', 30);
let doctor = new Professional('Ib', 28, 'Doctor');
let dogTrainer = new Hobbyist('Lone', 41, 'to train dogs');
let energyDrinker = new Drinker('Bob', 13, 'Monster energy drink');
let coolGamer = new Gamer('Alex', 21, 'Fortnite');
let evilOrk = new Ork('Greg', 9, 'Mace');


person.sayHi();
doctor.sayOccupation();

console.log('------------------------3 new subclasses------------------------');

dogTrainer.sayHobby();
energyDrinker.sayDrink();
coolGamer.sayGame();

console.log('------------------------Polymorphism------------------------');

evilOrk.sayHi();
evilOrk.sayWeapon();



