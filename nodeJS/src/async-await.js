import fs from 'fs';
import chalk from 'chalk';

function errorHandler(error){
    throw new Error(chalk.red(error.code, 'File does not exist'))
}

async function fileGeter(filePath){
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)
        console.log(chalk.yellow(text));
    } catch (error) {
        errorHandler(error)
    }
}

fileGeter('./files/text.md');   
 

