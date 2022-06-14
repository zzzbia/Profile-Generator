const Engineer = require("../lib/Engineer");

describe("Engineer tests", () => {
	describe("Inialization", () => {
		it("should create a valid engineer", () => {
			// Act
			const engineer = new Engineer("Jenny", 1, "email@email.com", "github");
			// Assert
			expect(engineer).toBeInstanceOf(Engineer);
		});

		it("should throw invalid github username error", () => {
			// engineer extends employee, so invalid name, id, email are covered in the employee tests
			const err = new Error("Expected to receive a github username");
			const cb = () => {
				const engineer = new Engineer("Jenny", 2, "email@email.com");
			};
			expect(cb).toThrow(err);
		});
	});
});

describe("getGithub()", () => {
	it("should retrieve github username, zzzbia", () => {
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
