// Back-End
var pigLatin = function(sentence) {

  if (isVowel(sentence.charAt(0))) {
    sentence = addAY(sentence);
  } else {
    for (var i = 1; i < sentence.length; i++) {
      if (isVowel(sentence.charAt(i))) {
        var newStr = sentence.slice(i) + sentence.slice(0, i);
        sentence = newStr;
      };
    };
  };

  return sentence;
}

var addAY = function(word) {
  return word + "ay";
}

var isVowel = function(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}


// Front-End
$(function() {
  $("#pig-latin").submit(function() {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
  })
})
