const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");

// array of questions for generating a team profile
const questions = [
	{
		type: "input",
		name: "name",
		message: "What is your name?",
	},
	{ type: "input", name: "email", message: "What is your email?" },

	{ type: "input", name: "github", message: "What is your GitHub username?" },
];

function init() {
	inquirer.prompt(questions).then((response) => {});
}
