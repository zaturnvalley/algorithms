//Find max times a number occurs in array, return the max count of given number
function findMaxCount(numbers) {
    var numObj = {}
    var max = 0;
    for(var i = 0; i < numbers.length; i++){
        if (!numObj[numbers[i]]){
            numObj[numbers[i]] = 1; 
        } else {
            numObj[numbers[i]] += 1;
        }
    }
    for (num in numObj){
        if(numObj[num] > max){
            max = numObj[num];
        }
    } return max;
}

findMaxCount([3,4,5,3,4,3,3])
//this will return 4 because 3 came up the most, 4 times