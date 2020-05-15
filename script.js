const kek = wordlist();
const html = document.getElementById("inner");

// updateView();

function updateView() {

    html.innerHTML = `
    First word = ${kek[0]};
    `;

    

}


console.log('Hello');

function wordlist() {
const wordList = [
    {word: "Eksistere", gender: "neuter", wordType: "adjective"},
    {word: "Vidundelig"},
    {word: 'Klokke', gender: "female", wordType: "substantive"},
    {word: 'Potet', gender: "male", wordType: "tantive"},
    {verb: "Jogge"},

];
    return wordList;
}
