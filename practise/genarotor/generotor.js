function* countGenerator() {
    let count = 0;
    while (true) {
      yield count;
      count++;
    }
  }
  
  // Using the generator function
  const generator = countGenerator();
  
  console.log(generator.next().value); // Output: 0
  console.log(generator.next().value); // Output: 1
  console.log(generator.next().value); // Output: 2
  