//rewriting the code using hashmap
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    const bobSizesSet = new Set();

    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }

    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
        bobSizesSet.add(bobSizes[i]); // Create a set for faster lookup
    }

    let diff = (sumAlice - sumBob) / 2;

    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        let b = a - diff;

        if (bobSizesSet.has(b)) { // Use set to check for b's presence
            return [a, b];
        }
    }
};
