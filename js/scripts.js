var findAndReplace = function(sentence, findWord, replaceWord) {
  if(sentence && findWord && replaceWord != null && (findWord != replaceWord) )
  {
    var allFindWord = new RegExp(findWord, 'g');
    var final_sentence = sentence.replace(allFindWord, replaceWord)
    return final_sentence;
  }
  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#find-and-replace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var findWord = $("input#findWord").val();
    var replaceWord = $("input#replaceWord").val();

    var output = findAndReplace(sentence, findWord, replaceWord);

    $(".originalSentence").text(sentence);
    $(".findWord").text(findWord);
    $(".replaceWord").text(replaceWord);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
