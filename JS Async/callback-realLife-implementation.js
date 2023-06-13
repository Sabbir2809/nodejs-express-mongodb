const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
  console.log('Course enrollment is in progress');

  setTimeout(() => {
    if (paymentSuccess) {
      callback();
    } else {
      console.log('Payment Failed');
    }
  }, 2000);
}

function progress(callback) {
  console.log('Course on progress...');

  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log('You could not get enough marks to get the certificate');
    }
  }, 3000);
}

function getCertificate() {
  console.log('Preparing your certificate');

  setTimeout(() => {
    console.log('Congrats! You got the certificate');
  }, 1000);
}

// call pattern
enroll(() => {
  progress(getCertificate);
});
