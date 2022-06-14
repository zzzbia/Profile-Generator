const Engineer = require("../../lib/Engineer");

describe("Engineer", () => {
	it("Creates an engineer object", () => {
		const engineer = new Engineer("Jenny", "2", "email@email.com", "github");
		expect(engineer).toBeInstanceOf(Engineer);
	});
});

describe("getGithub()", () => {
	it(" gets the github username of the engineer", () => {
		const engineer = new Engineer("Jenny", "2", "email@email.com", "zzzbia");
		expect(engineer.getGithub()).toBe("zzzbia");
	});
});

describe("getRole()", () => {
	it("returns the role of the employee, engineer", () => {
		const engineer = new Engineer("Jenny", "2", "email@email.com", "zzzbia");
		expect(engineer.getRole()).toBe("Engineer");
	});
});
