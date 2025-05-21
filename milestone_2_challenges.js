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
    console.log(sumOfPositives(123)); 

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

//start of challenge 3: Find the Minimum Value




