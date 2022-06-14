const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");

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
		message: "What is your first name?",
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
		{
			type: "input",
			name: "officeNumber",
			message: "What is the manager's office number?",
		},
	]);

	if (!manager) {
		throw new Error("Manager is required");
	}

	team.push({ ...manager, role: "manager" });

	let notFinished = true;

	while (notFinished) {
		const employeee = await inquirer.prompt(questions);
		if (employeee.role === "No more team members") {
			notFinished = false;
			break;
		}
		team.push(employeee);
		const finished = await inquirer.prompt([
			{
				type: "list",
				name: "createMore",
				choices: ["Yes", "No"],
				message: "Would you like to create more employees?",
			},
		]);
		if (finished.createMore === "No") {
			notFinished = false;
		}
	}

	console.log(team);
}

init();
