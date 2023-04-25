import fs from 'fs';
import chalk from 'chalk';

function extractLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = [...text.matchAll(regex)];
    const results = captures.map(capture => ({[capture[1]] : capture[2]}))
   return results.length !== 0 ? results : 'No links on the file';
}

function errorHandler(error){
    throw new Error(chalk.red(error.code, 'File does not exist'))
}

async function fileGeter(filePath){
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding)
        return extractLinks(text); 
    } catch (error) {
        errorHandler(error)
    }

}

export default fileGeter;



