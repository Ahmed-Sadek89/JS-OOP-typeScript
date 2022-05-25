class User { 
    // set private props
    #salary
    constructor (name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }
    // set private method
    #getSalary(){
        return parseInt(this.#salary) // call private props in class
    }
    getAllInfo() {
        return {
            name: this.name,
            age: this.age,
            salary: this.#getSalary() // call private method in class
        }
    }
}

const user1 = new User('amr', 22, '123 $');
console.log({...user1}); //{amr 22}
console.log(user1.getAllInfo()); //{amr 22 123}
