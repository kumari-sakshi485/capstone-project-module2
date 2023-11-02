function insert7(str) {
  let count = 0;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      count++;
    }

    if (count % 6 === 0 && count !== 0) {
      result += str[i] + '7';
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(insert7("Hello World And Universe")); 
console.log(insert7("Full Stack Web Development")); 