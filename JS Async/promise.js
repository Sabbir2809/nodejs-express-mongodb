const task = true;

console.log('Task 1');

// promise definition
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (task) {
      resolve('Task 2');
    } else {
      reject('Failed');
    }
  }, 2000);
});

// promise call
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('All is well');
  });

console.log('Task 3');
