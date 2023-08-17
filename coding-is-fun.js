// result.push(wordSection_2[3]) so ein Befehl ist erlaubt
// Word salad
// -----------------------------------
// Take a look at the following arrays:
const wordSection_1 = ["f", "n", "u"];
const wordSection_2 = ["d", "c", "n", "g", "i", "o"];
const wordSection_3 = ["s", "i", "!"];
// Use built-in array methods only to create the sentence
// "coding is fun!" in one result array, at least once slice() and unshift()!
// Your code should not exceed 6 lines, have fun! :)

wordSection_1.splice(1, 0, wordSection_1[2]); // fügt u hinzu
wordSection_1.pop(); //und entfernt das letzte u
wordSection_1.push(wordSection_3[2]); // packt das ! zusätzlich ans Ende von wordSection_1

wordSection_3.unshift(wordSection_3[1]); // packt das i zusätzlich nach vorne
wordSection_3.pop();
wordSection_3.pop(); // warum funktioniert wordSection_3.splice(0,2) da nicht anstelle von zweimal pop?

wordSection_2.unshift(wordSection_2[1]); // packt das c zusätzlich nach vorne

console.log(wordSection_2, wordSection_3, wordSection_1);
