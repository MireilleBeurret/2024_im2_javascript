/*
* 04.b - OCD
* Deine Mitarbeiterin hat eine leichte Form von OCD und
* hat Angst vor ungeraden Zahlen. Baue ihr eine Funktion,
* die ihr eine Warnung in der Konsole zurückgibt, wenn die
* Zahl ungerade ist. Wichtig: Zahlen mit Kommastellen solle in
* Ganz-Zahlen umgewandelt werden.
*
* Was ist OCD: https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder
* */



let zahl = prompt ("Gib eine Zahl ein.");

zahl = Math.round(zahl);

let rest = zahl % 2;

console.log("Rest:", rest)

if (rest == 0) {

    console.log("Die Zahl ist gerade.");
}
else {
    console.log("Die Zahl ist ungerade.");
}
