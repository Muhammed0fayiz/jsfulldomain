// const f=[1,2,3,4,5,6]
// const s=[7,8,9,0]
// const l=f.concat(s)
// console.log(l)



// //slice
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// const selectedFruits = fruits.slice(1, 3);
// // Result: selectedFruits = ['banana', 'orange']

// const one=[1,2,3,4,5,6,2]
// const i=one.indexOf(2)
// console.log(i,'is');


// //for each

// const numbers = [1, 2, 3];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// // Result: 2, 4, 6 (printed to the console)


// // modification
// const array = [1, 2, 3, 4, 5];

// array.forEach((element, index, arr) => {
//   arr[index] = element * 2;
// });

// console.log(array);  // Output: [2, 4, 6, 8, 10]


// ///filter
// const numberss = [1, 2, 3, 4, 5];
// const evenNumbers = numberss.filter((num) => num % 2 === 0);
// // Result: evenNumbers = [2, 4]
// console.log(evenNumbers);


// const num=[1,2,4,5,6,7]
// const odd=num.filter((num)=>num%2===1)
// console.log(odd);

            max_area = 0
            left = 0
            right = len(height) - 1
    
            while left < right:
                max_area = max(max_area, (right - left) * min(height[left], height[right]))
    
                if height[left] < height[right]:
                    left += 1
                else:
                    right -= 1
            
            return max_area