// static method and properties cannot be accessable from object
// if you call static prop from object it return the same value in class but without updating its value 
// static method and properties can be accessable from class Only
// for change or call its value => 
//      ClassName.staticProp || ClassName.staticMethod(params if needed)

class User {
    static userNum = 0
    constructor (name, age){
        this.n = name;
        this.age = age;
        this.isMarried = this.age > 18 ? true : false;
        this.userNum = User.userNum++;
    }
    sayHello(){
        return `hello ${this.n}, your age is ${this.age}`
    }
    static updateAge(age){
        this.age = age + 10
        return this.age
    }
    changeUser(name, age){
        this.n = name;
        this.age = User.updateAge(age);
        this.isMarried = this.age > 18 ? true : false;
        return `user ${this.n} has changed`
    }
}


const user1 = new User('ahmed', 20)
console.log({...user1});  //{name: ahmed, age: 25, isMarried: true}
//console.log(user1.sayHello); // return native function
console.log(user1.sayHello()); 
console.log(user1.changeUser('aya', 16)); 
console.log({...user1});  //{name: aya, age: 26, isMarried: true}

console.log('########### static ###########');

const user2 = new User('ahmed', 20)
const user3 = new User('ahmed', 20)


console.log(user1.userNum); // it return the same value = 0 without updating
console.log(User.userNum); // it return the updating value = 3
//console.log(user1.updateAge(10)); // return error
console.log(User.updateAge(10)); // return (10 + 10)
