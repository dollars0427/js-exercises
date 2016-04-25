function translate(str){

    str = str.toLowerCase();

    var vowels = ['a','e','i','o','u'," "];
    
    var newStr = '';
    
    for(var i = 0; i < str.length; i++){
       
        var char = str.charAt(i);
       
        if(vowels.indexOf(char) != -1){
            newStr += char;
        }else{
             newStr += char + 'o' + char;
        }
    }
        return newStr;
}

console.log(translate('this is fun'));
console.log(translate('hello'));
console.log(translate('sardo is hetare'));
