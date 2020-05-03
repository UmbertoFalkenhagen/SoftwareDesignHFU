"use strict";
console.log("Start");
let eingabe = prompt("Geben Sie den Satz ein: ", "Satz eingeben");
console.log(reverseChars(reverseWords(eingabe)));
console.log(reverseWords(eingabe));
console.log(reverseChars(eingabe));
function reverseWords(eingabe) {
    let reArray = [];
    reArray = eingabe.split(" ");
    reArray = reArray.reverse();
    let returnS;
    returnS = reArray.join(" ");
    return returnS;
}
function reverseChars(eingabe) {
    let reArray = [];
    for (let i = 0; i != eingabe.length; i++) {
        reArray[i] = eingabe.charAt(i);
    }
    reArray = reArray.reverse();
    let returnS;
    returnS = reArray.join("");
    return returnS;
}
//# sourceMappingURL=aufgabe_3_geyer.js.map