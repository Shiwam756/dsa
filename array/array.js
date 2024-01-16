// Write a JavaScript function to check whether an `input` is an array or not.
// const array = [1, 2, 3, 4, 56];

// const name = "Shivam";

// const result = Array.isArray(array);

// const result2 = Array.isArray(name);
// console.log(result);

// console.log(result2);

// const is_array = function (input) {
//   if (toString.call(input) === "[object Array]") return true;
//   return false;
// };
// console.log(is_array("Shivam"));
// console.log(is_array([1, 2, 4, 0]));

// Write a JavaScript function to clone an array.

// Solution 1
// let array_Clone = function (arra1) {
//   return arra1.slice(0);
// };
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Solution 2
// let array_Clone2 = (arra1) => arra1.slice(0);
// console.log(array_Clone2([1, 2, 4, 0]));
// console.log(array_Clone2([1, 2, [4, 0]]));

// Solution 3
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

// let array2 = [...array1];

// array2.push(10);

// console.log(array2);
// console.log(array1);

// Solution 4
// let x = [1, 2, 3, 4];
// console.log("Original array:");
// console.log(x);
// let y = x.filter(() => true);
// // y.push(7);
// console.log("Clone of the said array:");
// console.log(y);

// Solution 5
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`Original Array: ${x}`);
// console.log(x);
// let y = x.map((i) => i);
// console.log(`Clone Array: ${y}`);
// console.log(y);

// Solution 6
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Original Array");
// console.log(x);
// let y = x.slice();
// console.log("Clone Array");
// console.log(y);

// Solution 7
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Original Array");
// console.log(x);
// let y = Array.from(x);
// console.log("Clone Array");
// console.log(y);

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let firstElement = x[0];
// console.log(firstElement);

// function getFirstElement(arr) {
//   if (arr && arr.length > 0) {
//     return arr[0];
//   } else {
//     return undefined;
//   }
// }

// const myArray = [1, 2, 3, 4, 5];
// const firstElement = getFirstElement(myArray);

// console.log(firstElement);

// function getFirstElement(arr) {
//   if (arr && arr.length > 0) {
//     return arr[0];
//   } else {
//     return undefined;
//   }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const firstElementOfArray = getFirstElement(array);

// console.log(firstElementOfArray);

// const getFirstElement = (array) => {
//   if (array && array.length > 0) {
//     return array[0];
//   } else {
//     return undefined;
//   }
// };

// const myArray = [20, 2, 3, 4, 5, 6, 7, 8, 9];
// const firstElement = getFirstElement(myArray);
// console.log(firstElement);

// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// const getLastElement = (array) => {
//   if (array && array.length > 0) {
//     return array[array.length - 1];
//   } else {
//     return undefined;
//   }
// };

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const lastElement = getLastElement(myArray);
// console.log(lastElement);
