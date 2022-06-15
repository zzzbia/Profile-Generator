const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("Inialization", () => {
		//Positive Test
		it("should creates an employee object", () => {
			// Act
			const employee = new Employee("Jenny", 1, "email@email.com");
			// Assert
			expect(employee).toBeInstanceOf(Employee);
		});
		// Negative Test
		it("should throw an error if not provided a with a 'name' an 'id' and 'email'", () => {
			//Arrange
			const cb = () => new Employee();
			const err = new Error(
				"Employee must be intialized with a name an id and email"
			);
			//Assert
			expect(cb).toThrow(err);
		});
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
