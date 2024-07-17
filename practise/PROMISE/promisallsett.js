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
  
  // Use Promise.allSettled to handle the array of promises
  Promise.allSettled(promises)
    .then((results) => {
      console.log('All promises settled:');
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          console.log('Fulfilled:', result.value);
        } else if (result.status === 'rejected') {
          console.log('Rejected:', result.reason);
        }
      });
    })
    .catch((error) => {
      console.error('Error handling settled promises:', error);
    });
  