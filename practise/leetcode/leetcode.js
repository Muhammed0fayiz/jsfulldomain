var frequencySort = function(nums) {
    let result = [];
    let obj = {};
  
    // Count the frequency of each number
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }
  
    // Convert the object to an array of [number, frequency] pairs
    let frequencyArray = Object.entries(obj).map(([num, freq]) => [parseInt(num), freq]);
  
    // Sort the array by frequency, and by number in descending order if frequencies are the same
    frequencyArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });
  
    // Build the result array
    for (let [num, freq] of frequencyArray) {
        for (let i = 0; i < freq; i++) {
            result.push(num);
        }
    }
  
    return result;
  }
  
  console.log(frequencySort([1, 1, 2, 2, 2, 3])); // Output: [3, 1, 1, 2, 2, 2]
  