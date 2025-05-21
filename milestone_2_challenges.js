//challenge 1 Sum of Positives
function sumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

    console.log(sumOfPositives([123])); 

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

//node milestone_2_challenges.js




