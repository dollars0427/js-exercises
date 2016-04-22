function maxOfThree(num1, num2, num3){
    
    if(num1 > num2 && num1 > num3){
        return num1;
    }

    if(num2 > num1 && num2 > num3){
        return num2;
    }

    if(num3 > num1 && num3 > num2){
        return num3;
    }
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(2,1,4));
console.log(maxOfThree(1,3,2));
