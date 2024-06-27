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
  
  // Use Promise.any to handle the array of promises
  Promise.any(promises)
    .then((message) => {
      console.log('One of the promises resolved:');
      console.log(message);
    })
    .catch((error) => {
      console.log('All promises were rejected:');
      console.log(error);
    });
  