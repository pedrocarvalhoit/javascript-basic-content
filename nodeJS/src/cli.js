import chalk from "chalk";
import fileGeter from "./regularExpression.js";

const path = process.argv;

async function textProcessor(path){
    const result = await fileGeter(path[2]);
    console.log(chalk.yellow('Links list'), result);
};

textProcessor(path);