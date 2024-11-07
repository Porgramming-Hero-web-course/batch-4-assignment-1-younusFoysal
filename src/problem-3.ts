function countWordOccurrences(sentence: string, word: string): number {
    let count: number = 0;
    const words: string[] = sentence.toLowerCase().split(" ")
    const singleWord: string = word.toLowerCase()
    for (let i : number = 0; i < words.length; i++) {
        if (words[i].replace(/[.,!]/g, "") === singleWord){
            count++;
        }
    }
    return count;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))