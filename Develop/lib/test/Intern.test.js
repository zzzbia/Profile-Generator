const Intern = require("../../lib/Intern");

describe("Intern", () => {
	it("Creates a new Intern Object", () => {
		const intern = new Intern(
			"Jenny",
			"2",
			"email@email.com",
			"University of Toronto"
		);
		expect(intern).toBeInstanceOf(Intern);
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
	});
	expect(intern.getSchool()).toBe("University of Toronto");
});
