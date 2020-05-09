// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "waterbreak" is now active!');
	// every hour remind the user to take a water break
	const everyHour = 3600000;

	setInterval(() => {
		vscode.window.showInformationMessage(generateMessage());
	}, everyHour);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function generateMessage() {
	const messages = [
		"Time for a water break?",
		"Drinking water helps maintain the balance of body fluids, so drink up!",
		"Water helps your kidneys, so remember to stay hydrated!",
		"Stay hydrated.",
		"Health authorities recommend eight 8-ounce glasses, which equals about 2 liters, or half a gallon of water a day. Water break?",
		"Increased water intake may reduce body weight by increasing your metabolism and reducing your appetite.",
		"Studies show that even mild dehydration can impair many aspects of brain function. Water break!",
		"Mild dehydration can impair mood, memory and brain performance. Stay hydrated!",
		"Waterbreak!"
	];

	return messages[Math.floor(Math.random() * messages.length)];
}