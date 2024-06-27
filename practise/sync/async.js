console.log("Start");
function asyncFunction() {
    setTimeout(() => {
        console.log("Async Operation");
    }, 2000); // This simulates a delay of 2 seconds
}
asyncFunction();
console.log("End");