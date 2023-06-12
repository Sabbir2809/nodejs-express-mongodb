// "I will finish later!"

// Functions running in parallel with other functions are called asynchronous
console.log('Line 1 Code');

// A good example is JavaScript setTimeout()
setTimeout(() => {
  console.log('Line 2 Code');
}, 2000);

console.log('Line 3 Code');
