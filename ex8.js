function filterLongWords(words, i){

    var matchList = [];

    for(var a = 0; a < words.length; a++){
       
        if(words[a].length > i){

            matchList.push(words[a]);
        }
    }

    return matchList;
}

var words = ['kuroshio','a','abc','kumano','suzuya','b'];

console.log(filterLongWords(words, 5));
