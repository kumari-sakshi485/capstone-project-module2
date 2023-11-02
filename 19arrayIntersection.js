function arrayIntersection(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const intersection = [];

  for (const element of set1) {
    if (set2.has(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}

const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [2, 3, 3, 6];
console.log(arrayIntersection(array1, array2)); // Output: [4, 5]

const array3 = [70, 20, 30, 50];
const array4 = [30, 40, 50, 60, 70];
console.log(arrayIntersection(array3, array4)); // Output: []
