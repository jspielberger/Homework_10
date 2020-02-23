class Employee {
    constructor(name, id, title) {
        this.id = id;
        this.name = name;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;

    }
    getEmail() {
        return this.email;

    }
    getRole() {
        return "Employee";

    }

}
module.exports = Employee;