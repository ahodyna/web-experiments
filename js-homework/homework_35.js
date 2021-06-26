const getNextSequence = (inputSequence, lastPositionMaxValue) => {
    const sequence = [...inputSequence]
    const lastElementIndex = sequence.length - 1

    if (sequence[lastElementIndex] < lastPositionMaxValue) {       // with lastPositionMaxValue == 5: [0, 2, 3] -> [0, 2, 4]
        sequence[lastElementIndex] = sequence[lastElementIndex] + 1
        return sequence
    } else {
        // [0, 1, 2, 4, 7, 8, 9] -> positionIndex=3
        // search for index to initialize from
        let positionIndex = lastElementIndex
        let positionMaxValue = lastPositionMaxValue

        for (let i=lastElementIndex; i >= 0; i--) {
            if (sequence[i] == positionMaxValue) {
                positionIndex = i-1
                positionMaxValue--
            } else {
                break
            }
        }

        // populate from positionIndex 
        if (positionIndex < 0) {
            return null         // max sequence is already reached
        } else {
            let initialValue = sequence[positionIndex] + 1
            for (let i=positionIndex; i < sequence.length; i++) {
                sequence[i] = initialValue
                initialValue++
            }
            return sequence
        }
    }
}

// console.log(nextSequence([0, 1, 4], 5))  // [0, 1, 5]
// console.log(nextSequence([0, 1, 5], 5))  // [0, 2, 3]
// console.log(nextSequence([0, 2, 3], 5))  // [0, 2, 4]
// console.log(nextSequence([0, 4, 5], 5))  // [1, 2, 3]
// console.log(nextSequence([3, 4, 5], 5))  // null

const chooseBestDistance = (t, k, ls) => {
    let maxSum = t;
    let positions = k;
    let weightsArr = ls;

    if (positions > weightsArr.length) {
        return null
    }

    let currentSequence = intialSequence(positions);
    let currentSequenceWeights = calculateSequenceWeights(currentSequence, weightsArr)
    
    let searchedSequenceWeights = currentSequenceWeights < maxSum? currentSequenceWeights: -1;

    let continueToSearch = true;
    const maxIndex = weightsArr.length - 1

    while (continueToSearch) {
        currentSequence = getNextSequence(currentSequence, maxIndex)

        if (currentSequence == null) {
            // next sequence doesn't exists
            break
        } else {
            currentSequenceWeights = calculateSequenceWeights(currentSequence, weightsArr)
            if (searchedSequenceWeights < currentSequenceWeights && currentSequenceWeights < maxSum) {
                searchedSequenceWeights = currentSequenceWeights
                
                if (searchedSequenceWeights == maxSum) {
                    break
                }    
            }
        }
    }
    return searchedSequenceWeights
}

function intialSequence(n) {  // create array: [0, 1, 2, ..., n]
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    return arr
}

function calculateSequenceWeights(currentSequence, weightsArr) {
    let sum = 0;
    for (let i = 0; i < currentSequence.length; i++) {
        sum += weightsArr[currentSequence[i]]
    }
    return sum
}

console.log(chooseBestDistance(61, 3, [50, 40, 25, 10, 4, 3, 2])) 
console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null
console.log(chooseBestDistance(817, 2, [ 107, 196, 460, 459, 452, 240, 130, 339, 303, 282, 324, 279 ]))
