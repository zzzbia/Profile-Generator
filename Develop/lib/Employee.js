class Employee {
	constructor(name, id, email, role = "Employee") {
		if (name === undefined || id === undefined || email === undefined) {
			throw new Error(
				"Employee must be intialized with a name an id and email"
			);
		}
		// if ("hussam" && undefined && "hussam@mfds.coj") => true
		// if ("hussam" or 21312 or undefined) => false

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
