function firstFunction(callback) {
    setTimeout(() => {
      console.log('First function');
      callback();
    }, 1000);
  }
  
  function secondFunction(callback) {
    setTimeout(() => {
      console.log('Second function');
      callback();
    }, 1000);
  }
  
  function thirdFunction(callback) {
    setTimeout(() => {
      console.log('Third function');
      callback();
    }, 1000);
  }
  
  // Callback hell
  firstFunction(() => {
    secondFunction(() => {
      thirdFunction(() => {
        console.log('All done');
      });
    });
  });
  