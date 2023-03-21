class Book{
    constructor(name, editor, pages){
        this.name = name
        this.editor = editor
        this.pages = pages
    }
    announceTitle(){
        console.log(`Title: ${this.name}`)
    }
    bookDescription(){
        console.log(`${this.name} is a book from ${this.editor} and has ${this.pages} pages.`)
    }
};

const NodeJS = new Book("First class with Node", "Code House", 190);
NodeJS.announceTitle();
NodeJS.bookDescription();
console.log("--------")

class ColectionBook extends Book{
    constructor(name, colectionName){
        super(name)
        this.colectionName = colectionName
    }
    colectionDescription(){
        console.log(`${this.name} is a book from ${this.colectionName} colection.`)
    }
}

const ProgLogic = new ColectionBook("Programing Logic", "Beginers");
ProgLogic.announceTitle();
ProgLogic.colectionDescription();