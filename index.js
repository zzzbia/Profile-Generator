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
		message: "What is the team member's first name?",
	},
	{ type: "input", name: "email", message: "What is the team member's email?" },
	{ type: "input", name: "id", message: "What is the team member's ID?" },
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
		{
			type: "input",
			name: "id",
			message: "What is the team manager's ID?",
		},
		{
			type: "input",
			name: "email",
			message: "What is the team manager's email?",
		},
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
	// read the contents of ./src/index.html
	const html = fs.readFileSync(path.join(__dirname, "src/index.html"), "utf8");
	// replaces the placeholder text  {{TeamPlaceholder}} with the team data

	const teamContainerContent = team
		.map((member) => {
			let span = "";

			if (member.officeNumber) {
				span = `<span class="officeNumber">Office Number: ${member.officeNumber}</span>`;
			}
			if (member.github) {
				span = `<a class="text-sky-500 hover:text-sky-600" href="https://github.com/${member.github}"> Github: ${member.github}</a>`;
			}
			if (member.school) {
				span = `<span class="school">School: ${member.school}</span>`;
			}

			return `<div class="aspect-square rounded-xl border mx-10 flex flex-col">
		<div class="p-5 border-b flex justify-center items-center flex-col">
			<h2 class="text-2xl font-bold">${member.name}</h2>
			<h3 class="font-light">${member.role} </h3>
			
		</div>
		<div class="flex-grow flex flex-col text-lg justify-center items-center	">
			<div class="bg-slate-200 rounded-xl flex flex-col p-10">
				<span>Id: ${member.id}</span>
				<a class="text-sky-500 hover:text-sky-600"href="mailto:${member.email}">Email: ${member.email}</a>
				${span}
			</div>
		</div>
	</div>`;
		})
		.join("");

	const renderedHTML = html.replace(
		"{{TeamPlaceholder}}",
		teamContainerContent
	);

	// write out team into a json file called team.json in ./dist/team.json
	const writePath = "./dist/index.html";
	fs.writeFileSync(writePath, renderedHTML);
}

init();
