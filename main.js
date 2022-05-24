class User {
    constructor (name, age){
        this.n = name;
        this.age = age
    }
}


const user1 = new User('ahmed', 25)
console.log({...user1});

const user2 = new User('amr', 24)
console.log({...user2});

const user3 = new User('aya', 18)
console.log({...user3});