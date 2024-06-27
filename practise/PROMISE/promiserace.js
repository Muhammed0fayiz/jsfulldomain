// Create a function that returns a promise
function createPromise(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve('correct');
      } else {
        reject('not correct');
      }
    });
  }
  
  // Create an array of promises
  const promises = [
    createPromise(true),  // This promise will resolve
    createPromise(false), // This promise will reject
    createPromise(true)   // This promise will resolve
  ];
  
  // Use Promise.race to handle the array of promises
  Promise.race(promises)
    .then((message) => {
      console.log('The first promise settled (resolved or rejected):');
      console.log(message);
    })
    .catch((error) => {
      console.log('The first promise settled (resolved or rejected):');
      console.log(error);
    });
  