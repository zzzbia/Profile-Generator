const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		if (school === undefined || typeof school !== "string") {
			throw new Error("Interns must be intialized with a school property");
		}
		super(name, id, email, "Intern");
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
	getRole() {
		return this.Intern;
	}
}
module.exports = Intern;
