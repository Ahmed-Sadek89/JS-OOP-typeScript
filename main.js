class User {
    constructor (name, age){
        this.n = name;
        this.age = age;
    }
    sayHello(){
        return `hello ${this.n}, your age is ${this.age}`
    }
}

class Admin extends User{
    constructor (name, age, permissions) {
        super(name, age);
        this.p = permissions;
    }
    getPermissions() {
        return this.p
    }
}


const user1 = new User('ahmed', 20)
console.log({...user1});  //{name: ahmed, age: 25, isMarried: true}
console.log(user1.sayHello()); 

console.log("###########");

const admin1 = new Admin('amr', 30, 'frontEnd');
// here, I have all authority to access all properties and methods in Admin & User 
console.log({...admin1});
console.log(admin1.n);
console.log(admin1.sayHello());
console.log(admin1.getPermissions());