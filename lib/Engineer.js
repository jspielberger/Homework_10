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

    getTemplate(){
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Engineer;