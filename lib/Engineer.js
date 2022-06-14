const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		if (github === undefined || typeof github !== "string") {
			throw new Error("Expected to receive a github username");
		}
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return this.role;
	}
}

module.exports = Engineer;
