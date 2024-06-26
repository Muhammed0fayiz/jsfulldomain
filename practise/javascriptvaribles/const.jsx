function example() {
    const x = 10;
    if (true) {
      const x = 20; // This creates a new 'x' in the block scope
    }
    console.log(x); // Outputs 10
  }

  example()