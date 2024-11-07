function countWordOccurrences(sentence: string, word: string): number {
    const lowSentence : string = sentence.toLowerCase();
    const singleWord : string = word.toLowerCase();
    const words: string[] = lowSentence.toLowerCase().split(" ")

    let count: number = 0;
    for (let i : number = 0; i < words.length; i++) {
        if (words[i] === singleWord){
            count++;
        }
    }
    return count;
}

//console.log(countWordOccurrences("I love typescript", "typescript"));