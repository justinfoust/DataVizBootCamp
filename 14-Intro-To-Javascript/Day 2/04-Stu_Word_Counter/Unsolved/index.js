var string = "I yam what I yam and always will be what I yam";

function strcount(a) {
    wordDict = {};
   a.split(" ").forEach(word => {
        if (word in wordDict) {
            wordDict[word] += 1;
        }
        else {
            wordDict[word] = 1;
        }
   })
   return wordDict; 
}

strcount(string)