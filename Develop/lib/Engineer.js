const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.role = "Engineer";
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return this.role;
	}
}

const Rabia = new Engineer("Rabia", 1, "email@email", "zzzbia");
console.log(Rabia);

console.log(Rabia.getRole());
console.log(Rabia.getGithub());

module.exports = Engineer;
