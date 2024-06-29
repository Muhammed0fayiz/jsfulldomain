function curryAdd(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = curryAdd(5); // This creates a new function that adds 5 to its argument.
  const result = add5(3);    // This will return 8 because it's like calling add(5, 3).


  function curryAdd(x){
    return function(y){
        return x+y
    }
  }


  const add3=curryAdd(3)

  results=add3(3)
  console.log(results);