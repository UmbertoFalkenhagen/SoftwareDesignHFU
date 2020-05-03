console.log("Start");
let eingabe: string = prompt("Geben Sie den Satz ein: ", "Satz eingeben");
console.log(reverseChars(reverseWords(eingabe)));
console.log(reverseWords(eingabe));
console.log(reverseChars(eingabe));

function reverseWords(eingabe: string): string {
    let reArray: string[] = [];
    reArray = eingabe.split(" ");
    reArray = reArray.reverse();
    let returnS: string;
    returnS = reArray.join(" ");
    return returnS;
}

function reverseChars(eingabe: string): string {
    let reArray: string[] = [];
    for (let i: number = 0; i != eingabe.length; i++) {
        reArray[i] = eingabe.charAt(i);
    }
    reArray = reArray.reverse();
    let returnS: string;
    returnS = reArray.join("");
    return returnS;
}