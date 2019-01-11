const getSecondLargest = (array) => {
    let firstLargest
    let secondLargest
    for (var i = 0; i <= array.length - 1; i++) {
        let currentNumber = array[i];
        if (currentNumber > firstLargest || typeof firstLargest === 'undefined') {
            secondLargest = firstLargest
            firstLargest = currentNumber
        } else if (currentNumber > secondLargest && currentNumber < firstLargest) {
            secondLargest = currentNumber
        }
    }
    return secondLargest
}
