//challenge 1 Sum of Positives
// Write a function called sumOfPositives that takes an array of numbers and returns the sum of all the positive numbers in the array.

// sumOfPositives([1, -3, 5, -2, 9, -8]
// ); // 15
function sumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfPositives([40, -43, 25, -14, 2, 4]));
    //end of challenge 1

//challenge 2 find max value
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMax([12,34,54,65,1]));
//end of challenge 2

//start of challenge 3: Find the election winner

function findWinner(candidates) {
    let winner = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}
const candidates = [
  { name: "mini", votes: 50 },
  { name: "maini", votes: 75 },
  { name: "more", votes: 65 }
];
console.log(findWinner(candidates));
//end of challenge 3

//start of challenge 4: Find the longest word
function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord(["egg", "butter", "jellyfish", "fight"]));
//end of challenge 4


//start of challenge 5  count properties
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
console.log(countProperties({ name: "michael", age: 18, city: "Nairobi" })); 
console.log(countProperties({ name: "lizz", age: 30, food: "minsed meat", county: "kisii" }));
//the end of challenge 5

//begining of challenge six , Filter by Length

function filterByLength(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterByLength(["fun", "badge", "draculla", "twist"], 4));
//end of chalenge six

//start of challenge 7 Sum of Even Numbers
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([10,11,12,13,14,15,16,17]));
//the end of challenge 7

//start of challenge 8 Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5])); 
//end of challenge 8


//start of challenge 9 Count Truthy
function countTruthy(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
console.log(countTruthy({ a: 1, b: 0, c: false, d: "hello" }));
console.log(countTruthy({ a: 1, b: 2, c: 3, d: 4, e: 5 }));
//end of challenge 9


//start of challenge 10  Average of Numbers
function average(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([3, 5, 7, 9]));
//end of challenge 10

//challenge 11Linear Search

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); 
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([1, 2, 3, 4, 5], 1));
//end of challenge 11


//start of challenge 12  Reverse Linear Search
function reverseLinearSearch(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(reverseLinearSearch([1, 2, 3, 4, 5], 4));
console.log(reverseLinearSearch([1, 2, 3, 4, 5], 5));
console.log(reverseLinearSearch([1, 2, 3, 4, 5], 1));
console.log(reverseLinearSearch([1, 2, 3, 4, 5], 6));
//end of challenge 12

//start of challenge 13   Linear Search All Indices
function linearSearchAll(arr, value) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            indices.push(i);
        }
    }
    return indices;
}
console.log(linearSearchAll([1, 2, 3, 4, 5, 3], 3));
console.log(linearSearchAll([1, 2, 3, 4, 5], 6)); 
// end of challenge 13

//start of challenge 14  Count Occurrences
function countOccurrences(arr) {
    let occurrences = {};
    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]]) {
            occurrences[arr[i]]++;
        } else {
            occurrences[arr[i]] = 1;
        }
    }
    return occurrences;
}
console.log(countOccurrences(["egg", "beer", "egg", "peas", "beer", "beer"]));
//end of challenge 14

// start of challenge 15  Remove Duplicates
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));
console.log(removeDuplicates(["egg", "beer", "egg", "peas", "beer", "beer"]));
//end of challenge 15


//start of challenge 16   Most Frequent
function mostFrequent(arr) {
    let occurrences = {};
    let maxCount = 0;
    let mostFrequentValue;

    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]]) {
            occurrences[arr[i]]++;
        } else {
            occurrences[arr[i]] = 1;
        }

        if (occurrences[arr[i]] > maxCount) {
            maxCount = occurrences[arr[i]];
            mostFrequentValue = arr[i];
        }
    }
    return mostFrequentValue;
}
console.log(mostFrequent([10, 9, 9, 4, 6, 6, 9]));
// i used controll statements data structures and loops
//end of challenge


//added challenge 17 adding a new array in set of arrays
function addArray(arr, newArr) {
    arr.push(newArr);
    return arr;
}
console.log(addArray([[1, 2], [3, 4]], [5, 6])); // [[1, 2], [3, 4], [5, 6]]
console.log(addArray([[1, 2], [3, 4]], [7, 8])); // [[1, 2], [3, 4], [7, 8]]




//node milestone_2_challenges.js




