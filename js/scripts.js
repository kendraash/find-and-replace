var findAndReplace = function(sentence, findWord, replaceWord) {
  if(sentence && findWord && replaceWord != null && (findWord != replaceWord) )
  {
    // sentence = sentence.LowerCase();
    // var position = sentence.search(/findWord/i);
    var final_sentence = sentence.replace(findWord, replaceWord)
    return final_sentence;
  }
  else {
    return false;
  }
};
