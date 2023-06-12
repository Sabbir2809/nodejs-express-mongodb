const paymentSuccess = true;
const marks = 70;

function enroll() {
  console.log('Course enrollment is in progress.');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject('Payment Failed');
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log('Course on progress...');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 70) {
        resolve();
      } else {
        reject('You could not get enough marks to get the certificate');
      }
    }, 4000);
  });
  return promise;
}

function getCertificate() {
  console.log('Preparing your certificate');

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Congrats! You go the certificate');
    }, 1000);
  });
  return promise;
}

// call
enroll()
  .then(progress)
  .then(getCertificate)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
