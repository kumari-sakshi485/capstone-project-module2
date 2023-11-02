//rewrite code using set:
function nextGreatestLetter(letters, target) {
    const letterSet = new Set(letters);

    while (letterSet.has(target)) {
        target = String.fromCharCode(target.charCodeAt(0) + 1);
        if (target > 'z') {
            target = 'a';
        }
    }

    return target;
}
