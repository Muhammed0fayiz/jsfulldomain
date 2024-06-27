console.log("Starting...");

setTimeout(() => {
  console.log("First task completed after 1 second");

  setTimeout(() => {
    console.log("Second task completed after 2 seconds");

    setTimeout(() => {
      console.log("Third task completed after 3 seconds");

      setTimeout(() => {
        console.log("Fourth task completed after 4 seconds");

        // More nested callbacks can lead to callback hell
      }, 4000);

    }, 3000);

  }, 2000);

}, 1000);

// Output:
// Starting...
// (after 1 second) First task completed after 1 second
// (after 2 seconds) Second task completed after 2 seconds
// (after 3 seconds) Third task completed after 3 seconds
// (after 4 seconds) Fourth task completed after 4 seconds
