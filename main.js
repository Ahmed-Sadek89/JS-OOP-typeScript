class User {
    constructor (name, age){
        this.n = name;
        this.age = age;
        this.isMarried = this.age > 18 ? true : false;
    }
    sayHello(){
        return `hello ${this.n}, your age is ${this.age}`
    }
}


const user1 = new User('ahmed', 25)
console.log({...user1});  //{name: ahmed, age: 25, isMarried: true}
console.log(user1.sayHello); // return native function
console.log(user1.sayHello()); 

const user2 = new User('amr', 24)
console.log({...user2});  //{name: ahmed, age: 25, isMarried: true}
console.log(user2.sayHello); // return native function
console.log(user2.sayHello()); 

const user3 = new User('aya', 18)
console.log({...user3});  //{name: ahmed, age: 25, isMarried: true}
console.log(user3.sayHello); // return native function
console.log(user3.sayHello());