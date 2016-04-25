function reverse(str){

    str = str.split('');
    
    var newStr = '';

    var start = str.length - 1 ;

    for(var i = start; i >= 0 ; i--){

        var char = str[i];

        newStr += char;
    }

    return newStr;
}

console.log(reverse('jag testar'));
