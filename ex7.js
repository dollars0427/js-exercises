function findLongestWord(words){
    
    var sortedWords = words.sort(
        function(words1, words2) {
            return words1.length - words2.length;
        });

        var answer = sortedWords.pop();

        return answer;
}

console.log(findLongestWord(['hello', 'a', 'kuroshio','kagero']));
