var chalk = require("chalk");

var message = chalk.dim.bgCyan("Hello ") + chalk.bgYellow.underline("World");
console.log(message);
