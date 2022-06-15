const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("Inialization", () => {
		it("should create a valid manager", () => {
			// Act
			const manager = new Manager("John", 0, "email@email.com", 1221);
			// Assert
			expect(manager).toBeInstanceOf(Manager);
		});

		it("should throw no office number error", () => {
			const err = new Error("Expected to receive a office number");
			const cb = () => {
				const manager = new Manager("John", 0, "email@email.com");
			};
			expect(cb).toThrow(err);
		});
	});
});
// Checking the role of the employee, the role should return as Manager
describe("getRole()", () => {
	it("should return the role of the employee as Manager", () => {
		const manager = new Manager("John", 0, "email@email.com", 1221);
		expect(manager.getRole()).toBe("Manager");
	});
});
