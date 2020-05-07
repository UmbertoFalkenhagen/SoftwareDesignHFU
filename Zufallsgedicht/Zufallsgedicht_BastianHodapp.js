"use strict";
let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let poem = [];
let j = 0;
if ((subjects.length == objects.length) && (subjects.length == verbs.length)) {
    while ((subjects.length != 0) && (verbs.length != 0) && (objects.length != 0)) {
        poem.push(getVerse());
    }
}
else {
    console.log("Arrays sind nicht gleich lang.");
}
for (let i = 0; i < poem.length; i++) {
    console.log(poem[i]);
}
function getVerse() {
    let randomsubject = Math.floor(Math.random() * (subjects.length - 1));
    let randomverb = Math.floor(Math.random() * (verbs.length - 1));
    let randomobject = Math.floor(Math.random() * (objects.length - 1));
    let newVerse = (subjects.splice(randomsubject, 1) + " " + verbs.splice(randomverb, 1) + " " + objects.splice(randomobject, 1));
    return newVerse;
}
//# sourceMappingURL=Zufallsgedicht_BastianHodapp.js.map