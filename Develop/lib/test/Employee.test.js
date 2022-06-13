const Employee = require("../../lib/Employee");

describe("Employee", () => {
	it("Creates an employee object", () => {
		const employee = new Employee("Jenny", 1, "email@email.com");
		expect(employee).toBeInstanceOf(Employee);
	});
});

describe("getName()", () => {
	it("returns the name of the employee", () => {
		const employee = new Employee("Jenny", 1, "email@email.com");

		expect(employee.getName()).toBe("Jenny");
	});
});

describe("getId()", () => {
	it("returns the id of the employee", () => {
		const employee = new Employee("Jenny", 1, "email@email.com");

		expect(employee.getId()).toBe(1);
	});
});

describe("getEmail()", () => {
	it("returns the email of the employee", () => {
		const employee = new Employee("Jenny", 1, "email@email.com");

		expect(employee.getEmail()).toBe("email@email.com");
	});
});

describe("getRole()", () => {
	it("returns the role of the employee", () => {
		const employee = new Employee("Jenny", 1, "email@email.com");
		expect(employee.getRole()).toBe("Employee");
	});
});
