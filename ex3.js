function isVowel(char){

    var voewelList = ['a','e','i','o','u'];

    if(voewelList.indexOf(char) !== -1){

        return true;
    }

    return false;

}

console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('b'));
