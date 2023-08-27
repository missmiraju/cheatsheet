[1,2,3].length; // returns the amount of elements = 3

[1,2,3].push(4); // adds the passed element = [1,2,3,4]
[1,2,3].pop(); // removes the last element = [1,2]
[1,2,3].shift(); // removes the first element = [2,3]
[1,2,3].unshift(0); // adds the passed element (0) = [0,1,2,3]

[1,2,3].fill(10); // returns an array where all elements are substituted by the passed value (10) = [10,10,10]
[1,2,3].concat([4,5]); // creates and returns a new array by concatenating the passed value = [1,2,3,4,5]
[1,2,3].reverse(); // reverses the given array = [3,2,1]
[2,3,1].sort(); // sorts the given array from lowest to highest, or A > Z = [1,2,3]
[1,2,3].join("-"); // creates and returns a new string by concatenating all of the elements in the array separated by a specified separator = 1-2-3
[1,2,[3]].flat(); // returns a single array without nesting = [1,2,3]

[1,2,3].at(2); // returns the element at the passed index = 3
[1,2,3].find((num) => num > 1); // returns the first element in the provided rray that satisfies the passed information = 2
[1,2,3].findIndex((num) => i === 2); // returns the Index of the given Number = 1
[1,2,3].indexOf(3); // returns the Index of the given Number = 2
[1,2,3].includes(3); // returns Boolean whether the given Number exists or not = true

[1,2,3].map((num) => Math.pow(num, 2)); // Math.pow() is equivalent to the ** operator, Math.pow(base, exponent) = [1,4,9]
[1,2,3].filter((num) => num % 2); // removes all the elements which are dividable by 2 = [1,3]
[1,2,3].every((num) => num > 1); // returns boolean, whether all elements are > 1 = false
[1,2,3].some((num) => num == 3); // returns boolean, whether there are elements equal to the given number = true

Array.isArray([1,2,3]); // determines if the passed value is an Array or not = true
Array.from('foo'); // creates a new Array instance = ["f", "o", "o"]
