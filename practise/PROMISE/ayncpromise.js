async function checkValue() {
    let promise = new Promise((resolve, reject) => {
      let val = 35;
      if (val < 6) {
        resolve('correct');
      } else {
        reject('error');
      }
    });
  
    try {
      let message = await promise;
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
  
  checkValue();
  