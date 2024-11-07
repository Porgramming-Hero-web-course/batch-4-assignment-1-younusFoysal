function removeDuplicates(numbers: number[]): number[] {
    let singleNumbers: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
        if (singleNumbers.indexOf(numbers[i]) === -1) {
            singleNumbers.push(numbers[i]);
        }
    }
    return singleNumbers;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))