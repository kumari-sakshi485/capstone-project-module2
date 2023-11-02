// rewrite code using 2-pointer approach
function isPalindrome(n) {
    if (n < 0) {
        return false; // Negative numbers cannot be palindromes
    }

    const strN = n.toString();
    let left = 0;
    let right = strN.length - 1;

    while (left < right) {
        if (strN[left] !== strN[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
