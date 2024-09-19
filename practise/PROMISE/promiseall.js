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
  
  // Use Promise.all to handle the array of promises
  Promise.all(promises)
    .then((messages) => {
      console.log('All promises resolved:');
      messages.forEach(message => console.log(message));
    })
    .catch((error) => {
      console.log('One of the promises rejected:');+
      console.log(error);
    });
  