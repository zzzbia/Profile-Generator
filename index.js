const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const questions = [
	{
		type: "list",
		name: "role",
		message: "What is the team member's role?",
		choices: ["Engineer", "Employee", "Intern", "No more team members"],
	},
	{
		type: "input",
		name: "name",
		message: "What is their first name?",
	},
	{ type: "input", name: "email", message: "What is the team member's email?" },
	{ type: "input", name: "id", message: "What is your ID?" },
	{
		type: "input",
		name: "github",
		message: "What is their GitHub username?",
		when: (data) => {
			return data.role === "Engineer";
		},
	},
	{
		type: "input",
		name: "school",
		message: "What school did they attend?",
		when: (data) => {
			return data.role === "Intern";
		},
	},
];

async function init() {
	let team = [];

	const manager = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is the team manager's name?",
		},
		questions[2],
		questions[3],
		{
			type: "input",
			name: "officeNumber",
			message: "What is the manager's office number?",
		},
	]);

	if (!manager) {
		throw new Error("Manager is required");
	}

	team.push(
		new Manager(
			manager.name,
			manager.id,
			manager.email,
			parseInt(manager.officeNumber)
		)
	);

	let notFinished = true;

	while (notFinished) {
		const response = await inquirer.prompt(questions);
		if (response.role === "No more team members") {
			notFinished = false;
			break;
		}

		let employee;

		switch (response.role) {
			case "Engineer":
				employee = new Engineer(
					response.name,
					response.id,
					response.email,
					response.github
				);
				break;
			case "Intern":
				employee = new Intern(
					response.name,
					response.id,
					response.email,
					response.school
				);
				break;
			case "Employee":
				employee = new Employee(response.name, response.id, response.email);
				break;
		}

		team.push(employee);
		const finishPrompt = await inquirer.prompt([
			{
				type: "list",
				name: "createMore",
				choices: ["Yes", "No"],
				message: "Would you like to create more employees?",
			},
		]);
		if (finishPrompt.createMore === "No") {
			notFinished = false;
		}
	}
	// write out team into a json file called team.json in ./dist/team.json
	const writePath = "./dist/team.json";
	fs.writeFileSync(writePath, JSON.stringify(team));
}

init();
