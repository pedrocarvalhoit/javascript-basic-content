const notes = [10, 8, 7.5, 9];

notes.forEach(function(){
    console.log("Oi")
});

notes.forEach(function(notes){
    console.log(notes)
});

//Notes and index
notes.forEach((notes, index) => {
    console.log(`Note: ${notes} is at index ${index}`)
});