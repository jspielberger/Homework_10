const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(id, email, name)
        this.github = github;
    }
    // Overridden to return 'Engineer'
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;