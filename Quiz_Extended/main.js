"use strict";
let punkte = 0;
let anzahlfragen;
let fragenpool;
let eingabe = prompt("Bitte wählen Sie was sie tun möchten und geben Sie die entsprechende Zahl ein. 1: Quizfrage beantworten, 2: Neue Quizfrage erstellen, 3: Programm verlassen", "1, 2 oder 3?");
if (parseInt(eingabe) == 1) {
    answerRandomQuestion();
}
else if (parseInt(eingabe) == 2) {
    addNewQuestion();
}
else if (parseInt(eingabe) == 3) {
    console.log("Tschüss!");
}
else {
    throw new Error("This is no valid input.");
}
function addNewQuestion() {
    let questiontype = prompt("Bitte wählen Sie den Fragentyp: 1. normale Frage, 2. Ja-/Nein-Frage, 3. Multiple-Choice-Frage, 4. Schätzfrage, 5. Freitext-Frage ");
    switch (parseInt(questiontype)) {
        case 1: {
            NormalQuestion.addNewQuestion();
        }
        case 2: {
            YesNoQuestion.addNewQuestion();
        }
        case 3: {
            MultipleChoiceQuestion.addNewQuestion();
        }
        case 4: {
            GuessQuestion.addNewQuestion();
        }
        case 5: {
            TextQuestion.addNewQuestion();
        }
    }
}
function answerRandomQuestion() {
    let i = randomIntFromInterval(0, fragenpool.length);
    fragenpool[i].answerQuestion;
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//# sourceMappingURL=main.js.map