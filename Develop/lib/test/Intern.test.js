const Intern = require("../../lib/Intern");

describe("Intern", () => {
	describe("Intialization", () => {
		it("should create a new Intern object", () => {
			//Act
			const intern = new Intern(
				"Jenny",
				"2",
				"email@email.com",
				"University of Toronto"
			);
			// Assert
			expect(intern).toBeInstanceOf(Intern);
		});

		it("should throw an error if intern does not have a school property", () => {
			const err = new Error(
				"Interns must be intialized with a school property"
			);
			const cb = () => {
				const intern = new Intern("Jenny", "2", "email@email.com");
			};
			expect(cb).toThrow(err);
		});
	});
});

describe("getSchool", () => {
	it("returns the school that the intern is from", () => {
		const intern = new Intern(
			"Jenny",
			"2",
			"email@email.com",
			"University of Toronto"
		);
		expect(intern.getSchool()).toBe("University of Toronto");
	});
});
