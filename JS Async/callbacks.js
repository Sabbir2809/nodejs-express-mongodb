// "I Will call back later!"

function display(some) {
  console.log(some);
}
// A-callback function can run after another function has finished
function calculator(num1, num2, callback) {
  const sum = num1 + num2;
  // This technique allows a function to call another function
  callback(sum);
}
// A callback is a function passed as an argument to another function
calculator(3, 2, display);
