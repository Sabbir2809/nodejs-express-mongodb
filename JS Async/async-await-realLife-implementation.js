const paymentSuccess = true;
const marks = 67;

function enroll() {
  console.log('Course enrollment is in progress');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject('Payment Fail, Please Try Again!');
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

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Congrats! You go the certificate');
    }, 1500);
  });
  return promise;
}

async function course() {
  try {
    await enroll();
    await progress();
    const complete = await getCertificate();
    console.log(complete);
  } catch (error) {
    console.error(error);
  }
}
course();
