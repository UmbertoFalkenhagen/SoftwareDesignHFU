let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" ];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört" ];
let objects: string[] = [ "Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren" ];
let poem: string[] = [];
let j: number = 0;
if ((subjects.length == objects.length) && (subjects.length == verbs.length)) {
    while ((subjects.length != 0) && (verbs.length != 0) && (objects.length != 0) ) {
        poem.push(getVerse());
    }
} else {
   console.log("Arrays sind nicht gleich lang."); 
}
for ( let i: number = 0; i < poem.length; i++) {
    console.log(poem[i]);
}

function getVerse(): string {
    let randomsubject: number = Math.floor(Math.random() * (subjects.length - 1));
    let randomverb: number = Math.floor(Math.random() * (verbs.length - 1));
    let randomobject: number = Math.floor(Math.random() * (objects.length - 1));
    let newVerse: string = (subjects.splice(randomsubject, 1) + " " + verbs.splice(randomverb, 1) + " " + objects.splice(randomobject, 1));
    return newVerse;    
}