import fs from 'fs';
import chalk from 'chalk';

function errorHandler(error){
    throw new Error(chalk.red(error.code, 'File does not exist'))
}

function fileGeter(filePath){
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (error, returnText) =>{
        if(error){
            errorHandler(error);
        }
        console.log(chalk.green(returnText));
    })
}

fileGeter('./files/text.md');    


