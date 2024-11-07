"use strict";
function countWordOccurrences(sentence, word) {
    let count = 0;
    const words = sentence.toLowerCase().split(" ");
    const singleWord = word.toLowerCase();
    for (let i = 0; i < words.length; i++) {
        if (words[i].replace(/[.,!]/g, "") === singleWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
