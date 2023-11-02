// logic building question 5

// Binary Search
function findTransitionPointBinary(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Linear Search
function findTransitionPointLinear(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return i;
        }
    }
    return -1; // This is not expected to happen as per problem statement.
}

const arr = [1, 1, 1, 1, 0, 0, 0];
const transitionPointBinary = findTransitionPointBinary(arr);
const transitionPointLinear = findTransitionPointLinear(arr);

console.log(`Transition Point (Binary Search): ${transitionPointBinary}`);
console.log(`Transition Point (Linear Search): ${transitionPointLinear}`);
