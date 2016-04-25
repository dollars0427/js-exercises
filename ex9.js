function charFreq(str){

    var freq = {};

    for(var i = 0; i < str.length; i++){

        if(freq.hasOwnProperty(str[i])){

            freq[str[i]] += 1;
        }else{

            freq[str[i]] = 1;
        }
    }

    return freq;
}

console.log(charFreq('aaaaaabbbbbccccdddqweeeqsaasd'));
