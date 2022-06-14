const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		if (officeNumber === undefined || typeof officeNumber !== "number") {
			throw new Error("Expected to receive a office number");
		}
		super(name, id, email, "Manager");
		this.officeNumber = officeNumber;
	}
	getOfficeNumber() {
		return this.officeNumber;
	}
	getRole() {
		return "Manager";
	}
}
module.exports = Manager;
