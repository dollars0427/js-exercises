function sum(nums){

    var sum = 0;

    for(var i = 0; i < nums.length; i++){

        sum += nums[i];
    }

    return sum;
}

function multiply(nums){

    var answer = 1;

    for(var i = 0; i < nums.length; i++){

        answer = answer * nums[i]
    }

    return answer;
}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));
