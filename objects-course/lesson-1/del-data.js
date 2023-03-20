const character = {
    name: "Gandalf",
    class: "wizard",
    lvl: "20",
    ally: {
        name: "Saruman",
        class: "wizard"
    },
    status: "missing",
};
console.log(character);

delete character.ally;
console.log(character.aliado);

delete character["status"];
console.log(character.status);

console.log(character);