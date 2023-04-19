import fs from 'fs';
import chalk from 'chalk';

function errorHandler(error){
    throw new Error(chalk.red(error.code, 'File does not exist'))
}

function fileGeter(filePath){
    const encoding = 'utf-8';
    fs.promises.readFile(filePath, encoding)
        .then((text) => console.log(chalk.green(text)))
        .catch(errorHandler)
}

fileGeter('./files/text.md');    


