import inquirer from "inquirer";

import chalk from "chalk";

const secretNumber:number = Math.floor(Math.random()*8 +1);

const answer = await inquirer.prompt([{
    name:"userInput",
    message:"Guess any Number between 1 and 8: ",
    type:"number",
    transformer:(input)=> {

        return chalk.blue.bold(input);
        
    },
    }
])
if (answer.userInput === secretNumber){
console.log(chalk.yellow("Congratulations!!! You guessed the RIGHT NUMBER."));

}
else {
    console.log(chalk.yellow("Oops!!You guessed a WRONG NUMBER!!! The CORRECT NUMBER was " + (secretNumber)));
    
}
