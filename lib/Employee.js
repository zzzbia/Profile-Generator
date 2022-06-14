class Employee {
	constructor(name, id, email, role = "Employee") {
		if (name === undefined || id === undefined || email === undefined) {
			throw new Error(
				"Employee must be intialized with a name an id and email"
			);
		}

		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return this.role;
	}
}
module.exports = Employee;
